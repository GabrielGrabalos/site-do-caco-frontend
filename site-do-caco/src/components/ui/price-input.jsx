import { Input } from './input';
import { forwardRef, useState } from 'react';

const PriceInput = forwardRef(({ value, onChange, placeholder = '0,00', className, ...props }, ref) => {
  const [displayValue, setDisplayValue] = useState(formatDisplay(value));

  function formatDisplay(val) {
    if (val === '' || val === null || val === undefined) return '';
    const num = typeof val === 'number' ? val : parseFloat(val);
    if (isNaN(num)) return '';
    return num.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function parseValue(str) {
    if (!str) return '';
    // Remove tudo exceto números
    const numbers = str.replace(/\D/g, '');
    if (!numbers) return '';
    // Converte centavos para reais (divide por 100)
    const value = parseInt(numbers) / 100;
    return value;
  }

  const handleChange = (e) => {
    const input = e.target.value;
    const parsed = parseValue(input);
    
    if (parsed === '') {
      setDisplayValue('');
      onChange?.('');
    } else {
      const formatted = formatDisplay(parsed);
      setDisplayValue(formatted);
      onChange?.(parsed);
    }
  };

  const handleBlur = () => {
    if (value !== '' && value !== null && value !== undefined) {
      setDisplayValue(formatDisplay(value));
    }
  };

  return (
    <Input
      ref={ref}
      type="text"
      value={displayValue}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={placeholder}
      className={className}
      {...props}
    />
  );
});

PriceInput.displayName = 'PriceInput';

export { PriceInput };
