import { useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { authService } from '@/shared/services/authService';
import { redirectManager } from '@/shared/services/redirectManager';
import { useAuth } from '@/shared/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast.jsx';

export function CallbackPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuth();
  const { toast } = useToast();
  const [processing, setProcessing] = useState(true);
  const hasProcessedRef = useRef(false);

  useEffect(() => {
    // Evita execução duplicada em desenvolvimento (React Strict Mode)
    if (hasProcessedRef.current) {
      return;
    }
    hasProcessedRef.current = true;

    const processCallback = async () => {
      try {
        const token = searchParams.get('token');
        const expiresIn = searchParams.get('expiresIn');

        console.log('[CallbackPage] Token recebido:', token ? 'SIM' : 'NÃO');
        console.log('[CallbackPage] expiresIn raw:', expiresIn);

        if (!token) {
          throw new Error('Token não recebido');
        }

        // Converte expiresIn para número (milissegundos)
        const expiresInMs = expiresIn ? parseInt(expiresIn, 10) : undefined;
        console.log('[CallbackPage] expiresInMs convertido:', expiresInMs);
        if (expiresInMs) {
          const hours = expiresInMs / (1000 * 60 * 60);
          console.log('[CallbackPage] Tempo de expiração em horas:', hours.toFixed(2));
        }

        // Processa o login com o token recebido
        const { user } = await authService.loginWithToken(token, expiresInMs);

        // Atualiza o contexto de autenticação
        login(user);

        toast({
          title: 'Login realizado com sucesso!',
          description: 'Bem-vindo de volta ao CACo!',
        });

        // Busca o destino de redirecionamento usando o RedirectManager
        const redirectTo = redirectManager.getFinalDestination('/');
        redirectManager.clearRedirect(); // Limpa após obter o destino
        
        navigate(redirectTo, { replace: true });
      } catch (error) {
        console.error('Erro no callback OAuth:', error);

        // Se o backend exige o preenchimento do formulário de perfil,
        // salva o destino final e redireciona para o formulário
        if (error.code === 'form_required') {
          // Obtém o destino original ou usa a home como fallback
          const originalDestination = redirectManager.getRedirectPath() || '/';
          
          // Salva para redirecionamento após o formulário
          redirectManager.saveFormRedirect(originalDestination);
          
          navigate('/formulario-perfil', { replace: true });
          return;
        }

        toast({
          variant: 'destructive',
          title: 'Erro na autenticação',
          description: error.message || 'Não foi possível completar o login.',
        });

        // Redireciona para login com erro
        navigate('/login?error=server_error', { replace: true });
      } finally {
        setProcessing(false);
      }
    };

    processCallback();
  }, [searchParams, navigate, toast, login]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        {processing ? (
          <>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
            <p className="text-lg font-medium">Processando autenticação...</p>
            <p className="text-sm text-muted-foreground mt-2">Aguarde um momento</p>
          </>
        ) : (
          <p className="text-lg font-medium">Redirecionando...</p>
        )}
      </div>
    </div>
  );
}
