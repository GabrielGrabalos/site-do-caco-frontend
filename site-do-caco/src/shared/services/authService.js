import { apiClient } from './apiClient';
import { setCookie, getCookie, deleteCookie, setCookieWithTimestamp } from '@/shared/utils/cookies';

const AUTH_TOKEN_KEY = 'caco_auth_token';
const AUTH_USER_KEY = 'caco_auth_user';
const AUTH_EXPIRY_KEY = 'caco_auth_expiry';
const AUTH_CHANGED_EVENT = 'caco:auth-changed';

// Tempo de expiração padrão: 24 horas
const DEFAULT_TOKEN_EXPIRY_MILLISECONDS = 24 * 60 * 60 * 1000;

class AuthService {
  emitAuthChanged() {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event(AUTH_CHANGED_EVENT));
    }
  }

  // Login com token já recebido do OAuth callback
  async loginWithToken(token, expiresInMilliseconds) {
    try {
      const expiryMilliseconds = expiresInMilliseconds || DEFAULT_TOKEN_EXPIRY_MILLISECONDS;
      
      const expiryTimestamp = Date.now() + expiryMilliseconds;
      
      // Salva o token temporariamente para que apiClient possa usá-lo
      this.setToken(token, expiryTimestamp);
      
      // Busca dados do usuário usando o token
      const user = await apiClient.get('user/me');
      
      // Salva o usuário
      this.setUser(user);
      
      return { token, user };
    } catch (error) {
      // Repropaga erros com código especial sem perder o código (ex.: form_required)
      if (error.code) {
        throw error;
      }
      throw new Error('Falha ao processar autenticação: ' + error.message);
    }
  }

  // Redireciona para o fluxo OAuth do Google no backend
  redirectToGoogleLogin() {
    const backendUrl = (import.meta.env.VITE_API_URL || 'http://localhost:8080') + '/api';
    window.location.href = `${backendUrl}/oauth2/authorization/google`;
  }

  logout() {
    deleteCookie(AUTH_TOKEN_KEY);
    deleteCookie(AUTH_USER_KEY);
    deleteCookie(AUTH_EXPIRY_KEY);
    this.emitAuthChanged();
  }

  setToken(token, expiryTimestamp) {
    setCookieWithTimestamp(AUTH_TOKEN_KEY, token, expiryTimestamp);
    setCookie(AUTH_EXPIRY_KEY, expiryTimestamp.toString(), 365); // 1 ano para o timestamp
    this.emitAuthChanged();
  }

  getToken() {
    const token = getCookie(AUTH_TOKEN_KEY);

    // Sem token não há sessão ativa (evita disparar logout em loop)
    if (!token) {
      return null;
    }

    // Verifica se o token expirou antes de retornar
    if (this.isTokenExpired()) {
      this.logout();
      return null;
    }

    return token;
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
    this.emitAuthChanged();
  }

  getUser() {
    const token = getCookie(AUTH_TOKEN_KEY);

    // Sem token, considera deslogado sem acionar logout
    if (!token) {
      return null;
    }

    // Verifica expiração antes de retornar usuário
    if (this.isTokenExpired()) {
      this.logout();
      return null;
    }

    const user = getCookie(AUTH_USER_KEY);
    if (!user) {
      return null;
    }

    try {
      return JSON.parse(user);
    } catch {
      return null;
    }
  }

  isAuthenticated() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired();
  }

  isAdmin() {
    const user = this.getUser();
    return user?.role === 'ADMIN' || user?.role === 'SUPER_ADMIN';
  }

  isSuperAdmin() {
    const user = this.getUser();
    return user?.role === 'SUPER_ADMIN';
  }

  // Avisa o usuário quando a sessão está prestes a expirar
  shouldWarnExpiry() {
    const timeLeft = this.getTimeUntilExpiry();
    // Avisa quando faltam menos de 5 minutos
    return timeLeft > 0 && timeLeft < (5 * 60 * 1000);
  }
}

export const authService = new AuthService();
