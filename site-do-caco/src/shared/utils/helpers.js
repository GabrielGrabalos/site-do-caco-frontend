export function formatDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export function formatShortDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);
}

export function formatTime(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

export function getTimeUntil(targetDate) {
  const now = new Date();
  const target = new Date(targetDate);
  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Combina uma data e hora em uma única Date, usando valores padrão se hora estiver vazia
 * @param {Date} date - A data base
 * @param {string} time - A hora no formato HH:MM (pode ser vazia)
 * @param {string} defaultTime - Hora padrão se time estiver vazio (ex: '00:00' ou '23:59')
 * @returns {Date|null} A data combinada ou null se date for null/undefined
 */
export function combineDateAndTime(date, time, defaultTime = '00:00') {
  if (!date) return null;
  
  const timeToUse = (time && time.trim()) ? time : defaultTime;
  const [hours, minutes] = timeToUse.split(':').map(Number);
  
  const combined = new Date(date);
  combined.setHours(hours, minutes, 0, 0);
  
  return combined;
}

/**
 * Converte uma Date para string ISO local (sem conversão de timezone)
 * @param {Date} date - A data a ser convertida
 * @returns {string|null} String ISO local ou null se date for null/undefined
 */
export function toLocalISOString(date) {
  if (!date) return null;
  
  const pad = (num) => num.toString().padStart(2, '0');
  return (
    date.getFullYear() +
    '-' + pad(date.getMonth() + 1) +
    '-' + pad(date.getDate()) +
    'T' + pad(date.getHours()) +
    ':' + pad(date.getMinutes()) +
    ':' + pad(date.getSeconds())
  );
}
