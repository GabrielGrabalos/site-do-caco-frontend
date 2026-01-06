import { Input } from '@/components/ui/input';

export function DateInput({ value, onChange, className, ...props }) {
  // Converte yyyy-mm-dd para dd/mm/yyyy para exibição
  const formatToDisplay = (isoDate) => {
    if (!isoDate) return '';
    const [year, month, day] = isoDate.split('-');
    return `${day}/${month}/${year}`;
  };

  // Converte dd/mm/yyyy para yyyy-mm-dd para armazenamento
  const formatToISO = (displayDate) => {
    if (!displayDate) return '';
    const cleaned = displayDate.replace(/\D/g, '');
    if (cleaned.length !== 8) return '';
    
    const day = cleaned.slice(0, 2);
    const month = cleaned.slice(2, 4);
    const year = cleaned.slice(4, 8);
    
    // Valida a data
    const date = new Date(year, month - 1, day);
    if (date.getFullYear() != year || date.getMonth() + 1 != month || date.getDate() != day) {
      return '';
    }
    
    return `${year}-${month}-${day}`;
  };

  const handleChange = (e) => {
    let input = e.target.value.replace(/\D/g, ''); // Remove tudo que não é número
    
    // Limita a 8 dígitos (ddmmyyyy)
    input = input.slice(0, 8);
    
    // Adiciona as barras automaticamente
    let formatted = '';
    if (input.length > 0) {
      formatted = input.slice(0, 2);
      if (input.length >= 3) {
        formatted += '/' + input.slice(2, 4);
      }
      if (input.length >= 5) {
        formatted += '/' + input.slice(4, 8);
      }
    }
    
    e.target.value = formatted;
    
    // Se tiver 10 caracteres (dd/mm/yyyy), converte para ISO e envia
    if (formatted.length === 10) {
      const isoDate = formatToISO(formatted);
      if (isoDate) {
        onChange(isoDate);
        return;
      }
    }
    
    // Se não estiver completo ou for inválido, envia vazio
    onChange('');
  };

  return (
    <Input
      type="text"
      value={formatToDisplay(value)}
      onChange={handleChange}
      placeholder="dd/mm/aaaa"
      maxLength={10}
      className={className}
      {...props}
    />
  );
}
