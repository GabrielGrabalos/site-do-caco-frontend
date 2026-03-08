import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Componente que escuta mudanças de rota e faz scroll para o topo da página.
 * Deve ser inserido dentro do BrowserRouter.
 */
export function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return null;
}
