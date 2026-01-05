/**
 * Utilitários para gerenciar cookies de forma segura
 */

/**
 * Define um cookie
 * @param {string} name - Nome do cookie
 * @param {string} value - Valor do cookie
 * @param {number} days - Dias até expiração (opcional)
 */
export function setCookie(name, value, days) {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = `; expires=${date.toUTCString()}`;
  }
  
  // SameSite=Strict para segurança CSRF
  // Secure em produção (HTTPS)
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${name}=${encodeURIComponent(value)}${expires}; path=/${secure}; SameSite=Strict`;
}

/**
 * Obtém o valor de um cookie
 * @param {string} name - Nome do cookie
 * @returns {string|null} Valor do cookie ou null
 */
export function getCookie(name) {
  const nameEQ = name + '=';
  const cookies = document.cookie.split(';');
  
  for (let cookie of cookies) {
    let c = cookie.trim();
    if (c.indexOf(nameEQ) === 0) {
      return decodeURIComponent(c.substring(nameEQ.length));
    }
  }
  
  return null;
}

/**
 * Remove um cookie
 * @param {string} name - Nome do cookie
 */
export function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict`;
}

/**
 * Define um cookie com timestamp de expiração em milissegundos
 * @param {string} name - Nome do cookie
 * @param {string} value - Valor do cookie
 * @param {number} expiryTimestamp - Timestamp em milissegundos
 */
export function setCookieWithTimestamp(name, value, expiryTimestamp) {
  const date = new Date(expiryTimestamp);
  const expires = `; expires=${date.toUTCString()}`;
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${name}=${encodeURIComponent(value)}${expires}; path=/${secure}; SameSite=Strict`;
}
