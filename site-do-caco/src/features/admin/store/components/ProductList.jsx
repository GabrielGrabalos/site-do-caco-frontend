import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StoreProductItem } from './StoreProductItem';
import { AdminListTemplate } from '@/shared/components/templates/AdminListTemplate';

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

  const emptyState = (
    <div className="flex flex-col items-center">
      <p>Nenhum produto nesta categoria</p>
      <Button onClick={onAddProduct} variant="outline" className="mt-4">
        <Plus size={16} className="mr-2" />
        Adicionar Primeiro Produto
      </Button>
    </div>
  );

  return (
    <AdminListTemplate
      title={`Produtos de ${selectedCategory.name}`}
      onCreate={onAddProduct}
      createLabel="Novo Produto"
      loading={loading}
      isEmpty={products.length === 0}
      emptyMessage={emptyState}
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
    </AdminListTemplate>
  );
}
