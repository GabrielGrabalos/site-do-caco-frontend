import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/shared/contexts/AuthContext';
import { redirectManager } from '@/shared/services/redirectManager';
import { useEffect } from 'react';

export function ProtectedRoute({ children, requireAdmin = false, requireEditor = false }) {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();
  const isAdmin = user?.role === 'ADMIN' || user?.role === 'SUPER_ADMIN';
  const isEditor = user?.role === 'EDITOR' || user?.role === 'ADMIN' || user?.role === 'SUPER_ADMIN';

  // Salva a localização atual antes de redirecionar para login
  useEffect(() => {
    if (!isAuthenticated) {
      const currentPath = location.pathname + location.search;
      redirectManager.saveRedirect(currentPath, 'unauthenticated');
    }
  }, [isAuthenticated, location]);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requireAdmin && !isAdmin) {
    return <Navigate to="/" replace />;
  }

  if (requireEditor && !isEditor) {
    return <Navigate to="/" replace />;
  }

  return children;
}
