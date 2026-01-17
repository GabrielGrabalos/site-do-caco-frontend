import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/shared/utils/formatters';
import { MarkdownContent } from '@/shared/components/MarkdownContent';
import { cn } from '@/lib/utils';
import { ShoppingCart, Package, AlertCircle, Share2, Zap } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export function ProductInfo({ 
  product, 
  selectedVariation, 
  onSelectVariation, 
  totalPrice 
}) {
  const { toast } = useToast();
  const hasVariations = product.variations && product.variations.length > 0;
  const availableVariations = hasVariations 
    ? product.variations.filter(v => v.available)
    : [];

  const handleShare = async () => {
    const url = window.location.href;
    const text = `Confira ${product.name} na Loja do CACO!`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: text,
          url: url,
        });
        toast({
          title: "Compartilhado com sucesso!",
          description: "O produto foi compartilhado.",
        });
      } catch (error) {
        if (error.name !== 'AbortError') {
          copyToClipboard(url);
        }
      }
    } else {
      copyToClipboard(url);
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
          <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-500">
            <Package size={16} />
            <span className="font-medium">Disponível em estoque</span>
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
            <Button 
              className="w-full h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all rounded-xl"
              size="lg"
              disabled={hasVariations && !selectedVariation?.available}
            >
              <Zap size={22} className="mr-2" />
              Comprar Agora
            </Button>
            
            <Button 
              variant="outline"
              className="w-full h-14 text-lg font-semibold border-2 hover:bg-primary/5 rounded-xl"
              size="lg"
              disabled={hasVariations && !selectedVariation?.available}
            >
              <ShoppingCart size={22} className="mr-2" />
              Adicionar ao Carrinho
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
