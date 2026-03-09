import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import { formatCurrency } from '@/shared/utils/formatters';
import { MarkdownContent } from '@/shared/components/MarkdownContent';
import { cn } from '@/lib/utils';
import { ShoppingCart, Package, AlertCircle, Share2, Zap, Plus, Minus } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useState, useEffect, useMemo } from 'react';
import { Drawer } from 'vaul';

export function ProductInfo({ 
  product, 
  selectedVariation, 
  onSelectVariation, 
  totalPrice 
}) {
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [observation, setObservation] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [actionType, setActionType] = useState(''); // 'buy' ou 'cart'
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const hasVariations = product.variations && product.variations.length > 0;
  const availableVariations = hasVariations 
    ? product.variations.filter(v => v.available)
    : [];
  
  // Determinar o estoque máximo
  const maxStock = product.manageStock ? (product.stockQuantity || 0) : 99;
  const canIncreaseQuantity = quantity < maxStock;
  const canDecreaseQuantity = quantity > 1;

  const handleIncreaseQuantity = () => {
    if (canIncreaseQuantity) {
      setQuantity(prev => prev + 1);
    }
  };

  const handleDecreaseQuantity = () => {
    if (canDecreaseQuantity) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= maxStock) {
      setQuantity(value);
    }
  };

  const handleOpenCheckout = (type) => {
    setActionType(type);
    if (isMobile) {
      setIsDrawerOpen(true);
    } else {
      setIsPopoverOpen(true);
    }
  };

  const handleConfirmAction = () => {
    // Aqui seria a lógica para adicionar ao carrinho ou comprar
    toast({
      title: actionType === 'buy' ? 'Compra iniciada!' : 'Adicionado ao carrinho!',
      description: `${quantity}x ${product.name}${observation ? ' com observação' : ''}`,
    });
    setIsDrawerOpen(false);
    setIsPopoverOpen(false);
    setObservation('');
  };

  const checkoutContent = useMemo(() => (
    <div className="space-y-4">
      {/* Overview do pedido */}
      <div className="space-y-3 p-4 bg-muted/50 rounded-lg">
        <h4 className="font-semibold text-sm">Resumo do Pedido</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Produto:</span>
            <span className="font-medium">{product.name}</span>
          </div>
          {selectedVariation && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Variação:</span>
              <span className="font-medium">{selectedVariation.name}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-muted-foreground">Quantidade:</span>
            <span className="font-medium">{quantity}x</span>
          </div>
          <div className="flex justify-between pt-2 border-t">
            <span className="font-semibold">Total:</span>
            <span className="font-bold text-primary text-lg">{formatCurrency(totalPrice * quantity)}</span>
          </div>
        </div>
      </div>

      {/* Observação */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Observações (opcional)</label>
        <Textarea
          value={observation}
          onChange={(e) => setObservation(e.target.value)}
          placeholder="Adicione alguma observação sobre seu pedido..."
          className="min-h-[100px] resize-none"
        />
      </div>

      {/* Botão de confirmação */}
      <Button 
        onClick={handleConfirmAction}
        className="w-full h-12 text-base font-semibold"
        size="lg"
      >
        {actionType === 'buy' ? (
          <>
            <Zap size={20} className="mr-2" />
            Confirmar Compra
          </>
        ) : (
          <>
            <ShoppingCart size={20} className="mr-2" />
            Adicionar ao Carrinho
          </>
        )}
      </Button>
    </div>
  ), [product.name, selectedVariation, quantity, totalPrice, observation, actionType, handleConfirmAction]);

  const handleShare = async () => {
    const url = window.location.href;
    const text = `Confira ${product.name} na Loja do CACo!`;
    
    try {
      // Verificar se o navegador suporta compartilhamento nativo
      if (navigator.share) {
        await navigator.share({
          title: product.name,
          text: text,
          url: url,
        });
        // Toast de sucesso apenas se não for cancelado
        toast({
          title: "Compartilhado com sucesso!",
          description: "O produto foi compartilhado.",
        });
      } else {
        // Fallback: copiar para clipboard
        copyToClipboard(url);
      }
    } catch (error) {
      // Se o usuário cancelar, não mostrar erro
      if (error.name !== 'AbortError') {
        console.error('Erro ao compartilhar:', error);
        // Fallback em caso de erro
        copyToClipboard(url);
      }
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Link copiado!",
      description: "O link do produto foi copiado para a área de transferência.",
    });
  };

  return (
    <div className="space-y-6">
      {/* Cabeçalho com Badge de Status */}
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2 flex-1">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{product.name}</h1>
            {product.categoryName && (
              <Badge variant="secondary" className="text-sm font-medium">
                {product.categoryName}
              </Badge>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleShare}
              className="rounded-full"
              title="Compartilhar produto"
            >
              <Share2 size={18} />
            </Button>
            {product.outOfStock && (
              <Badge variant="destructive" className="text-sm whitespace-nowrap">
                Esgotado
              </Badge>
            )}
          </div>
        </div>
      </div>

      {/* Preço com destaque */}
      <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-xl p-4 border border-primary/20">
        <div className="flex items-center gap-3 mt-1">
          <span className="text-3xl md:text-4xl font-bold text-primary">
            {formatCurrency(totalPrice)}
          </span>
          {hasVariations && selectedVariation?.additionalPrice !== 0 && (
            <span className="text-sm text-muted-foreground">
              (Base: {formatCurrency(product.price)})
            </span>
          )}
        </div>
        
        {product.manageStock && !product.outOfStock && (
          <div className="flex items-center gap-2 mt-2 text-sm text-green-600 dark:text-green-500">
            <Package size={16} />
            <span className="font-medium">{product.stockQuantity} disponíveis em estoque</span>
          </div>
        )}
      </div>

      {/* Variações em formato de tag */}
      {hasVariations && (
        <div className="space-y-3">
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
              Escolha uma opção
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.variations.map((variation) => (
              <button
                key={variation.id}
                onClick={() => variation.available && onSelectVariation(variation)}
                disabled={!variation.available}
                className={cn(
                  "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all border-2",
                  selectedVariation?.id === variation.id
                    ? "bg-primary text-primary-foreground border-primary shadow-md scale-105"
                    : variation.available
                    ? "bg-background border-gray-300 dark:border-gray-600 hover:border-primary hover:scale-105"
                    : "bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-50 cursor-not-allowed line-through"
                )}
              >
                <span>{variation.name}</span>
                {variation.additionalPrice !== 0 && (
                  <span className={cn(
                    "text-[10px]",
                    selectedVariation?.id === variation.id 
                      ? "text-primary-foreground/90" 
                      : "text-muted-foreground"
                  )}>
                    {variation.additionalPrice > 0 ? '+' : ''}
                    {formatCurrency(variation.additionalPrice)}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Descrição */}
      {product.description && (
        <div className="prose prose-sm dark:prose-invert max-w-none">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            Sobre o produto
          </h3>
          <div className="text-foreground/80">
            <MarkdownContent content={product.description} />
          </div>
        </div>
      )}

      {/* Seletor de Quantidade */}
      {!product.outOfStock && (availableVariations.length > 0 || !hasVariations) && (
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide whitespace-nowrap">
            Quantidade:
          </h3>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handleDecreaseQuantity}
              disabled={!canDecreaseQuantity}
              className="h-9 w-9 rounded-lg"
            >
              <Minus size={14} />
            </Button>
            <input
              type="number"
              min="1"
              max={maxStock}
              value={quantity}
              onChange={handleQuantityChange}
              className="w-16 h-9 text-center border-2 border-input bg-background text-foreground rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={handleIncreaseQuantity}
              disabled={!canIncreaseQuantity}
              className="h-9 w-9 rounded-lg"
            >
              <Plus size={14} />
            </Button>
            {product.manageStock && (
              <span className="text-xs text-muted-foreground ml-1 whitespace-nowrap">
                (Máx: {maxStock})
              </span>
            )}
          </div>
        </div>
      )}

      {/* Botões de Ação */}
      <div className="space-y-3 pt-4">
        {product.outOfStock ? (
          <div className="flex items-center gap-2 text-muted-foreground justify-center py-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
            <AlertCircle size={20} />
            <span className="font-medium">Produto esgotado</span>
          </div>
        ) : availableVariations.length === 0 && hasVariations ? (
          <div className="flex items-center gap-2 text-muted-foreground justify-center py-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
            <AlertCircle size={20} />
            <span className="font-medium">Nenhuma opção disponível no momento</span>
          </div>
        ) : (
          <>
            {!isMobile ? (
              <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                <PopoverTrigger asChild>
                  <Button 
                    className="w-full h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all rounded-xl"
                    size="lg"
                    disabled={hasVariations && !selectedVariation?.available}
                    onClick={() => handleOpenCheckout('buy')}
                  >
                    <Zap size={22} className="mr-2" />
                    Comprar Agora
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[400px] p-6" side="bottom" align="center" sideOffset={10}>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">
                      {actionType === 'buy' ? 'Comprar Agora' : 'Adicionar ao Carrinho'}
                    </h3>
                    {checkoutContent}
                  </div>
                </PopoverContent>
              </Popover>
            ) : (
              <Button 
                className="w-full h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all rounded-xl"
                size="lg"
                disabled={hasVariations && !selectedVariation?.available}
                onClick={() => handleOpenCheckout('buy')}
              >
                <Zap size={22} className="mr-2" />
                Comprar Agora
              </Button>
            )}
            
            <Button 
              variant="outline"
              className="w-full h-14 text-lg font-semibold border-2 hover:bg-primary/5 rounded-xl"
              size="lg"
              disabled={hasVariations && !selectedVariation?.available}
              onClick={() => handleOpenCheckout('cart')}
            >
              <ShoppingCart size={22} className="mr-2" />
              Adicionar ao Carrinho
            </Button>
          </>
        )}
      </div>

      {/* Drawer para Mobile */}
      <Drawer.Root 
        open={isDrawerOpen} 
        onOpenChange={setIsDrawerOpen}
        dismissible={true}
        shouldScaleBackground={false}
      >
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 z-40 bg-black/40" />
          <Drawer.Content className="fixed bottom-0 left-0 right-0 z-50 flex flex-col rounded-t-[10px] bg-background max-h-[96vh] [&_[vaul-drawer-visible]]:!pb-0">
            {/* Handle para arrastar */}
            <div className="mx-auto mt-4 h-1.5 w-12 flex-shrink-0 rounded-full bg-muted-foreground/30" />
            
            <div className="overflow-y-auto p-6 pb-8">
              <div className="mx-auto max-w-md">
                <h2 className="text-lg font-semibold mb-6">
                  {actionType === 'buy' ? 'Comprar Agora' : 'Adicionar ao Carrinho'}
                </h2>
                {checkoutContent}
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}
