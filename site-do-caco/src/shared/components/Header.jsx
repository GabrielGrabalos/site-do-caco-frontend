import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { authService } from '@/shared/services/authService';
import { ProfilePopover } from './ProfilePopover';
import { NavigationMenu } from './NavigationMenu';
import { ThemeToggle } from './ThemeToggle';
import { useScrollDirection } from '@/shared/hooks/useScrollDirection';
import logo from '@/assets/logo.svg';

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
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="CACo" className="h-8 w-auto" />
            <span className="font-bold text-lg">Site do CACo</span>
          </Link>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Auth Section */}
          <div className="flex items-center gap-2 shrink-0 ml-auto">
            {isAuthenticated ? (
              <ProfilePopover />
            ) : (
              <>
                <ThemeToggle />
                <Button size="sm" asChild>
                  <Link to="/login">Entrar</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
