import { Input } from '@/components/ui/input';

export function TimeInput({ value, onChange, onError, error, placeholder = "00:00", label }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Backspace' && e.target.selectionStart === 3 && value.length === 3) {
      e.preventDefault();
      onChange(value.slice(0, 2));
    }
  };

  const handleChange = (e) => {
    let newValue = e.target.value.replace(/[^0-9]/g, '');
    
    if (newValue.length === 0) {
      onChange('');
      return;
    }
    
    if (newValue.length >= 2) {
      newValue = newValue.slice(0, 2) + ':' + newValue.slice(2, 4);
    }
    
    if (newValue.length <= 5) {
      onChange(newValue);
    }
  };

  const handleBlur = (e) => {
    const val = e.target.value;
    if (val && !/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(val)) {
      onError('Formato inválido. Use HH:MM (ex: 09:30)');
    } else {
      onError(null);
    }
  };

  return (
    <div>
      {label && (
        <label className="block text-sm font-medium mb-2">
          {label}
        </label>
      )}
      <Input
        type="text"
        value={value}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        maxLength={5}
        className={error ? 'border-red-500' : ''}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
      <p className="text-xs text-gray-500 mt-1">
        Deixe vazio para {placeholder}. Formato: HH:MM
      </p>
    </div>
  );
}
