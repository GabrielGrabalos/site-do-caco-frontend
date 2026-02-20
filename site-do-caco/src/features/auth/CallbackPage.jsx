import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import { authService } from '@/shared/services/authService';
import { useToast } from '@/components/ui/use-toast.jsx';

export function CallbackPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [processing, setProcessing] = useState(true);

  useEffect(() => {
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
        await authService.loginWithToken(token, expiresInMs);

        toast({
          title: 'Login realizado com sucesso!',
          description: 'Bem-vindo de volta ao CACo!',
        });

        // Redireciona para a página de origem (se houver no sessionStorage) ou para a home
        const redirectTo = sessionStorage.getItem('caco_login_redirect') || location.state?.from || '/';
        sessionStorage.removeItem('caco_login_redirect'); // Limpar após uso
        navigate(redirectTo, { replace: true });
      } catch (error) {
        console.error('Erro no callback OAuth:', error);

        // Se o backend exige o preenchimento do formulário de perfil,
        // armazena o destino e redireciona para o formulário
        if (error.code === 'form_required') {
          const redirectTo = sessionStorage.getItem('caco_login_redirect') || location.state?.from || '/';
          sessionStorage.removeItem('caco_login_redirect');
          sessionStorage.setItem('caco_form_redirect', redirectTo);
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
  }, [searchParams, navigate, toast]);

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
