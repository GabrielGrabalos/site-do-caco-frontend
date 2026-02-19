/**
 * EXEMPLO DE PAYLOADS E RESPOSTAS - Admin Stickers
 * Use como referência para testes e desenvolvimento
 */

// ===========================================
// 1. CRIAR STICKER
// ===========================================

// Request
const createStickerPayload = {
  name: "Balão de Programação",
  description: "Sticker especial do evento de Programação Competitiva 2024",
  imageUrl: "https://exemplo.com/balao-programacao.png",
  originEventId: 123 // Opcional
};

// Response (StickerAdminDTO)
const createStickerResponse = {
  id: 1,
  name: "Balão de Programação",
  description: "Sticker especial do evento de Programação Competitiva 2024",
  imageUrl: "https://exemplo.com/balao-programacao.png",
  originEventId: 123,
  createdAt: "2024-02-17T14:30:00Z",
  updatedAt: null,
  version: 0
};

// ===========================================
// 2. ATUALIZAR STICKER
// ===========================================

// Request (PUT /api/admin/stickers/1)
const updateStickerPayload = {
  name: "Balão de Programação Competitiva",
  description: "Sticker atualizado com nova descrição",
  imageUrl: "https://exemplo.com/balao-programacao-v2.png",
  originEventId: 123
};

// Response
const updateStickerResponse = {
  id: 1,
  name: "Balão de Programação Competitiva",
  description: "Sticker atualizado com nova descrição",
  imageUrl: "https://exemplo.com/balao-programacao-v2.png",
  originEventId: 123,
  createdAt: "2024-02-17T14:30:00Z",
  updatedAt: "2024-02-17T15:45:00Z",
  version: 1
};

// ===========================================
// 3. GERAR CÓDIGOS DE RESGATE
// ===========================================

// Request (POST /api/admin/stickers/1/codes)
const generateCodesPayload = {
  quantity: 50,
  oneTimeUse: true,
  expiresAt: "2024-12-31T23:59:59Z" // Opcional, pode ser null
};

// Response (GenerateRedemptionCodesResponseDTO)
const generateCodesResponse = {
  stickerId: 1,
  quantityRequested: 50,
  oneTimeUse: true,
  expiresAt: "2024-12-31T23:59:59Z",
  generatedAt: "2024-02-17T16:00:00Z",
  codes: [
    "ABC123XYZ",
    "DEF456UVW",
    "GHI789RST",
    // ... 47 códigos adicionais
  ]
};

// ===========================================
// 4. LISTAR TODOS OS STICKERS
// ===========================================

// Request (GET /api/admin/stickers?page=0&size=20)
// Response
const listStickersResponse = {
  content: [
    {
      id: 1,
      name: "Balão de Programação",
      description: "Sticker especial do evento",
      imageUrl: "https://exemplo.com/balao.png",
      originEventId: 123,
      createdAt: "2024-02-17T14:30:00Z",
      updatedAt: null,
      version: 0
    },
    {
      id: 2,
      name: "Logo CACo 50 Anos",
      description: null,
      imageUrl: "https://exemplo.com/logo-50.png",
      originEventId: null,
      createdAt: "2024-02-16T10:00:00Z",
      updatedAt: "2024-02-16T11:30:00Z",
      version: 2
    }
  ],
  totalElements: 2,
  totalPages: 1,
  size: 20,
  number: 0
};

// ===========================================
// 5. DELETAR STICKER
// ===========================================

// Request (DELETE /api/admin/stickers/1)
// Response: 204 No Content (ou 200 OK com mensagem)

// ===========================================
// VALIDAÇÕES E ERROS
// ===========================================

// Erro 400 - Validação
const validationError = {
  errors: [
    {
      field: "name",
      message: "Name is required",
      defaultMessage: "Nome é obrigatório"
    },
    {
      field: "imageUrl",
      message: "Image URL is required",
      defaultMessage: "URL da imagem é obrigatória"
    }
  ]
};

// Erro 404 - Sticker não encontrado
const notFoundError = {
  message: "Sticker not found",
  status: 404
};

// Erro 400 - Limite de códigos excedido
const quantityLimitError = {
  message: "Quantity must be between 1 and 500",
  status: 400
};

// ===========================================
// FLUXO COMPLETO DE USO
// ===========================================

async function exemploFluxoCompleto() {
  // 1. Criar sticker
  const novoSticker = await stickerService.createSticker({
    name: "Mascote CACo",
    description: "O famoso mascote do CACo",
    imageUrl: "https://caco.ic.unicamp.br/mascote.png",
    originEventId: null
  });
  
  console.log("Sticker criado:", novoSticker.id);

  // 2. Gerar códigos de resgate
  const codigosGerados = await stickerService.generateCodes(novoSticker.id, {
    quantity: 100,
    oneTimeUse: true,
    expiresAt: "2024-12-31T23:59:59Z"
  });
  
  console.log("Códigos gerados:", codigosGerados.codes.length);
  console.log("Primeiro código:", codigosGerados.codes[0]);

  // 3. Exportar códigos
  const blob = new Blob([codigosGerados.codes.join('\n')], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  console.log("Códigos prontos para download:", url);

  // 4. Listar todos os stickers
  const todosStickers = await stickerService.getAllStickers();
  console.log("Total de stickers:", todosStickers.allStickers.length);

  // 5. Atualizar sticker
  const stickerAtualizado = await stickerService.updateSticker(novoSticker.id, {
    name: "Mascote CACo Atualizado",
    description: "Descrição melhorada",
    imageUrl: novoSticker.imageUrl,
    originEventId: 456
  });
  
  console.log("Sticker atualizado:", stickerAtualizado.version);

  // 6. Deletar sticker (opcional)
  // await stickerService.deleteSticker(novoSticker.id);
}

// ===========================================
// DICAS DE DESENVOLVIMENTO
// ===========================================

/**
 * URLs de imagem válidas:
 * - https://exemplo.com/imagem.png
 * - https://cdn.exemplo.com/assets/sticker.jpg
 * - https://imgur.com/abc123.webp
 * 
 * URLs inválidas:
 * - /assets/local.png (sem domínio)
 * - ftp://servidor.com/imagem.png (protocolo não HTTP/HTTPS)
 * - exemplo.com/imagem.png (sem protocolo)
 */

/**
 * Limites e restrições:
 * - Nome: obrigatório, não pode ser vazio
 * - Descrição: opcional, máx 500 caracteres
 * - ImageUrl: obrigatória, deve ser URL válida
 * - OriginEventId: opcional, deve existir no banco
 * - Quantity: 1-500 códigos por lote
 */

/**
 * Estados do sticker no frontend:
 * - isRecent: true se atualizado nas últimas 24h
 * - formattedCreatedAt: data em formato pt-BR
 * - formattedUpdatedAt: data ou null
 */

export {
  createStickerPayload,
  updateStickerPayload,
  generateCodesPayload,
  exemploFluxoCompleto
};
