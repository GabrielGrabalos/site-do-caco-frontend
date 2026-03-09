import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { userStickerService } from '@/shared/services/userStickerService';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/shared/contexts/AuthContext';
import { redirectToLogin } from '@/shared/utils/redirectToLogin';

export function useStickerClaimVM() {
  const { code: urlCode } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { isAuthenticated } = useAuth();

  const [code, setCode] = useState(urlCode || '');
  const [isLoading, setIsLoading] = useState(false);
  const [claimedSticker, setClaimedSticker] = useState(null);
  const [showScanner, setShowScanner] = useState(false);

  // Se há código na URL, tenta resgatar automaticamente
  useEffect(() => {
    if (urlCode && urlCode.length >= 8) {
      handleClaim(urlCode);
    }
  }, [urlCode]);

  const handleClaim = async (codeToUse = code) => {
    if (!codeToUse || codeToUse.length < 8) {
      toast({
        variant: 'destructive',
        title: 'Código inválido',
        description: 'O código deve ter entre 8 e 12 caracteres.',
      });
      return;
    }

    if (isAuthenticated === false) {
      redirectToLogin(navigate, { from: '/figurinhas/resgatar/' + codeToUse });
      return;
    }

    setIsLoading(true);

    try {
      const result = await userStickerService.claimSticker(codeToUse);
      
      // Validação do resultado
      if (!result) {
        throw new Error('Resposta vazia da API');
      }
      
      // O resultado já vem no formato {sticker: {...}, obtainedAt: "..."}
      setClaimedSticker(result);
      
      toast({
        title: 'Sticker resgatado!',
        description: `Você ganhou: ${result?.sticker?.name || 'um novo sticker'}`,
      });
    } catch (error) {
      console.error({error});
      
      let errorMessage = 'Não foi possível resgatar o sticker.';

      if (error?.message && error.message.trim() !== '') {
        errorMessage = error.message;
      }

      if (error.response?.status === 401) {
        errorMessage = 'Você precisa estar logado para resgatar stickers.';
        setTimeout(() => navigate('/login'), 2000);
      }

      toast({
        variant: 'destructive',
        title: 'Erro ao resgatar',
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleQRCodeScan = (scannedUrl) => {
    // Extrai código da URL (após última barra)
    const parts = scannedUrl.split('/');
    const extractedCode = parts[parts.length - 1];
    
    if (extractedCode && extractedCode.length >= 8) {
      setCode(extractedCode);
      setShowScanner(false);
      handleClaim(extractedCode);
    } else {
      toast({
        variant: 'destructive',
        title: 'QR Code inválido',
        description: 'O código escaneado não é válido.',
      });
    }
  };

  const reset = () => {
    setCode('');
    setClaimedSticker(null);
  };

  return {
    code,
    setCode,
    isLoading,
    claimedSticker,
    showScanner,
    setShowScanner,
    handleClaim,
    handleQRCodeScan,
    reset,
  };
}
