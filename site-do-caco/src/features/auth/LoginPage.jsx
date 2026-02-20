import { useState, useEffect } from 'react';
import loginImage from '@/assets/loginImage.png';
import { useSearchParams, useLocation } from 'react-router-dom';
import { authService } from '@/shared/services/authService';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, X } from 'lucide-react';

export function LoginPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    // Verifica se há erro na URL
    const error = searchParams.get('error');
    if (error) {
      const errorMessages = {
        'access_denied': {
          title: 'Acesso negado',
          description: 'Você cancelou o login com o Google. Tente novamente quando estiver pronto.',
        },
        'invalid_account': {
          title: 'Conta inválida',
          description: 'A conta selecionada não é válida. Use uma conta institucional que termine com @dac.unicamp.br',
        },
        'invalid_domain': {
          title: 'E-mail não autorizado',
          description: 'Apenas contas @dac.unicamp.br são permitidas para fazer login.',
        },
        'server_error': {
          title: 'Erro no servidor',
          description: 'Ocorreu um erro no servidor. Por favor, tente novamente mais tarde.',
        },
        'authentication_failed': {
          title: 'Autenticação falhou',
          description: 'Não foi possível completar a autenticação. Verifique sua conexão e tente novamente.',
        },
        'token_expired': {
          title: 'Sessão expirada',
          description: 'Sua sessão expirou durante o processo de login. Por favor, tente novamente.',
        },
      };
      
      setErrorMessage(errorMessages[error] || {
        title: 'Erro desconhecido',
        description: 'Ocorreu um erro durante o login. Código: ' + error,
      });
    }
  }, [searchParams]);

  const handleGoogleLogin = () => {
    // Limpa o erro ao tentar novamente
    setErrorMessage(null);
    
    // Salvar a página de origem no sessionStorage (se houver)
    if (location.state?.from) {
      sessionStorage.setItem('caco_login_redirect', location.state.from);
    }
    
    // Redireciona para o endpoint OAuth do backend
    authService.redirectToGoogleLogin();
  };

  const handleCloseError = () => {
    setErrorMessage(null);
    // Remove o parâmetro error da URL
    searchParams.delete('error');
    setSearchParams(searchParams);
  };

  return (
    <div className="container mx-auto px-4 py-6 md:py-16">
      {/* Alerta de Erro Persistente */}
      {errorMessage && (
        <div className="max-w-6xl mx-auto mb-4 md:mb-6">
          <Alert variant="destructive" className="relative pr-12">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>{errorMessage.title}</AlertTitle>
            <AlertDescription>{errorMessage.description}</AlertDescription>
            <button
              onClick={handleCloseError}
              className="absolute right-3 top-3 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none"
              aria-label="Fechar alerta"
            >
              <X className="h-4 w-4" />
            </button>
          </Alert>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center max-w-6xl mx-auto">
        {/* Área de Arte */}
        <div className="flex items-center justify-center order-2 md:order-1">
          <img
            src={loginImage}
            alt="Ilustração de login"
            className="w-full h-auto rounded-2xl object-contain"
          />
        </div>

        {/* Card de Login */}
        <div className="flex items-center justify-center order-1 md:order-2">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Login</CardTitle>
              <p className="text-center text-muted-foreground text-sm mt-2">
                Entre com sua conta Google
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Aviso sobre conta DAC */}
              <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3">
                <p className="text-sm text-yellow-800 dark:text-yellow-200 font-medium">
                  ⚠️ Atenção: Use sua conta institucional
                </p>
                <p className="text-xs text-yellow-700 dark:text-yellow-300 mt-1">
                  A conta Google deve terminar com <span className="font-mono font-bold">@dac.unicamp.br</span>
                </p>
              </div>

              {/* Botão Google OAuth */}
              <Button
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300"
                variant="outline"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continuar com Google
              </Button>

              <div className="text-center text-xs text-muted-foreground mt-4">
                Ao fazer login, você concorda com nossos termos de uso e política de privacidade.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
