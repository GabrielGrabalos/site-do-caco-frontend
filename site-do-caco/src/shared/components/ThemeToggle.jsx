import { Sun, Moon, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/shared/contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

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

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  return (
    <Button 
      variant="ghost" 
      size="icon"
      onClick={cycleTheme}
      title={`Tema: ${theme === 'light' ? 'Claro' : theme === 'dark' ? 'Escuro' : 'Sistema'}`}
    >
      {getThemeIcon()}
    </Button>
  );
}
