import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '@/shared/services/authService';
import { useAuth } from '@/shared/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast.jsx';

export function SessionExpiryWarning() {
  const [hasWarned, setHasWarned] = useState(false);
  const [hasShownExpiryAlert, setHasShownExpiryAlert] = useState(false);
  const { isAuthenticated } = useAuth();
  const [wasAuthenticated, setWasAuthenticated] = useState(isAuthenticated);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Atualiza o estado inicial de autenticação
    setWasAuthenticated(isAuthenticated);
  }, [isAuthenticated]);

  useEffect(() => {
    // Verifica a cada minuto se a sessão está próxima de expirar
    const interval = setInterval(() => {
      const isCurrentlyAuthenticated = isAuthenticated;
      
      // Se estava autenticado e agora não está mais, a sessão expirou
      if (wasAuthenticated && !isCurrentlyAuthenticated && !hasShownExpiryAlert) {
        if (window.location.pathname !== '/login') {
          toast({
            variant: 'destructive',
            title: 'Sessão expirada',
            description: 'Sua sessão expirou. Por favor, faça login novamente.',
          });
          navigate('/login');
          setHasShownExpiryAlert(true); // Marca que o alerta já foi mostrado
          setWasAuthenticated(false);
        }
        return;
      }

      // Atualiza o estado de autenticação
      if (isCurrentlyAuthenticated && !wasAuthenticated) {
        setWasAuthenticated(true);
        setHasWarned(false); // Reset do aviso quando logar novamente
        setHasShownExpiryAlert(false); // Reset do alerta de expiração quando logar novamente
      }

      // Avisa quando faltam menos de 5 minutos (apenas se estiver autenticado)
      if (isCurrentlyAuthenticated && authService.shouldWarnExpiry() && !hasWarned) {
        const timeLeft = authService.getTimeUntilExpiryFormatted();
        toast({
          title: 'Sessão expirando',
          description: `Sua sessão irá expirar em ${timeLeft}. Salve seu trabalho.`,
        });
        setHasWarned(true);
      }
    }, 60000); // Verifica a cada 1 minuto

    return () => clearInterval(interval);
  }, [hasWarned, wasAuthenticated, hasShownExpiryAlert, isAuthenticated, navigate, toast]);

  return null; // Componente invisível
}
