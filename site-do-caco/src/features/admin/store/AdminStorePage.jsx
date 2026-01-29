import React from 'react';
import { useToast } from '@/components/ui/use-toast';
import { useAdminStoreCategoriesVM } from './useAdminStoreCategoriesVM';
import { useAdminStoreProductsVM } from './useAdminStoreProductsVM';
import { StoreSection } from './components/StoreSection';

export function AdminStorePage() {
  const { toast } = useToast();
  const categoriesVM = useAdminStoreCategoriesVM();
  const productsVM = useAdminStoreProductsVM();

  // ============= CATEGORIAS =============

  const handleCreateCategory = async (data) => {
    const result = await categoriesVM.createCategory(data);
    if (result.success) {
      toast({
        title: 'Categoria criada',
        description: `A categoria "${data.name}" foi criada com sucesso.`,
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao criar categoria',
        description: result.error,
      });
    }
    return result;
  };

  const handleUpdateCategory = async (id, data) => {
    const result = await categoriesVM.updateCategory(id, data);
    if (result.success) {
      toast({
        title: 'Categoria atualizada',
        description: 'A categoria foi atualizada com sucesso.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao atualizar categoria',
        description: result.error,
      });
    }
    return result;
  };

  const handleDeleteCategory = async (id) => {
    const result = await categoriesVM.deleteCategory(id);
    if (result.success) {
      toast({
        title: 'Categoria removida',
        description: 'A categoria foi removida com sucesso.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao remover categoria',
        description: result.error,
      });
    }
  };

  const handleReorderCategories = async (categoryIds) => {
    const result = await categoriesVM.reorderCategories(categoryIds);
    if (!result.success) {
      toast({
        variant: 'destructive',
        title: 'Erro ao reordenar',
        description: result.error,
      });
    }
  };

  // ============= PRODUTOS =============

  const handleCreateProduct = async (data) => {
    const result = await productsVM.createProduct(data);
    if (result.success) {
      toast({
        title: 'Produto criado',
        description: `O produto "${data.name}" foi criado com sucesso.`,
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao criar produto',
        description: result.error,
      });
    }
    return result;
  };

  const handleUpdateProduct = async (id, data) => {
    const result = await productsVM.updateProduct(id, data);
    if (result.success) {
      toast({
        title: 'Produto atualizado',
        description: 'O produto foi atualizado com sucesso.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao atualizar produto',
        description: result.error,
      });
    }
    return result;
  };

  const handleDeleteProduct = async (id) => {
    const result = await productsVM.deleteProduct(id);
    if (result.success) {
      toast({
        title: 'Produto removido',
        description: 'O produto foi removido com sucesso.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao remover produto',
        description: result.error,
      });
    }
    return result;
  };

  // ============= VARIAÇÕES =============

  const handleCreateVariation = async (productId, data) => {
    const result = await productsVM.createVariation(productId, data);
    if (result.success) {
      toast({
        title: 'Variação criada',
        description: `A variação "${data.name}" foi criada com sucesso.`,
      });
      // Recarrega o produto atualizado
      const updatedProduct = await productsVM.getProductById(productId);
      return updatedProduct;
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao criar variação',
        description: result.error,
      });
    }
    return result;
  };

  const handleUpdateVariation = async (productId, variationId, data) => {
    const result = await productsVM.updateVariation(productId, variationId, data);
    if (result.success) {
      toast({
        title: 'Variação atualizada',
        description: 'A variação foi atualizada com sucesso.',
      });
      // Recarrega o produto atualizado
      const updatedProduct = await productsVM.getProductById(productId);
      return updatedProduct;
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao atualizar variação',
        description: result.error,
      });
    }
    return result;
  };

  const handleDeleteVariation = async (productId, variationId) => {
    const result = await productsVM.deleteVariation(productId, variationId);
    if (result.success) {
      toast({
        title: 'Variação removida',
        description: 'A variação foi removida com sucesso.',
      });
      // Recarrega o produto atualizado
      const updatedProduct = await productsVM.getProductById(productId);
      return updatedProduct;
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao remover variação',
        description: result.error,
      });
    }
    return result;
  };

  // ============= IMAGENS =============

  const handleGetProductImages = async (productId) => {
    return await productsVM.getProductImages(productId);
  };

  const handleAddProductImage = async (productId, imageFile) => {
    const result = await productsVM.addProductImage(productId, imageFile);
    if (result.success) {
      toast({
        title: 'Imagem adicionada',
        description: 'A imagem foi adicionada com sucesso.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao adicionar imagem',
        description: result.error,
      });
    }
    return result;
  };

  const handleDeleteProductImage = async (productId, imageId, imageUrl) => {
    const result = await productsVM.deleteProductImage(productId, imageId, imageUrl);
    if (result.success) {
      toast({
        title: 'Imagem removida',
        description: 'A imagem foi removida com sucesso.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao remover imagem',
        description: result.error,
      });
    }
    return result;
  };

  const handleReorderProductImages = async (productId, imageIds, newImagesOrder) => {
    const result = await productsVM.reorderProductImages(productId, imageIds, newImagesOrder);
    if (!result.success) {
      toast({
        variant: 'destructive',
        title: 'Erro ao reordenar imagens',
        description: result.error,
      });
    }
    return result;
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold">Loja</h1>

      <StoreSection
        categories={categoriesVM.categories}
        selectedCategory={categoriesVM.selectedCategory}
        onSelectCategory={categoriesVM.selectCategory}
        products={productsVM.products}
        loading={categoriesVM.isLoading}
        loadingProducts={productsVM.isLoading}
        creating={categoriesVM.isCreating || productsVM.isCreating}
        onCreateCategory={handleCreateCategory}
        onUpdateCategory={handleUpdateCategory}
        onDeleteCategory={handleDeleteCategory}
        onReorderCategories={handleReorderCategories}
        onCreateProduct={handleCreateProduct}
        onUpdateProduct={handleUpdateProduct}
        onDeleteProduct={handleDeleteProduct}
        onGetProductImages={handleGetProductImages}
        onAddProductImage={handleAddProductImage}
        onDeleteProductImage={handleDeleteProductImage}
        onReorderProductImages={handleReorderProductImages}
        onCreateVariation={handleCreateVariation}
        onUpdateVariation={handleUpdateVariation}
        onDeleteVariation={handleDeleteVariation}
      />
    </div>
  );
}
