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

// ============= STORE DTOs =============

/**
 * @typedef {Object} StoreCategoryDTO
 * @property {string} id - UUID da categoria
 * @property {string} name - Nome da categoria
 * @property {string} slug - Slug para URL
 * @property {number} order - Ordem de exibição
 */

/**
 * @typedef {Object} ProductSummaryDTO
 * @property {string} id - UUID do produto
 * @property {string} name - Nome do produto
 * @property {string} slug - Slug para URL
 * @property {number} price - Preço do produto
 * @property {number} [originalPrice] - Preço original (antes do desconto)
 * @property {string} coverImage - URL da imagem de capa
 * @property {boolean} outOfStock - Se está fora de estoque
 * @property {string} categoryId - UUID da categoria
 * @property {string} categoryName - Nome da categoria
 * @property {string} categorySlug - Slug da categoria
 * @property {string} createdAt - Data de criação (ISO string)
 */

/**
 * @typedef {Object} ProductVariationDTO
 * @property {string} id - UUID da variação
 * @property {string} name - Nome da variação
 * @property {number} additionalPrice - Preço adicional
 * @property {boolean} available - Se está disponível
 */

/**
 * @typedef {Object} ProductDetailDTO
 * @property {string} id - UUID do produto
 * @property {string} name - Nome do produto
 * @property {string} slug - Slug para URL
 * @property {string} description - Descrição do produto
 * @property {number} price - Preço do produto
 * @property {boolean} manageStock - Se gerencia estoque
 * @property {boolean} outOfStock - Se está fora de estoque
 * @property {string} categoryId - UUID da categoria
 * @property {string} categoryName - Nome da categoria
 * @property {string} categorySlug - Slug da categoria
 * @property {string[]} images - URLs das imagens
 * @property {ProductVariationDTO[]} variations - Variações do produto
 */

/**
 * @typedef {Object} ProductDetailAdminDTO
 * @property {string} id - UUID do produto
 * @property {string} name - Nome do produto
 * @property {string} slug - Slug para URL
 * @property {string} description - Descrição do produto
 * @property {number} price - Preço do produto
 * @property {number} [originalPrice] - Preço original
 * @property {boolean} manageStock - Se gerencia estoque
 * @property {number} stockQuantity - Quantidade em estoque
 * @property {boolean} active - Se está ativo
 * @property {string} categoryId - UUID da categoria
 * @property {string} categoryName - Nome da categoria
 * @property {string} categorySlug - Slug da categoria
 * @property {string[]} images - URLs das imagens
 * @property {ProductVariationDTO[]} variations - Variações do produto
 * @property {string} createdAt - Data de criação (ISO string)
 * @property {string} updatedAt - Data de atualização (ISO string)
 */

/**
 * @typedef {Object} CreateStoreCategoryDTO
 * @property {string} name - Nome da categoria
 * @property {string} slug - Slug para URL
 */

/**
 * @typedef {Object} UpdateStoreCategoryDTO
 * @property {string} name - Nome da categoria
 * @property {string} slug - Slug para URL
 */

/**
 * @typedef {Object} CreateProductDTO
 * @property {string} name - Nome do produto
 * @property {string} slug - Slug para URL
 * @property {string} description - Descrição do produto
 * @property {number} price - Preço do produto
 * @property {number} [originalPrice] - Preço original
 * @property {string} categoryId - UUID da categoria
 * @property {boolean} manageStock - Se gerencia estoque
 * @property {number} stockQuantity - Quantidade em estoque
 * @property {boolean} active - Se está ativo
 * @property {string[]} images - URLs das imagens
 */

/**
 * @typedef {Object} UpdateProductDTO
 * @property {string} name - Nome do produto
 * @property {string} slug - Slug para URL
 * @property {string} description - Descrição do produto
 * @property {number} price - Preço do produto
 * @property {number} [originalPrice] - Preço original
 * @property {string} categoryId - UUID da categoria
 * @property {boolean} manageStock - Se gerencia estoque
 * @property {number} stockQuantity - Quantidade em estoque
 * @property {boolean} active - Se está ativo
 * @property {string[]} images - URLs das imagens
 */

/**
 * @typedef {Object} CreateProductVariationDTO
 * @property {string} name - Nome da variação
 * @property {number} additionalPrice - Preço adicional
 * @property {number} stockQuantity - Quantidade em estoque
 */

/**
 * @typedef {Object} UpdateProductVariationDTO
 * @property {string} name - Nome da variação
 * @property {number} additionalPrice - Preço adicional
 * @property {number} stockQuantity - Quantidade em estoque
 */

// Exporta um objeto vazio apenas para permitir importação
// Os tipos estão disponíveis via JSDoc
export default {};
