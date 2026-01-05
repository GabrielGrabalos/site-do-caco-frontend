import { Link, useNavigate } from 'react-router-dom';
import { Home, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { authService } from '@/shared/services/authService';
import { HeaderSearchBar } from './HeaderSearchBar';
import { useScrollDirection } from '@/shared/hooks/useScrollDirection';

export function Header() {
  const navigate = useNavigate();
  const isAuthenticated = authService.isAuthenticated();
  const user = authService.getUser();
  const isVisible = useScrollDirection();

  const handleLogout = () => {
    authService.logout();
    navigate('/');
  };

  return (
    <header 
      className={`border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl shrink-0">
            <Home className="h-6 w-6 text-primary" />
            <span className="hidden sm:inline">CACo</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <HeaderSearchBar />
          </div>

          {/* Auth Section */}
          <div className="flex items-center gap-2 shrink-0">
            {isAuthenticated ? (
              <>
                <Button variant="ghost" size="sm" asChild className="hidden sm:flex">
                  <Link to="/perfil" className="flex items-center gap-2">
                    {user?.avatarUrl ? (
                      <img
                        src={user.avatarUrl}
                        alt={user.name}
                        className="h-6 w-6 rounded-full object-cover border border-primary"
                      />
                    ) : (
                      <User className="h-4 w-4" />
                    )}
                    <span>{user?.name || 'Perfil'}</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild className="sm:hidden">
                  <Link to="/perfil">
                    {user?.avatarUrl ? (
                      <img
                        src={user.avatarUrl}
                        alt={user.name}
                        className="h-6 w-6 rounded-full object-cover border border-primary"
                      />
                    ) : (
                      <User className="h-4 w-4" />
                    )}
                  </Link>
                </Button>
                {user?.role === 'ADMIN' && (
                  <Button variant="outline" size="sm" asChild className="hidden md:flex">
                    <Link to="/admin">Admin</Link>
                  </Button>
                )}
                <Button variant="ghost" size="sm" onClick={handleLogout}>
                  <LogOut className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <Button size="sm" asChild>
                <Link to="/login">Entrar</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
