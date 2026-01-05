import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '@/shared/services/authService';
import { useToast } from '@/components/ui/use-toast.jsx';

export function SessionExpiryWarning() {
  const [hasWarned, setHasWarned] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Verifica a cada minuto se a sessão está próxima de expirar
    const interval = setInterval(() => {
      if (!authService.isAuthenticated()) {
        // Sessão expirou
        if (window.location.pathname !== '/login') {
          toast({
            variant: 'destructive',
            title: 'Sessão expirada',
            description: 'Sua sessão expirou. Por favor, faça login novamente.',
          });
          navigate('/login');
        }
        return;
      }

      // Avisa quando faltam menos de 5 minutos
      if (authService.shouldWarnExpiry() && !hasWarned) {
        const timeLeft = authService.getTimeUntilExpiryFormatted();
        toast({
          title: 'Sessão expirando',
          description: `Sua sessão irá expirar em ${timeLeft}. Salve seu trabalho.`,
        });
        setHasWarned(true);
      }
    }, 60000); // Verifica a cada 1 minuto

    return () => clearInterval(interval);
  }, [hasWarned, navigate, toast]);

  return null; // Componente invisível
}
