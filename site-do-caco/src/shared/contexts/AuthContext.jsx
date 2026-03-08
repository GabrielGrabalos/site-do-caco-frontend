import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { authService } from '@/shared/services/authService';

const AuthContext = createContext();
const AUTH_CHANGED_EVENT = 'caco:auth-changed';

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return authService.isAuthenticated();
  });
  const [user, setUser] = useState(() => {
    return authService.getUser();
  });

  const updateAuthState = useCallback(() => {
    const authenticated = authService.isAuthenticated();
    const currentUser = authService.getUser();
    
    setIsAuthenticated(authenticated);
    setUser(currentUser);
  }, []);

  // Atualiza o estado quando o componente monta
  useEffect(() => {
    updateAuthState();
  }, [updateAuthState]);

  // Listener para mudanças no localStorage (para sincronizar entre abas)
  useEffect(() => {
    const handleStorageChange = () => {
      updateAuthState();
    };

    const handleAuthChange = () => {
      updateAuthState();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener(AUTH_CHANGED_EVENT, handleAuthChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener(AUTH_CHANGED_EVENT, handleAuthChange);
    };
  }, [updateAuthState]);

  const login = useCallback((userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    authService.logout();
    setUser(null);
    setIsAuthenticated(false);
  }, []);

  const value = {
    isAuthenticated,
    user,
    login,
    logout,
    updateAuthState,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
