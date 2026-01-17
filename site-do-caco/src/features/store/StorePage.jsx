import { useStoreVM } from './useStoreVM';
import { CategoryTabs } from './components/CategoryTabs';
import { ProductGrid } from './components/ProductGrid';
import { Store } from 'lucide-react';

export function StorePage() {
  const {
    categories,
    selectedCategory,
    products,
    loading,
    error,
    selectCategory,
  } = useStoreVM();

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
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Store size={32} className="text-primary" />
          <h1 className="text-4xl font-bold">Loja do CACO</h1>
        </div>
        <p className="text-muted-foreground">
          Confira os produtos disponíveis para compra
        </p>
      </div>

      {categories.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <Store size={64} className="text-gray-300 dark:text-gray-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
            Nenhuma categoria disponível
          </h3>
          <p className="text-gray-500 dark:text-gray-500">
            A loja ainda não possui produtos cadastrados
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          <CategoryTabs
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={selectCategory}
          />
          
          <ProductGrid
            products={products}
            categoryName={selectedCategory?.name}
          />
        </div>
      )}

      {/* Arte Decorativa - sempre visível */}
      <div className="flex items-center justify-center py-12">
        <div className="w-full max-w-3xl aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-2 border-dashed border-primary/30">
          <div className="text-center text-muted-foreground">
            <p className="text-lg font-medium">Arte decorativa</p>
            <p className="text-sm mt-2">Espaço reservado para ilustração</p>
          </div>
        </div>
      </div>
    </div>
  );
}
