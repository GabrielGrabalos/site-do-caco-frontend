import { useState, useEffect, useMemo } from 'react';
import { stickerService } from '@/shared/services/stickerService';
import { useToast } from '@/components/ui/use-toast';
import { Sticker } from './Sticker';

const DRAFT_KEY = 'sticker-draft';

export function useAdminStickersVM() {
  const { toast } = useToast();

  // === ESTADO PRINCIPAL ===
  const [stickers, setStickers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // === CONTROLE DE VISUALIZAÇÃO ===
  const [viewMode, setViewMode] = useState('LIST'); // 'LIST' | 'FORM' | 'CODES'
  const [selectedSticker, setSelectedSticker] = useState(null);

  // === RASCUNHO ===
  const [hasDraft, setHasDraft] = useState(false);

  // === FILTROS ===
  const [searchTerm, setSearchTerm] = useState('');

  // === GERAÇÃO DE CÓDIGOS ===
  const [codesGenerationResult, setCodesGenerationResult] = useState(null);

  // Carrega dados ao montar
  useEffect(() => {
    loadStickers();
    checkForDraft();
  }, []);

  /**
   * Extrai mensagem de erro amigável
   */
  const getErrorMessage = (err) => {
    if (err.response?.data?.errors && Array.isArray(err.response.data.errors)) {
      return err.response.data.errors
        .map(e => e.defaultMessage || e.message)
        .join(' | ');
    }
    return err.response?.data?.message || err.message || "Ocorreu um erro inesperado.";
  };

  /**
   * Verifica se existe rascunho salvo
   */
  const checkForDraft = () => {
    const draft = localStorage.getItem(DRAFT_KEY);
    setHasDraft(!!draft);
  };

  /**
   * Descarta rascunho
   */
  const discardDraft = () => {
    localStorage.removeItem(DRAFT_KEY);
    setHasDraft(false);
    toast({
      title: "Rascunho descartado",
      description: "As informações não salvas foram removidas.",
    });
  };

  /**
   * Carrega lista de stickers do backend
   * GET /api/public/stickers retorna { allStickers: [], myStickers: [] }
   */
  const loadStickers = async () => {
    try {
      setLoading(true);
      const data = await stickerService.getAllStickers();
      
      // O endpoint retorna { allStickers: [...], myStickers: [...] }
      const allStickers = data.allStickers || [];
      setStickers(allStickers.map(dto => Sticker.fromDTO(dto)));
    } catch (err) {
      console.error('Erro ao carregar stickers:', err);
      toast({
        variant: "destructive",
        title: "Erro ao carregar",
        description: "Não foi possível buscar a lista de stickers.",
      });
    } finally {
      setLoading(false);
    }
  };

  /**
   * Cria novo sticker
   */
  const createSticker = async (formData, imageFile) => {
    try {
      setIsSubmitting(true);
      const newStickerDTO = await stickerService.createSticker(formData, imageFile);
      const stickerInstance = Sticker.fromDTO(newStickerDTO);

      setStickers(prev => [stickerInstance, ...prev]);
      setViewMode('LIST');
      localStorage.removeItem(DRAFT_KEY);
      setHasDraft(false);

      toast({
        title: "Sticker criado!",
        description: `O sticker "${stickerInstance.name}" foi salvo com sucesso.`,
      });

      return { success: true };
    } catch (err) {
      console.error(err);
      toast({
        variant: "destructive",
        title: "Erro ao criar",
        description: getErrorMessage(err),
      });
      return { success: false, error: err.message };
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Gera códigos de resgate para um sticker
   */
  const generateRedemptionCodes = async (dto) => {
    if (!selectedSticker?.id) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Nenhum sticker selecionado.",
      });
      return { success: false };
    }

    try {
      setIsSubmitting(true);
      const result = await stickerService.generateCodes(selectedSticker.id, dto);
      
      setCodesGenerationResult(result);
      
      // Atualiza o sticker selecionado com os códigos gerados
      setSelectedSticker(prev => ({
        ...prev,
        generatedCodes: result,
      }));

      toast({
        title: "Códigos gerados!",
        description: `${result.codes.length} código(s) foram gerados com sucesso.`,
      });

      return { success: true, data: result };
    } catch (err) {
      console.error(err);
      toast({
        variant: "destructive",
        title: "Erro ao gerar códigos",
        description: getErrorMessage(err),
      });
      return { success: false, error: err.message };
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Abre formulário para criar novo sticker
   */
  const handleCreateClick = () => {
    setSelectedSticker(null);
    setViewMode('FORM');
  };

  /**
   * Volta para visualização de lista
   */
  const handleCancelForm = () => {
    setViewMode('LIST');
    setSelectedSticker(null);
  };

  /**
   * Abre modal de geração de códigos
   */
  const handleGenerateCodesClick = (sticker) => {
    setSelectedSticker(sticker);
    // ModalCodesGenerator será aberto via context
  };

  /**
   * Fecha modal de codes
   */
  const closeCodes = () => {
    setViewMode('LIST');
    setCodesGenerationResult(null);
    setSelectedSticker(null);
  };

  /**
   * Filtra stickers por busca
   */
  const filteredList = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return stickers.filter(sticker =>
      sticker.name.toLowerCase().includes(term) ||
      (sticker.description && sticker.description.toLowerCase().includes(term))
    );
  }, [stickers, searchTerm]);

  return {
    // Estado
    stickers: filteredList,
    allStickers: stickers,
    loading,
    isSubmitting,
    viewMode,
    selectedSticker,
    hasDraft,
    codesGenerationResult,

    // Filtros
    searchTerm,
    setSearchTerm,

    // Ações
    loadStickers,
    createSticker,
    generateRedemptionCodes,
    handleCreateClick,
    handleCancelForm,
    handleGenerateCodesClick,
    closeCodes,
    discardDraft,
  };
}
