/**
 * RedirectManager - Serviço centralizado para gerenciar redirecionamentos
 * de usuários não autenticados e fluxos pós-autenticação.
 * 
 * Fluxo de redirecionamento:
 * 1. Usuário não autenticado tenta acessar rota protegida → salva origem
 * 2. Redireciona para /login
 * 3. Após login bem-sucedido → verifica se precisa preencher formulário
 * 4. Se precisar: redireciona para /formulario-perfil (mantém origem salva)
 * 5. Após preencher formulário → redireciona para origem
 * 6. Se não precisar: redireciona direto para origem
 */

const REDIRECT_STORAGE_KEY = 'caco_redirect_info';
const LOGIN_REDIRECT_KEY = 'caco_login_redirect'; // Mantido para compatibilidade
const FORM_REDIRECT_KEY = 'caco_form_redirect'; // Mantido para compatibilidade

/**
 * Estrutura dos dados de redirecionamento:
 * {
 *   originalPath: string,          // Caminho original que o usuário tentou acessar
 *   timestamp: number,              // Timestamp de quando foi salvo
 *   reason: string,                 // Motivo do redirecionamento (unauthenticated, form_required)
 *   metadata: object                // Dados adicionais que a página alvo pode usar
 * }
 */

class RedirectManager {
  constructor() {
    this.storageType = sessionStorage; // Usa sessionStorage para dados temporários
  }

  /**
   * Salva informações de redirecionamento antes de enviar o usuário para login
   * @param {string} path - Caminho para onde o usuário deve ser redirecionado após login
   * @param {string} reason - Motivo do redirecionamento ('unauthenticated', 'form_required', etc)
   * @param {object} metadata - Dados adicionais opcionais
   */
  saveRedirect(path, reason = 'unauthenticated', metadata = {}) {
    // Ignora redirecionamento se já estamos nas páginas de auth
    if (this._isAuthPage(path)) {
      return;
    }

    const redirectInfo = {
      originalPath: path,
      timestamp: Date.now(),
      reason,
      metadata,
    };

    this.storageType.setItem(REDIRECT_STORAGE_KEY, JSON.stringify(redirectInfo));
    
    // Mantém compatibilidade com sistema antigo
    this.storageType.setItem(LOGIN_REDIRECT_KEY, path);
    
    console.log('[RedirectManager] Redirecionamento salvo:', redirectInfo);
  }

  /**
   * Obtém as informações de redirecionamento salvas
   * @returns {object|null} Informações de redirecionamento ou null
   */
  getRedirectInfo() {
    const data = this.storageType.getItem(REDIRECT_STORAGE_KEY);
    
    if (!data) {
      // Fallback para o sistema antigo
      const oldRedirect = this.storageType.getItem(LOGIN_REDIRECT_KEY);
      if (oldRedirect) {
        return {
          originalPath: oldRedirect,
          timestamp: Date.now(),
          reason: 'unauthenticated',
          metadata: {},
        };
      }
      return null;
    }

    try {
      const redirectInfo = JSON.parse(data);
      
      // Verifica se o redirecionamento expirou (mais de 1 hora)
      const ONE_HOUR = 60 * 60 * 1000;
      if (Date.now() - redirectInfo.timestamp > ONE_HOUR) {
        this.clearRedirect();
        return null;
      }

      return redirectInfo;
    } catch (error) {
      console.error('[RedirectManager] Erro ao parsear redirect info:', error);
      this.clearRedirect();
      return null;
    }
  }

  /**
   * Obtém apenas o caminho de redirecionamento
   * @returns {string|null} Caminho ou null
   */
  getRedirectPath() {
    const info = this.getRedirectInfo();
    return info?.originalPath || null;
  }

  /**
   * Limpa as informações de redirecionamento salvas
   */
  clearRedirect() {
    this.storageType.removeItem(REDIRECT_STORAGE_KEY);
    this.storageType.removeItem(LOGIN_REDIRECT_KEY);
    console.log('[RedirectManager] Redirecionamento limpo');
  }

