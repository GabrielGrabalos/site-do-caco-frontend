import { Navigate } from 'react-router-dom';
import { authService } from '@/shared/services/authService';

export function ProtectedRoute({ children, requireAdmin = false, requireEditor = false }) {
  const isAuthenticated = authService.isAuthenticated();
  const isAdmin = authService.isAdmin();
  const user = authService.getUser();
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
