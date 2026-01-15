import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StoreCategoryTabs } from './StoreCategoryTabs';
import { ProductList } from './ProductList';
import { CreateCategoryModal } from './CreateCategoryModal';
import { CreateProductModal } from './CreateProductModal';
import { ProductVariationsModal } from './ProductVariationsModal';
import { ManageProductImagesModal } from './ManageProductImagesModal';

export function StoreSection({
  categories,
  selectedCategory,
  onSelectCategory,
  products,
  loading,
  loadingProducts,
  creating,
  onCreateCategory,
  onUpdateCategory,
  onDeleteCategory,
  onReorderCategories,
  onCreateProduct,
  onUpdateProduct,
  onDeleteProduct,
  onGetProductImages,
  onAddProductImage,
  onDeleteProductImage,
  onReorderProductImages,
  onCreateVariation,
  onUpdateVariation,
  onDeleteVariation,
}) {
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [productModalOpen, setProductModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [variationsDialogOpen, setVariationsDialogOpen] = useState(false);
  const [variationsProduct, setVariationsProduct] = useState(null);
  const [imagesModalOpen, setImagesModalOpen] = useState(false);
  const [imagesProduct, setImagesProduct] = useState(null);

  const handleEditCategory = (category) => {
    setEditingCategory(category);
    setCategoryModalOpen(true);
  };

  const handleCloseCategoryModal = () => {
    setCategoryModalOpen(false);
    setEditingCategory(null);
  };

  const handleSaveCategory = async (data) => {
    let result;
    if (editingCategory) {
      result = await onUpdateCategory(editingCategory.id, data);
    } else {
      result = await onCreateCategory(data);
    }
    if (result.success) {
      handleCloseCategoryModal();
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setProductModalOpen(true);
  };

  const handleCloseProductModal = () => {
    setProductModalOpen(false);
    setEditingProduct(null);
  };

  const handleSaveProduct = async (data, imageFiles, onProgress) => {
    let result;
    if (editingProduct) {
      result = await onUpdateProduct(editingProduct.id, data);
    } else {
      result = await onCreateProduct(data, imageFiles, onProgress);
    }
    if (result.success) {
      handleCloseProductModal();
    }
  };

  const handleManageVariations = (product) => {
    setVariationsProduct(product);
    setVariationsDialogOpen(true);
  };

  const handleCloseVariationsDialog = () => {
    setVariationsDialogOpen(false);
    setVariationsProduct(null);
  };

  const handleManageImages = (product) => {
    setImagesProduct(product);
    setImagesModalOpen(true);
  };

  const handleCloseImagesModal = () => {
    setImagesModalOpen(false);
    setImagesProduct(null);
  };

  // Filtra produtos da categoria selecionada
  const filteredProducts = selectedCategory
    ? products.filter((p) => p.categoryId === selectedCategory.id)
    : [];

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">Loja</CardTitle>
          <p className="text-xs md:text-sm text-muted-foreground">
            Gerencie as categorias e adicione produtos por categoria.
          </p>
        </CardHeader>
        <CardContent>
          <StoreCategoryTabs
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={onSelectCategory}
            onAddCategory={() => setCategoryModalOpen(true)}
            onEditCategory={handleEditCategory}
            onDeleteCategory={onDeleteCategory}
            onReorderCategories={onReorderCategories}
          />

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
            </div>
          ) : (
            <ProductList
              products={filteredProducts}
              loading={loadingProducts}
              onAddProduct={() => setProductModalOpen(true)}
              onDeleteProduct={onDeleteProduct}
              onEditProduct={handleEditProduct}
              onManageVariations={handleManageVariations}
              onManageImages={handleManageImages}
              selectedCategory={selectedCategory}
            />
          )}
        </CardContent>
      </Card>

      <CreateCategoryModal
        open={categoryModalOpen}
        onClose={handleCloseCategoryModal}
        onSave={handleSaveCategory}
        loading={creating}
        category={editingCategory}
      />

      <CreateProductModal
        open={productModalOpen}
        onClose={handleCloseProductModal}
        onSave={handleSaveProduct}
        loading={creating}
        product={editingProduct}
        categoryId={selectedCategory?.id}
      />

      <ProductVariationsModal
        open={variationsDialogOpen}
        product={variationsProduct}
        variations={variationsProduct ? products.find(p => p.id === variationsProduct.id)?.variations || [] : []}
        onClose={handleCloseVariationsDialog}
        onCreateVariation={onCreateVariation}
        onUpdateVariation={onUpdateVariation}
        onDeleteVariation={onDeleteVariation}
        loading={creating}
      />

      <ManageProductImagesModal
        open={imagesModalOpen}
        onClose={handleCloseImagesModal}
        product={imagesProduct}
        onGetImages={onGetProductImages}
        onAddImage={onAddProductImage}
        onDeleteImage={onDeleteProductImage}
        onReorderImages={onReorderProductImages}
        loading={creating}
      />
    </>
  );
}
