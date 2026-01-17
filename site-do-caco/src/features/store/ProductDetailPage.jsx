import { useProductDetailVM } from './useProductDetailVM';
import { ProductImageGallery } from './components/ProductImageGallery';
import { ProductInfo } from './components/ProductInfo';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Sparkles } from 'lucide-react';

export function ProductDetailPage() {
  const {
    product,
    selectedVariation,
    currentImageIndex,
    loading,
    error,
    selectVariation,
    nextImage,
    previousImage,
    goToImage,
    getTotalPrice,
    goBack,
  } = useProductDetailVM();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Erro</h2>
          <p className="text-muted-foreground mb-4">{error}</p>
          <Button onClick={goBack} variant="outline">
            <ArrowLeft size={16} className="mr-2" />
            Voltar para a loja
          </Button>
        </div>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Botão Voltar */}
        <Button
          variant="ghost"
          onClick={goBack}
          className="mb-6 hover:bg-primary/10 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Voltar para a loja
        </Button>

        {/* Layout Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Galeria de Imagens - mais espaço */}
          <div className="lg:col-span-7">
            <ProductImageGallery
              images={product.images}
              productName={product.name}
              currentIndex={currentImageIndex}
              onNext={nextImage}
              onPrevious={previousImage}
              onSelectImage={goToImage}
            />
          </div>

          {/* Informações do Produto */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-6">
              <ProductInfo
                product={product}
                selectedVariation={selectedVariation}
                onSelectVariation={selectVariation}
                totalPrice={getTotalPrice()}
              />
            </div>
          </div>
        </div>

        {/* Seção decorativa */}
        <div className="mt-16 mb-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8">
            {/* Arte decorativa */}
            <div className="w-32 h-32 rounded-lg overflow-hidden">
              <img 
                src="/placeholder-art.png" 
                alt="Arte decorativa" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.parentElement.innerHTML = `
                    <div class="w-full h-full rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-dashed border-primary/20 flex items-center justify-center">
                      <svg class="text-primary" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                        <path d="M2 17l10 5 10-5"/>
                        <path d="M2 12l10 5 10-5"/>
                      </svg>
                    </div>
                  `;
                }}
              />
            </div>
            
            {/* Frase com coração */}
            <div className="text-center md:text-left">
              <p className="text-lg md:text-xl font-medium text-foreground/80 flex items-center gap-2 flex-wrap justify-center md:justify-start">
                <span>feito com</span>
                <svg className="text-red-500" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                <span>pelo CACo para você</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
