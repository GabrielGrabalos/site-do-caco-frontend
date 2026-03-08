import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, LogOut, Shield, Sun, Moon, Monitor, ShoppingCart, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { authService } from '@/shared/services/authService';
import { useTheme } from '@/shared/contexts/ThemeContext';

export function ProfilePopover() {
  const navigate = useNavigate();
  const user = authService.getUser();
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleLogout = () => {
    setOpen(false);
    authService.logout();
    navigate('/');
  };

  const handleNavigate = () => {
    setOpen(false);
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-4 w-4" />;
      case 'dark':
        return <Moon className="h-4 w-4" />;
      case 'system':
        return <Monitor className="h-4 w-4" />;
      default:
        return <Sun className="h-4 w-4" />;
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case 'light':
        return 'Claro';
      case 'dark':
        return 'Escuro';
      case 'system':
        return 'Sistema';
      default:
        return 'Claro';
    }
  };

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="rounded-full p-0 h-10 w-10">
          {user?.avatarUrl ? (
            <img
              src={user.avatarUrl}
              alt={user.name}
              className="h-10 w-10 rounded-full object-cover border-2 border-primary"
            />
          ) : (
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-5 w-5" />
            </div>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56" align="end">
        <div className="space-y-3">
          {/* User Info */}
          <div className="flex items-center gap-3 pb-3 border-b">
            {user?.avatarUrl ? (
              <img
                src={user.avatarUrl}
                alt={user.name}
                className="h-10 w-10 rounded-full object-cover border-2 border-primary"
              />
            ) : (
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-5 w-5" />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{user?.name}</p>
              <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start"
              size="sm"
              asChild
            >
              <Link to="/perfil" onClick={handleNavigate}>
                <User className="h-4 w-4 mr-2" />
                Meu Perfil
              </Link>
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start"
              size="sm"
              asChild
            >
              <Link to="/carrinho" onClick={handleNavigate}>
                <ShoppingCart className="h-4 w-4 mr-2" />
                Minhas comprinhas
              </Link>
            </Button>

            {user?.role === 'EDITOR' && (
              <Button
                variant="ghost"
                className="w-full justify-start"
                size="sm"
                asChild
              >
                <Link to="/editor" onClick={handleNavigate}>
                  <FileText className="h-4 w-4 mr-2" />
                  Painel de Editor
                </Link>
              </Button>
            )}

            {(user?.role === 'ADMIN' || user?.role === 'SUPER_ADMIN') && (
              <Button
                variant="ghost"
                className="w-full justify-start"
                size="sm"
                asChild
              >
                <Link to="/admin" onClick={handleNavigate}>
                  <Shield className="h-4 w-4 mr-2" />
                  Admin
                </Link>
              </Button>
            )}

            {/* Theme Toggle */}
            <div className="pt-2 border-t">
              <Button
                variant="ghost"
                className="w-full justify-start"
                size="sm"
                onClick={cycleTheme}
              >
                {getThemeIcon()}
                <span className="ml-2">Tema: {getThemeLabel()}</span>
              </Button>
            </div>

            <Button
              variant="ghost"
              className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
              size="sm"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
