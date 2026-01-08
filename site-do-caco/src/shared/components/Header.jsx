import { Link, useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { authService } from '@/shared/services/authService';
import { HeaderSearchBar } from './HeaderSearchBar';
import { ProfilePopover } from './ProfilePopover';
import { NavigationMenu } from './NavigationMenu';
import { useScrollDirection } from '@/shared/hooks/useScrollDirection';

export function Header() {
  const navigate = useNavigate();
  const isAuthenticated = authService.isAuthenticated();
  const isVisible = useScrollDirection();

  return (
    <header 
      className={`border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center gap-3">
          {/* Navigation Menu Button */}
          <NavigationMenu />

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
          <div className="flex items-center gap-2 shrink-0 ml-auto">
            {isAuthenticated ? (
              <ProfilePopover />
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
