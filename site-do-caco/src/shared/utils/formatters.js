/**
 * Formata um valor numérico como moeda brasileira (BRL)
 * @param {number} value - Valor a ser formatado
 * @returns {string} Valor formatado como R$ X,XX
 */
export function formatCurrency(value) {
  if (value === null || value === undefined) {
    return 'R$ 0,00';
  }
  
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

/**
 * Formata uma data no padrão brasileiro
 * @param {string | Date} date - Data a ser formatada
 * @returns {string} Data formatada como DD/MM/YYYY
 */
export function formatDate(date) {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateFormat('pt-BR').format(dateObj);
}

/**
 * Formata uma data e hora no padrão brasileiro
 * @param {string | Date} date - Data a ser formatada
 * @returns {string} Data formatada como DD/MM/YYYY às HH:MM
 */
export function formatDateTime(date) {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(dateObj);
}
