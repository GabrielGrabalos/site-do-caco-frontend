import { useState } from 'react';
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
import {
  Copy,
  Check,
  AlertCircle,
  Gift,
  Lock,
  Calendar as CalendarIcon,
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

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
  const [expiresAt, setExpiresAt] = useState('');
  const [errors, setErrors] = useState({});

  // === COPY STATE ===
  const [copiedCode, setCopiedCode] = useState(null);

  const resetForm = () => {
    setQuantity(10);
    setOneTimeUse(true);
    setExpiresAt('');
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
      const expDate = new Date(expiresAt);
      const now = new Date();
      if (expDate <= now) {
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
      expiresAt: expiresAt || null,
    };

    const result = await onGenerate(dto);

    if (result.success) {
      resetForm();
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
   * Exporta todos os códigos como texto
   */
  const exportCodes = (codes) => {
    const text = codes.join('\n');
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sticker-${sticker?.id}-codes.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Exportado!",
      description: "Códigos exportados como arquivo de texto.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Gift className="h-5 w-5" />
            Gerar Códigos de Resgate
          </DialogTitle>
          <DialogDescription>
            {sticker ? `Sticker: ${sticker.name}` : 'Selecione um sticker'}
          </DialogDescription>
        </DialogHeader>

        {!sticker ? (
          <div className="py-8 text-center text-muted-foreground">
            Nenhum sticker selecionado
          </div>
        ) : (
          <div className="space-y-6">
            {/* Alert de Segurança */}
            <Alert className="border-amber-200 bg-amber-50/50 dark:bg-amber-950/20 text-amber-800 dark:text-amber-200">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Importante</AlertTitle>
              <AlertDescription className="text-xs mt-1">
                Os códigos serão exibidos apenas uma vez. Certifique-se de copiar ou exportar os códigos antes de fechar este diálogo. Não há como recuperá-los depois.
              </AlertDescription>
            </Alert>

            {/* Formulário ou Resultados */}
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
                  <Label htmlFor="expiresAt" className="text-sm font-medium">
                    Data de Expiração (Opcional)
                  </Label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                    <Input
                      id="expiresAt"
                      type="datetime-local"
                      value={expiresAt}
                      onChange={(e) => setExpiresAt(e.target.value)}
                      disabled={isSubmitting}
                      className={`pl-9 ${errors.expiresAt ? 'border-destructive' : ''}`}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Deixe em branco para códigos sem expiração
                  </p>
                  <ErrorMessage message={errors.expiresAt} />
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
                    <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
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
                <div className="flex gap-2 justify-end">
                  <Button
                    variant="outline"
                    onClick={() => exportCodes(sticker.generatedCodes.codes)}
                    className="gap-2"
                  >
                    📥 Exportar TXT
                  </Button>
                  <Button onClick={() => handleOpenChange(false)}>
                    Fechar
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
