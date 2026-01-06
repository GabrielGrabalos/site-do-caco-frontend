/**
 * DTOs baseados nos DTOs do backend Java
 * Seguem a mesma estrutura para garantir compatibilidade
 */

// ============= RESPONSE DTOs =============

/**
 * @typedef {Object} UserResponseDTO
 * @property {string} id - UUID do usuário
 * @property {string} name - Nome do usuário
 * @property {string} email - Email do usuário
 * @property {string} avatarUrl - URL do avatar
 * @property {'USER' | 'ADMIN'} role - Role do usuário
 */

/**
 * @typedef {Object} ErrorResponseDTO
 * @property {string} timestamp - Data/hora do erro
 * @property {number} status - Código HTTP
 * @property {string} error - Tipo do erro
 * @property {string} message - Mensagem do erro
 * @property {string} path - Path da requisição
 */

/**
 * @typedef {Object} BannerDTO
 * @property {string} id - UUID do banner
 * @property {string} title - Título do banner
 * @property {string} imageUrl - URL da imagem
 * @property {string} targetLink - Link de destino
 */

/**
 * @typedef {Object} WarningDTO
 * @property {string} id - UUID do aviso
 * @property {string} markdownText - Texto em markdown
 * @property {string} expiresAt - Data de expiração (ISO string)
 */

/**
 * @typedef {Object} NewsSummaryDTO
 * @property {string} id - UUID da notícia
 * @property {string} title - Título da notícia
 * @property {string} slug - Slug para URL
 * @property {string} summary - Resumo da notícia
 * @property {string} coverImage - URL da imagem de capa
 * @property {string} publishDate - Data de publicação (ISO string)
 * @property {string} authorName - Nome do autor
 */

/**
 * @typedef {Object} DashboardDTO
 * @property {BannerDTO[]} banners - Lista de banners
 * @property {WarningDTO[]} warnings - Lista de avisos
 * @property {NewsSummaryDTO[]} latestNews - Últimas notícias
 */

// ============= REQUEST DTOs =============

/**
 * @typedef {Object} UpdateProfileDTO
 * @property {string} name - Nome do usuário
 * @property {string} avatarUrl - URL do avatar
 */

/**
 * @typedef {Object} CreateNewsDTO
 * @property {string} title - Título da notícia (obrigatório)
 * @property {string} summary - Resumo (obrigatório)
 * @property {string} content - Conteúdo em markdown (obrigatório)
 * @property {string} [coverImage] - URL da imagem de capa (opcional)
 */

/**
 * @typedef {Object} UpdateNewsDTO
 * @property {string} [title] - Título da notícia
 * @property {string} [summary] - Resumo
 * @property {string} [content] - Conteúdo em markdown
 * @property {string} [coverImage] - URL da imagem de capa
 */

/**
 * @typedef {Object} CreateBannerDTO
 * @property {string} title - Título do banner (obrigatório)
 * @property {File} imageFile - Arquivo de imagem (obrigatório, será enviado como MultipartFile)
 * @property {string} targetLink - Link de destino (obrigatório)
 * @property {boolean} [active] - Se o banner está ativo (padrão true)
 */

/**
 * @typedef {Object} ReorderBannersDTO
 * @property {string[]} bannerIds - Lista ordenada de UUIDs dos banners
 */

/**
 * @typedef {Object} CreateWarningDTO
 * @property {string} markdownText - Texto em markdown (obrigatório)
 * @property {string} startsAt - Data de início (ISO string, obrigatório)
 * @property {string} expiresAt - Data de expiração (ISO string, obrigatório, deve ser futura)
 */

/**
 * @typedef {Object} UpdateWarningDTO
 * @property {string} [markdownText] - Texto em markdown
 * @property {string} [startsAt] - Data de início (ISO string)
 * @property {string} [expiresAt] - Data de expiração (ISO string)
 */

// Exporta um objeto vazio apenas para permitir importação
// Os tipos estão disponíveis via JSDoc
export default {};
