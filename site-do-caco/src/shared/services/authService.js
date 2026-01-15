import { apiClient } from './apiClient';
import { setCookie, getCookie, deleteCookie, setCookieWithTimestamp } from '@/shared/utils/cookies';

const AUTH_TOKEN_KEY = 'caco_auth_token';
const AUTH_USER_KEY = 'caco_auth_user';
const AUTH_EXPIRY_KEY = 'caco_auth_expiry';

// Tempo de expiração padrão: 24 horas
const DEFAULT_TOKEN_EXPIRY_MILLISECONDS = 24 * 60 * 60 * 1000;

class AuthService {
  // Login com token já recebido do OAuth callback
  async loginWithToken(token, expiresInMilliseconds) {
    try {
      const expiryMilliseconds = expiresInMilliseconds || DEFAULT_TOKEN_EXPIRY_MILLISECONDS;
      console.log('[AuthService] expiresInMilliseconds recebido:', expiresInMilliseconds);
      console.log('[AuthService] expiryMilliseconds a usar:', expiryMilliseconds);
      console.log('[AuthService] Usando default?', !expiresInMilliseconds);
      
      const expiryTimestamp = Date.now() + expiryMilliseconds;
      const hoursFromNow = expiryMilliseconds / (1000 * 60 * 60);
      console.log('[AuthService] Token expirará em (horas):', hoursFromNow.toFixed(2));
      console.log('[AuthService] Timestamp de expiração:', new Date(expiryTimestamp).toISOString());
      
      // Salva o token temporariamente para que apiClient possa usá-lo
      this.setToken(token, expiryTimestamp);
      
      // Busca dados do usuário usando o token
      const user = await apiClient.get('user/me');
      
      // Salva o usuário
      this.setUser(user);
      
      return { token, user };
    } catch (error) {
      throw new Error('Falha ao processar autenticação: ' + error.message);
    }
  }

  // Redireciona para o fluxo OAuth do Google no backend
  redirectToGoogleLogin() {
    const backendUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
    window.location.href = `${backendUrl}/oauth2/authorization/google`;
  }

  logout() {
    deleteCookie(AUTH_TOKEN_KEY);
    deleteCookie(AUTH_USER_KEY);
    deleteCookie(AUTH_EXPIRY_KEY);
  }

  setToken(token, expiryTimestamp) {
    setCookieWithTimestamp(AUTH_TOKEN_KEY, token, expiryTimestamp);
    setCookie(AUTH_EXPIRY_KEY, expiryTimestamp.toString(), 365); // 1 ano para o timestamp
  }

  getToken() {
    // Verifica se o token expirou antes de retornar
    if (this.isTokenExpired()) {
      this.logout();
      return null;
    }
    return getCookie(AUTH_TOKEN_KEY);
  }

  getTokenExpiry() {
    const expiry = getCookie(AUTH_EXPIRY_KEY);
    return expiry ? parseInt(expiry, 10) : null;
  }

  isTokenExpired() {
    const expiry = this.getTokenExpiry();
    if (!expiry) return true;
    return Date.now() > expiry;
  }

  getTimeUntilExpiry() {
    const expiry = this.getTokenExpiry();
    if (!expiry) return 0;
    const timeLeft = expiry - Date.now();
    return timeLeft > 0 ? timeLeft : 0;
  }

  getTimeUntilExpiryFormatted() {
    const milliseconds = this.getTimeUntilExpiry();
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  }

  setUser(user) {
    setCookie(AUTH_USER_KEY, JSON.stringify(user), 365); // 1 ano
  }

  getUser() {
    // Verifica expiração antes de retornar usuário
    if (this.isTokenExpired()) {
      this.logout();
      return null;
    }
    const user = getCookie(AUTH_USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  isAuthenticated() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired();
  }

  isAdmin() {
    const user = this.getUser();
    return user?.role === 'ADMIN';
  }

  // Avisa o usuário quando a sessão está prestes a expirar
  shouldWarnExpiry() {
    const timeLeft = this.getTimeUntilExpiry();
    // Avisa quando faltam menos de 5 minutos
    return timeLeft > 0 && timeLeft < (5 * 60 * 1000);
  }
}

export const authService = new AuthService();