  /**
   * Salva informações específicas para redirecionamento após formulário de perfil
   * @param {string} path - Caminho de destino após completar o formulário
   * @param {object} metadata - Dados adicionais
   */
  saveFormRedirect(path, metadata = {}) {
    if (this._isAuthPage(path)) {
      return;
    }

    const redirectInfo = {
      originalPath: path,
      timestamp: Date.now(),
      reason: 'form_required',
      metadata,
    };

    this.storageType.setItem(REDIRECT_STORAGE_KEY, JSON.stringify(redirectInfo));
    this.storageType.setItem(FORM_REDIRECT_KEY, path); // Compatibilidade
    
    console.log('[RedirectManager] Form redirect salvo:', redirectInfo);
  }

  /**
   * Obtém o redirecionamento específico do formulário
   * @returns {string|null}
   */
  getFormRedirectPath() {
    // Tenta buscar do sistema novo
    const info = this.getRedirectInfo();
    if (info?.reason === 'form_required') {
      return info.originalPath;
    }

    // Fallback para compatibilidade
    return this.storageType.getItem(FORM_REDIRECT_KEY) || null;
  }

  /**
   * Limpa apenas o redirecionamento do formulário
   */
  clearFormRedirect() {
    this.storageType.removeItem(FORM_REDIRECT_KEY);
    
    // Se o redirect atual é do tipo form, limpa também o principal
    const info = this.getRedirectInfo();
    if (info?.reason === 'form_required') {
      this.clearRedirect();
    }
  }

  /**
   * Obtém o destino final após completar todo o fluxo de autenticação
   * @param {string} fallbackPath - Caminho padrão se não houver redirecionamento salvo
   * @returns {string} Caminho de destino
   */
  getFinalDestination(fallbackPath = '/') {
    const redirectPath = this.getRedirectPath();
    
    if (redirectPath && !this._isAuthPage(redirectPath)) {
      return redirectPath;
    }

    return fallbackPath;
  }

  /**
   * Salva a origem e redireciona para o login programaticamente
   * @param {object} navigate - React Router navigate function
   * @param {string} currentPath - Caminho atual (opcional, usa window.location se não fornecido)
   * @param {object} metadata - Metadados adicionais
   */
  redirectToLogin(navigate, currentPath = null, metadata = {}) {
    const path = currentPath || window.location.pathname + window.location.search;
    this.saveRedirect(path, 'unauthenticated', metadata);
    navigate('/login', { replace: true });
  }

  /**
   * Verifica se um caminho é uma página de autenticação
   * @private
   */
  _isAuthPage(path) {
    const authPages = ['/login', '/auth/callback', '/formulario-perfil'];
    return authPages.some(page => path.startsWith(page));
  }

  /**
   * Migra dados do sistema antigo para o novo (executado automaticamente)
   */
  migrateOldRedirects() {
    // Se já existe dados no novo formato, não faz nada
    if (this.storageType.getItem(REDIRECT_STORAGE_KEY)) {
      return;
    }

    // Migra caco_login_redirect
    const loginRedirect = this.storageType.getItem(LOGIN_REDIRECT_KEY);
    if (loginRedirect && !this._isAuthPage(loginRedirect)) {
      this.saveRedirect(loginRedirect, 'unauthenticated');
    }

    // Migra caco_form_redirect
    const formRedirect = this.storageType.getItem(FORM_REDIRECT_KEY);
    if (formRedirect && !this._isAuthPage(formRedirect)) {
      this.saveFormRedirect(formRedirect);
    }
  }

  /**
   * Método utilitário para debug
   */
  debug() {
    console.log('[RedirectManager] Debug info:', {
      redirectInfo: this.getRedirectInfo(),
      loginRedirect: this.storageType.getItem(LOGIN_REDIRECT_KEY),
      formRedirect: this.storageType.getItem(FORM_REDIRECT_KEY),
    });
  }
}

// Exporta uma instância singleton
export const redirectManager = new RedirectManager();

// Exporta a classe para testes
export { RedirectManager };
