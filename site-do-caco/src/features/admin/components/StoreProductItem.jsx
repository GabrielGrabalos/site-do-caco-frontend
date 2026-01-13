import React from 'react';
import { Pencil, Trash2, Tag, DollarSign, Package, ImageIcon, Images } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export function StoreProductItem({ product, onEdit, onDelete, onManageVariations, onManageImages }) {
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);

  const handleDelete = async () => {
    const result = await onDelete(product.id);
    if (result.success) {
      setDeleteDialogOpen(false);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const coverImage = product.images && product.images.length > 0 
    ? product.images[0] 
    : null;

  return (
    <>
      <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow bg-card">
        {/* Imagem do Produto */}
        <div className="aspect-[4/3] bg-muted relative">
          {coverImage ? (
            <img
              src={coverImage}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <ImageIcon className="h-10 w-10 text-muted-foreground/30" />
            </div>
          )}
          
          {/* Badges de Status */}
          <div className="absolute top-2 right-2 flex gap-1">
            {!product.active && (
              <Badge variant="secondary" className="bg-muted text-xs px-2 py-0.5">
                Inativo
              </Badge>
            )}
            {product.manageStock && product.stockQuantity === 0 && (
              <Badge variant="destructive" className="text-xs px-2 py-0.5">
                Sem estoque
              </Badge>
            )}
          </div>

          {/* Indicator de múltiplas imagens */}
          {product.images && product.images.length > 1 && (
            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded flex items-center gap-1">
              <Images className="h-3 w-3" />
              {product.images.length}
            </div>
          )}
        </div>

        {/* Informações do Produto */}
        <div className="p-3 space-y-2">
          <div>
            <h3 className="font-semibold text-sm line-clamp-1">
              {product.name}
            </h3>
            <p className="text-xs text-muted-foreground line-clamp-1">
              {product.categoryName}
            </p>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold">{formatPrice(product.price)}</span>
            <div className="flex items-center gap-2 text-muted-foreground">
              {product.manageStock && (
                <div className="flex items-center gap-1">
                  <Package className="h-3 w-3" />
                  <span>{product.stockQuantity}</span>
                </div>
              )}
              {product.variations && product.variations.length > 0 && (
                <div className="flex items-center gap-1">
                  <Tag className="h-3 w-3" />
                  <span>{product.variations.length}</span>
                </div>
              )}
            </div>
          </div>

          {/* Ações */}
          <div className="flex gap-1 pt-1">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onEdit(product)}
              className="flex-1 h-7 text-xs"
              title="Editar produto"
            >
              <Pencil className="h-3 w-3" />
            </Button>
            {onManageImages && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => onManageImages(product)}
                className="flex-1 h-7 text-xs"
                title="Gerenciar imagens"
              >
                <Images className="h-3 w-3" />
              </Button>
            )}
            {onManageVariations && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => onManageVariations(product)}
                className="flex-1 h-7 text-xs"
                title="Gerenciar variações"
              >
                <Tag className="h-3 w-3" />
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setDeleteDialogOpen(true)}
              className="text-destructive hover:text-destructive h-7 text-xs"
              title="Excluir produto"
            >
              <Trash2 className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir o produto "{product.name}"? 
              Esta ação não pode ser desfeita e todas as variações também serão removidas.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
