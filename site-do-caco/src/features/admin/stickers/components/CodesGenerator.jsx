import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import {
  Copy,
  Check,
  AlertCircle,
  Gift,
  Lock,
  Calendar as CalendarIcon,
  CheckCircle2,
  XCircle,
  User,
  Loader2,
  FileDown,
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { stickerService } from '@/shared/services/stickerService';
import { DatePicker } from '@/features/admin/components/DatePicker';
import { generateQRCodesPDF, generateQRCodesPDFChunked } from '@/shared/utils/qrCodePdfGenerator';

const ErrorMessage = ({ message }) => {
  if (!message) return null;
  return (
    <p className="text-sm font-medium text-destructive mt-1 animate-in slide-in-from-top-1 fade-in">
      {message}
    </p>
  );
};

export function CodesGenerator({ sticker, open, onOpenChange, onGenerate, isSubmitting }) {
  const { toast } = useToast();

  // === FORM STATE ===
  const [quantity, setQuantity] = useState(10);
  const [oneTimeUse, setOneTimeUse] = useState(true);
  const [expiresAt, setExpiresAt] = useState(null);
  const [errors, setErrors] = useState({});

  // === COPY STATE ===
  const [copiedCode, setCopiedCode] = useState(null);

  // === EXISTING CODES STATE ===
  const [existingCodes, setExistingCodes] = useState([]);
  const [loadingCodes, setLoadingCodes] = useState(false);
  const [activeTab, setActiveTab] = useState('generate');
  const [showExportDialog, setShowExportDialog] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);

  // Carrega códigos existentes quando o dialog abre
  useEffect(() => {
    if (open && sticker?.id) {
      loadExistingCodes();
    }
  }, [open, sticker?.id]);

  const loadExistingCodes = async () => {
    try {
      setLoadingCodes(true);
      const codes = await stickerService.getStickerCodes(sticker.id);
      setExistingCodes(codes);
      
      // Se houver códigos, começa na aba de visualização
      if (codes.length > 0) {
        setActiveTab('view');
      }
    } catch (err) {
      console.error('Erro ao carregar códigos:', err);
      setExistingCodes([]);
    } finally {
      setLoadingCodes(false);
    }
  };

  const resetForm = () => {
    setQuantity(10);
    setOneTimeUse(true);
    setExpiresAt(null);
    setErrors({});
  };

  const handleOpenChange = (newOpen) => {
    if (!newOpen) {
      resetForm();
    }
    onOpenChange(newOpen);
  };

  /**
   * Valida formulário
   */
  const validateForm = () => {
    const newErrors = {};

    const qty = parseInt(quantity, 10);
    if (!qty || qty < 1) {
      newErrors.quantity = 'Quantidade deve ser maior que 0';
    } else if (qty > 500) {
      newErrors.quantity = 'Quantidade máxima é 500';
    }

    if (expiresAt) {
      const now = new Date();
      if (expiresAt <= now) {
        newErrors.expiresAt = 'Data de expiração deve ser no futuro';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Submete formulário de geração
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const dto = {
      quantity: parseInt(quantity, 10),
      oneTimeUse,
      expiresAt: expiresAt ? expiresAt.toISOString() : null,
    };

    const result = await onGenerate(dto);

    if (result.success) {
      resetForm();
      // Recarrega códigos existentes após gerar novos
      await loadExistingCodes();
      // Diálogo permanece aberto para mostrar resultado
    }
  };

  /**
   * Copia código para clipboard
   */
  const copyCode = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2000);
      toast({
        title: "Copiado!",
        description: `Código "${code}" copiado para a área de transferência.`,
      });
    } catch {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível copiar o código.",
      });
    }
  };

  /**
   * Exporta códigos como PDF com QR Codes
   */
  const exportCodes = async (codes) => {
    try {
      setShowExportDialog(true);
      setExportProgress(0);

      // Callback de progresso
      const onProgress = (progress) => {
        setExportProgress(progress);
      };

      // Se houver muitos códigos, usa processamento em chunks
      if (codes.length > 500) {
        await generateQRCodesPDFChunked(codes, sticker?.name || 'sticker', 100, onProgress);
      } else {
        await generateQRCodesPDF(codes, sticker?.name || 'sticker', onProgress);
      }

      // Aguarda um momento para mostrar 100% antes de fechar
      await new Promise(resolve => setTimeout(resolve, 800));

    } catch (err) {
      console.error('Erro ao exportar PDF:', err);
      toast({
        variant: "destructive",
        title: "Erro ao gerar PDF",
        description: "Não foi possível exportar os códigos.",
      });
    } finally {
      setShowExportDialog(false);
      setExportProgress(0);
    }
  };

  return (
    <>
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto w-[95vw] sm:w-full p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-lg sm:text-xl">
            <Gift className="h-4 w-4 sm:h-5 sm:w-5" />
            Códigos de Resgate
          </DialogTitle>
          <DialogDescription className="text-sm">
            {sticker ? `Sticker: ${sticker.name}` : 'Selecione um sticker'}
          </DialogDescription>
        </DialogHeader>

        {!sticker ? (
          <div className="py-8 text-center text-muted-foreground">
            Nenhum sticker selecionado
          </div>
        ) : (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 h-auto">
              <TabsTrigger value="view" className="gap-1 sm:gap-2 text-[10px] sm:text-sm py-2 px-1 sm:px-3">
                <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="truncate">Existentes</span>
                {existingCodes.length > 0 && (
                  <Badge variant="secondary" className="ml-0.5 sm:ml-1 text-[9px] sm:text-xs px-1">
                    {existingCodes.length}
                  </Badge>
                )}
              </TabsTrigger>
              <TabsTrigger value="generate" className="gap-1 sm:gap-2 text-[10px] sm:text-sm py-2 px-1 sm:px-3">
                <Gift className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="truncate">Gerar</span>
              </TabsTrigger>
            </TabsList>

            {/* Tab: Visualizar Códigos Existentes */}
            <TabsContent value="view" className="space-y-4 mt-4">
              {loadingCodes ? (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
                </div>
              ) : existingCodes.length === 0 ? (
                <div className="text-center py-12">
                  <Gift className="h-12 w-12 mx-auto text-muted-foreground/30 mb-4" />
                  <p className="text-muted-foreground mb-2">Nenhum código gerado ainda</p>
                  <p className="text-sm text-muted-foreground">
                    Clique em "Gerar Novos" para criar códigos de resgate
                  </p>
                </div>
              ) : (
                <>
                  {/* Estatísticas */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    <Card>
                      <CardContent className="pt-4 sm:pt-6 text-center">
                        <p className="text-xl sm:text-2xl font-bold">{existingCodes.length}</p>
                        <p className="text-[10px] sm:text-xs text-muted-foreground">Total</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-4 sm:pt-6 text-center">
                        <p className="text-xl sm:text-2xl font-bold text-green-600">
                          {existingCodes.filter(c => c.redeemed).length}
                        </p>
                        <p className="text-[10px] sm:text-xs text-muted-foreground">Resgatados</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-4 sm:pt-6 text-center">
                        <p className="text-xl sm:text-xl sm:text-2xl font-bold text-blue-600">
                          {existingCodes.filter(c => !c.redeemed).length}
                        </p>
                        <p className="text-[10px] sm:text-xs text-muted-foreground">Disponíveis</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Lista de Códigos */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm sm:text-base">Lista de Códigos</CardTitle>
                      <CardDescription className="text-xs sm:text-sm">
                        {existingCodes.length} código(s) gerado(s)
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 max-h-96 overflow-y-auto">
                        {existingCodes.map((codeData) => (
                          <div
                            key={codeData.id}
                            className={`flex items-center justify-between gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg border transition-colors ${
                              codeData.redeemed
                                ? 'bg-muted/50 border-muted'
                                : 'bg-card hover:bg-muted/30'
                            }`}
                          >
                            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                              {codeData.redeemed ? (
                                <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                              ) : (
                                <XCircle className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 flex-shrink-0" />
                              )}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-1 sm:gap-2">
                                  <code className="text-xs sm:text-sm font-mono font-semibold truncate">
                                    {codeData.code}
                                  </code>
                                  <Badge
                                    variant={codeData.redeemed ? 'default' : 'outline'}
                                    className="text-xs"
                                  >
                                    {codeData.redeemed ? 'Resgatado' : 'Disponível'}
                                  </Badge>
                                </div>
                                {codeData.redeemed && codeData.redeemedAt && (
                                  <p className="text-xs text-muted-foreground mt-1">
                                    Resgatado em {new Date(codeData.redeemedAt).toLocaleString('pt-BR')}
                                    {codeData.redeemedByUserId && (
                                      <span className="ml-1">
                                        • User ID: {codeData.redeemedByUserId.substring(0, 8)}...
                                      </span>
                                    )}
                                  </p>
                                )}
                              </div>
                            </div>
                            {!codeData.redeemed && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyCode(codeData.code)}
                                className="flex-shrink-0"
                              >
                                {copiedCode === codeData.code ? (
                                  <Check className="h-4 w-4 text-green-600" />
                                ) : (
                                  <Copy className="h-4 w-4" />
                                )}
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Botões de Ação */}
                  <div className="flex flex-col sm:flex-row gap-2 justify-end">
                    <Button
                      variant="outline"
                      onClick={async () => {
                        const availableCodes = existingCodes
                          .filter(c => !c.redeemed)
                          .map(c => c.code);
                        if (availableCodes.length > 0) {
                          await exportCodes(availableCodes);
                        } else {
                          toast({
                            variant: 'destructive',
                            title: 'Nenhum código disponível',
                            description: 'Todos os códigos já foram resgatados.',
                          });
                        }
                      }}
                      disabled={existingCodes.filter(c => !c.redeemed).length === 0 || showExportDialog}
                      className="gap-2 w-full sm:w-auto text-sm"
                    >
                      📄 Exportar PDF
                    </Button>
                    <Button onClick={() => handleOpenChange(false)} className="w-full sm:w-auto text-sm">
                      Fechar
                    </Button>
                  </div>
                </>
              )}
            </TabsContent>

            {/* Tab: Gerar Novos Códigos */}
            <TabsContent value="generate" className="space-y-4 mt-4">
              {!sticker.generatedCodes ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Quantity */}
                <div className="space-y-2">
                  <Label htmlFor="quantity" className="text-sm font-medium">
                    Quantidade de Códigos
                  </Label>
                  <Input
                    id="quantity"
                    type="number"
                    min="1"
                    max="500"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    disabled={isSubmitting}
                    className={errors.quantity ? 'border-destructive' : ''}
                  />
                  <p className="text-xs text-muted-foreground">
                    Máximo: 500 códigos por lote
                  </p>
                  <ErrorMessage message={errors.quantity} />
                </div>

                {/* One-Time Use */}
                <div className="flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-muted/50 transition-colors">
                  <div className="space-y-0.5">
                    <Label className="text-sm font-medium cursor-pointer">
                      <div className="flex items-center gap-2">
                        <Lock className="h-4 w-4" />
                        Uso Único
                      </div>
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Cada código pode ser resgatado apenas uma vez
                    </p>
                  </div>
                  <Switch
                    checked={oneTimeUse}
                    onCheckedChange={setOneTimeUse}
                    disabled={isSubmitting}
                  />
                </div>

                {/* Expiration Date */}
                <div className="space-y-2">
                  <DatePicker
                    value={expiresAt}
                    onChange={setExpiresAt}
                    error={errors.expiresAt}
                    label="Data de Expiração (Opcional)"
                    placeholder="Selecione uma data"
                  />
                  <p className="text-xs text-muted-foreground">
                    Deixe em branco para códigos sem expiração
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 justify-end">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => handleOpenChange(false)}
                    disabled={isSubmitting}
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current" />
                        Gerando...
                      </>
                    ) : (
                      <>
                        <Gift className="h-4 w-4" />
                        Gerar Códigos
                      </>
                    )}
                  </Button>
                </div>
              </form>
            ) : (
              // Exibição de Códigos Gerados
              <div className="space-y-4">
                <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <p className="text-sm font-medium text-green-800 dark:text-green-200">
                    ✅ {sticker.generatedCodes.codes.length} código(s) gerado(s) com sucesso!
                  </p>
                </div>

                {/* Códigos */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Códigos de Resgate</CardTitle>
                    <CardDescription>
                      Clique para copiar ou exporte todos
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-64 overflow-y-auto">
                      {sticker.generatedCodes.codes.map((code, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between gap-2 p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors cursor-pointer group"
                          onClick={() => copyCode(code)}
                        >
                          <code className="text-xs font-mono font-semibold flex-1 truncate">
                            {code}
                          </code>
                          {copiedCode === code ? (
                            <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                          ) : (
                            <Copy className="h-4 w-4 text-muted-foreground group-hover:text-foreground flex-shrink-0" />
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Meta Info */}
                <Card className="bg-muted/50">
                  <CardContent className="pt-6 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Uso Único:</span>
                      <span className="font-medium">
                        {sticker.generatedCodes.oneTimeUse ? 'Sim' : 'Não'}
                      </span>
                    </div>
                    {sticker.generatedCodes.expiresAt && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Expira em:</span>
                        <span className="font-medium">
                          {new Date(sticker.generatedCodes.expiresAt).toLocaleDateString('pt-BR')}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Gerado em:</span>
                      <span className="font-medium">
                        {new Date(sticker.generatedCodes.generatedAt).toLocaleString('pt-BR')}
                      </span>
                    </div>
                  </CardContent>
                </Card>

                {/* Export & Close Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 justify-end">
                  <Button
                    variant="outline"
                    onClick={() => exportCodes(sticker.generatedCodes.codes)}
                    disabled={showExportDialog}
                    className="gap-2 w-full sm:w-auto text-sm"
                  >
                    📄 Exportar PDF
                  </Button>
                  <Button onClick={() => handleOpenChange(false)} disabled={showExportDialog} className="w-full sm:w-auto text-sm">
                    Fechar
                  </Button>
                </div>
              </div>
            )}
            </TabsContent>
          </Tabs>
        )}
      </DialogContent>
    </Dialog>

    {/* Dialog de Progresso de Exportação */}
    <Dialog open={showExportDialog} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md" onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <div className="relative">
              <FileDown className="h-6 w-6 text-primary" />
              <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-primary rounded-full animate-pulse" />
            </div>
            Gerando PDF
          </DialogTitle>
          <DialogDescription>
            Criando arquivo com QR Codes. Por favor, aguarde...
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-6">
          {/* Barra de Progresso */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground font-medium">Progresso</span>
              <span className="text-primary font-bold text-lg">
                {exportProgress}%
              </span>
            </div>
            <Progress value={exportProgress} className="h-3" />
          </div>

          {/* Status Visual */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin text-primary" />
            <span>
              {exportProgress < 30 && 'Preparando documentos...'}
              {exportProgress >= 30 && exportProgress < 70 && 'Gerando QR Codes...'}
              {exportProgress >= 70 && exportProgress < 100 && 'Finalizando PDF...'}
              {exportProgress === 100 && 'Concluído!'}
            </span>
          </div>

          {/* Design decorativo */}
          <div className="relative h-32 rounded-lg bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 opacity-20">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 border-2 border-primary rounded-lg animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <FileDown className="h-16 w-16 text-primary/40" />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
    </>
  );
}
