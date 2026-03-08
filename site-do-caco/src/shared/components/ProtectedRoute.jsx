import { Navigate } from 'react-router-dom';
import { useAuth } from '@/shared/contexts/AuthContext';

export function ProtectedRoute({ children, requireAdmin = false, requireEditor = false }) {
  const { isAuthenticated, user } = useAuth();
  const isAdmin = user?.role === 'ADMIN' || user?.role === 'SUPER_ADMIN';
  const isEditor = user?.role === 'EDITOR' || user?.role === 'ADMIN' || user?.role === 'SUPER_ADMIN';

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
