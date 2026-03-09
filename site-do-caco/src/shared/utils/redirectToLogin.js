import { redirectManager } from '@/shared/services/redirectManager';

/**
 * Função helper para redirecionar usuários não autenticados para o login
 * com salvamento automático da origem.
 * 
 * @param {function} navigate - Função navigate do React Router
 * @param {object} options - Opções de redirecionamento
 * @param {string} options.from - Caminho de origem (opcional, usa location atual se não fornecido)
 * @param {object} options.metadata - Metadados adicionais para passar para a página de destino
 * @param {string} options.reason - Motivo do redirecionamento (opcional)
 * 
 * @example
 * // Uso básico
 * redirectToLogin(navigate);
 * 
 * @example
 * // Com caminho específico
 * redirectToLogin(navigate, { from: '/perfil' });
 * 
 * @example
 * // Com metadados
 * redirectToLogin(navigate, { 
 *   from: '/eventos/123',
 *   metadata: { eventId: '123', action: 'register' }
 * });
 */
export function redirectToLogin(navigate, options = {}) {
  const {
    from = null,
    metadata = {},
    reason = 'unauthenticated'
  } = options;

  const currentPath = from || (window.location.pathname + window.location.search);
  
  redirectManager.saveRedirect(currentPath, reason, metadata);
  navigate('/login', { replace: true });
}

/**
 * Hook personalizado para facilitar o uso do redirectToLogin em componentes
 * 
 * @returns {function} Função configurada para redirecionar para login
 * 
 * @example
 * function MyComponent() {
 *   const redirect = useRedirectToLogin();
 *   
 *   const handleProtectedAction = () => {
 *     if (!isAuthenticated) {
 *       redirect({ metadata: { action: 'protected-action' } });
 *       return;
 *     }
 *     // continuar com ação...
 *   };
 * }
 */
export { redirectManager } from '@/shared/services/redirectManager';
