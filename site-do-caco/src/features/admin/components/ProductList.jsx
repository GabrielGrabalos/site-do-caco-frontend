import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StoreProductItem } from './StoreProductItem';

export function ProductList({
  products,
  loading,
  onAddProduct,
  onDeleteProduct,
  onEditProduct,
  onManageVariations,
  onManageImages,
  selectedCategory,
}) {
  if (!selectedCategory) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <p>Selecione uma categoria para ver e gerenciar os produtos</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">
          Produtos de {selectedCategory.name}
        </h3>
        <Button onClick={onAddProduct} size="sm">
          <Plus size={16} className="mr-2" />
          Novo Produto
        </Button>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          <p>Nenhum produto nesta categoria</p>
          <Button onClick={onAddProduct} variant="outline" className="mt-4">
            <Plus size={16} className="mr-2" />
            Adicionar Primeiro Produto
          </Button>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <StoreProductItem
              key={product.id}
              product={product}
              onEdit={onEditProduct}
              onDelete={onDeleteProduct}
              onManageVariations={onManageVariations}
              onManageImages={onManageImages}
            />
          ))}
        </div>
      )}
    </div>
  );
}
