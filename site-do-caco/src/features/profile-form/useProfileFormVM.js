import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { profileFormService } from '@/shared/services/profileFormService';
import { apiClient } from '@/shared/services/apiClient';
import { authService } from '@/shared/services/authService';
import { redirectManager } from '@/shared/services/redirectManager';

const CURRENT_YEAR = new Date().getFullYear();

const COURSE_OPTIONS = [
  { value: 'CIENCIAS_DA_COMPUTACAO', label: 'Ciências da Computação' },
  { value: 'ENGENHARIA_DA_COMPUTACAO', label: 'Engenharia da Computação' },
  { value: 'OUTRO', label: 'Outro' },
];

// Gera lista de anos do ano atual até 2018; "Antes de 2018" fica no final
const buildYearOptions = () => {
  const years = [];
  for (let y = CURRENT_YEAR; y >= 2018; y--) {
    years.push({ value: y, label: String(y) });
  }
  years.push({ value: 'before_2018', label: 'Antes de 2018' });
  return years;
};

export const YEAR_OPTIONS = buildYearOptions();

export function useProfileFormVM() {
  const navigate = useNavigate();

  const [course, setCourse] = useState('');
  const [otherCourseName, setOtherCourseName] = useState('');
  const [entryYear, setEntryYear] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const isOther = course === 'OUTRO';

  const validate = () => {
    if (!course) return 'Selecione seu curso.';
    if (isOther && !otherCourseName.trim()) return 'Informe o nome do curso.';
    if (otherCourseName.trim().length > 50) return 'O nome do curso deve ter no máximo 50 caracteres.';
    if (!entryYear) return 'Selecione seu ano de ingresso.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        course,
        otherCourseName: isOther ? otherCourseName.trim() : null,
        entryYear: entryYear === 'before_2018' ? 2017 : Number(entryYear),
      };

      await profileFormService.submitProfileForm(payload);

      // Busca dados do usuário agora que o formulário está preenchido
      try {
        const user = await apiClient.get('user/me');
        authService.setUser(user);
      } catch {
        // Se falhar, não é crítico; o usuário já está autenticado
      }

      // Redireciona usando o RedirectManager
      const redirectTo = redirectManager.getFormRedirectPath() || '/';
      redirectManager.clearFormRedirect();
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError(err.message || 'Ocorreu um erro ao enviar o formulário. Tente novamente.');
    } finally {
      setSubmitting(false);
    }
  };

  return {
    course,
    setCourse,
    otherCourseName,
    setOtherCourseName,
    entryYear,
    setEntryYear,
    submitting,
    error,
    isOther,
    handleSubmit,
    courseOptions: COURSE_OPTIONS,
    yearOptions: YEAR_OPTIONS,
  };
}
