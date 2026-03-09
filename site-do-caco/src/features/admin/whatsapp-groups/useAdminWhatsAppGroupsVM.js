import { useEffect, useMemo, useState } from 'react';
import { whatsappGroupService } from '@/shared/services/whatsappGroupService';

const CURRENT_YEAR = new Date().getFullYear();

const COURSE_OPTIONS = [
  { value: 'CIENCIAS_DA_COMPUTACAO', label: 'Ciências da Computação' },
  { value: 'ENGENHARIA_DA_COMPUTACAO', label: 'Engenharia da Computação' },
  { value: 'OUTRO', label: 'Outro' },
];

const INITIAL_FORM = {
  course: '',
  entryYear: String(CURRENT_YEAR),
  whatsappLink: '',
};

export function useAdminWhatsAppGroupsVM() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [editingGroupId, setEditingGroupId] = useState(null);
  const [form, setForm] = useState(INITIAL_FORM);

  useEffect(() => {
    loadGroups();
  }, []);

  const loadGroups = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await whatsappGroupService.getAll();
      setGroups(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message || 'Erro ao carregar grupos de WhatsApp');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setForm(INITIAL_FORM);
    setEditingGroupId(null);
  };

  const setField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const startEdit = (group) => {
    setEditingGroupId(group.id);
    setForm({
      course: group.course || '',
      entryYear: String(group.entryYear || CURRENT_YEAR),
      whatsappLink: group.whatsappLink || group.groupLink || '',
    });
  };

  const saveGroup = async () => {
    try {
      setSubmitting(true);

      const payload = {
        course: form.course,
        entryYear: Number(form.entryYear),
        whatsappLink: form.whatsappLink.trim(),
      };

      let saved;
      if (editingGroupId) {
        saved = await whatsappGroupService.update(editingGroupId, payload);
        setGroups((prev) => prev.map((group) => (group.id === editingGroupId ? saved : group)));
      } else {
        saved = await whatsappGroupService.create(payload);
        setGroups((prev) => [saved, ...prev]);
      }

      resetForm();
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message || 'Erro ao salvar grupo de WhatsApp' };
    } finally {
      setSubmitting(false);
    }
  };

  const deleteGroup = async (id) => {
    try {
      await whatsappGroupService.remove(id);
      setGroups((prev) => prev.filter((group) => group.id !== id));

      if (editingGroupId === id) {
        resetForm();
      }

      return { success: true };
    } catch (err) {
      return { success: false, error: err.message || 'Erro ao remover grupo de WhatsApp' };
    }
  };

  const groupsSorted = useMemo(() => {
    return [...groups].sort((a, b) => {
      const yearDiff = (b.entryYear || 0) - (a.entryYear || 0);
      if (yearDiff !== 0) return yearDiff;
      return (a.course || '').localeCompare(b.course || '');
    });
  }, [groups]);

  return {
    groups: groupsSorted,
    loading,
    submitting,
    error,
    form,
    editingGroupId,
    isEditing: !!editingGroupId,
    courseOptions: COURSE_OPTIONS,

    setField,
    resetForm,
    startEdit,
    saveGroup,
    deleteGroup,
    reload: loadGroups,
  };
}
