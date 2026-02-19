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
 * @property {number} stockQuantity - Quantidade em estoque
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

// ============= STICKER DTOs =============

/**
 * @typedef {Object} EventSummaryDTO
 * @property {string} id - UUID do evento
 * @property {string} title - Título do evento
 * @property {string} slug - Slug para URL
 * @property {string} startDate - Data de início (ISO string)
 * @property {string} endDate - Data de término (ISO string)
 * @property {string} location - Local do evento
 * @property {string} coverImage - URL da imagem de capa
 * @property {'ACADEMIC' | 'SOCIAL' | 'SPORTS' | 'CULTURAL' | 'OTHER'} type - Tipo do evento
 * @property {'NORMAL' | 'IMPORTANT' | 'HIGHLIGHT'} importance - Importância do evento
 * @property {'DRAFT' | 'PUBLISHED' | 'CANCELLED'} status - Status do evento
 */

/**
 * @typedef {Object} StickerPublicDTO
 * @property {string} id - UUID do sticker
 * @property {string} name - Nome do sticker
 * @property {string} description - Descrição do sticker
 * @property {string} imageUrl - URL da imagem do sticker
 * @property {EventSummaryDTO|null} originEvent - Evento de origem (se houver)
 * @property {string} createdAt - Data de criação (ISO string)
 */

/**
 * @typedef {Object} StickerAdminDTO
 * @property {string} id - UUID do sticker
 * @property {string} name - Nome do sticker
 * @property {string} description - Descrição do sticker
 * @property {string} imageUrl - URL da imagem do sticker
 * @property {string} originEventId - UUID do evento de origem
 * @property {string} createdAt - Data de criação (ISO string)
 * @property {string} updatedAt - Data da última atualização (ISO string)
 */

/**
 * @typedef {Object} CreateStickerDTO
 * @property {string} name - Nome do sticker (obrigatório, max 120 chars)
 * @property {string} [description] - Descrição do sticker (opcional, max 600 chars)
 * @property {File} image - Arquivo de imagem (obrigatório)
 * @property {string} [originEventId] - UUID do evento de origem (opcional)
 */

/**
 * @typedef {Object} UpdateStickerDTO
 * @property {string} name - Nome do sticker (obrigatório, max 120 chars)
 * @property {string} [description] - Descrição do sticker (opcional, max 600 chars)
 * @property {File} [image] - Arquivo de imagem (opcional)
 * @property {string} [originEventId] - UUID do evento de origem (opcional, pode ser null para desassociar)
 */

/**
 * @typedef {Object} PageableDTO
 * @property {number} pageNumber - Número da página atual (0-indexed)
 * @property {number} pageSize - Tamanho da página
 * @property {number} offset - Offset dos elementos
 * @property {boolean} paged - Se está paginado
 * @property {boolean} unpaged - Se não está paginado
 */

/**
 * @typedef {Object} SortDTO
 * @property {boolean} sorted - Se está ordenado
 * @property {boolean} unsorted - Se não está ordenado
 * @property {boolean} empty - Se está vazio
 */

/**
 * @template T
 * @typedef {Object} Page
 * @property {T[]} content - Conteúdo da página
 * @property {PageableDTO} pageable - Informações de paginação
 * @property {number} totalPages - Total de páginas
 * @property {number} totalElements - Total de elementos
 * @property {boolean} last - Se é a última página
 * @property {number} size - Tamanho da página
 * @property {number} number - Número da página atual
 * @property {SortDTO} sort - Informações de ordenação
 * @property {number} numberOfElements - Número de elementos nesta página
 * @property {boolean} first - Se é a primeira página
 * @property {boolean} empty - Se está vazia
 */

/**
 * @typedef {Page<StickerPublicDTO>} StickerPage
 */

/**
 * @typedef {Object} GenerateRedemptionCodesDTO
 * @property {number} quantity - Quantidade de códigos a gerar
 * @property {boolean} oneTimeUse - Se o código é de uso único
 * @property {string} [expiresAt] - Data de expiração (ISO string, opcional)
 */

/**
 * @typedef {Object} RedemptionCodeDTO
 * @property {string} id - UUID do código
 * @property {string} code - Código de redemption
 * @property {boolean} redeemed - Se o código foi resgatado
 * @property {string|null} redeemedByUserId - UUID do usuário que resgatou (null se não resgatado)
 * @property {string|null} redeemedAt - Data do resgate (ISO string, null se não resgatado)
 * @property {string} createdAt - Data de criação do código (ISO string)
 */

/**
 * @typedef {Object} RedeemStickerDTO
 * @property {string} code - Código de resgate
 */

// Exporta um objeto vazio apenas para permitir importação
// Os tipos estão disponíveis via JSDoc
export default {};
