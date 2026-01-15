import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Plus, Pencil, Trash2, X } from 'lucide-react';
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

export function ProductVariationsModal({ 
  open, 
  onClose, 
  product, 
  variations,
  onCreateVariation,
  onUpdateVariation,
  onDeleteVariation,
  loading 
}) {
  const [editingVariation, setEditingVariation] = useState(null);
  const [deleteVariation, setDeleteVariation] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    additionalPrice: '',
    stockQuantity: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!open) {
      resetForm();
    }
  }, [open]);

  const resetForm = () => {
    setFormData({
      name: '',
      additionalPrice: '',
      stockQuantity: ''
    });
    setEditingVariation(null);
    setErrors({});
  };

  const handleEdit = (variation) => {
    setEditingVariation(variation);
    setFormData({
      name: variation.name || '',
      additionalPrice: variation.additionalPrice?.toString() || '0',
      stockQuantity: variation.stockQuantity?.toString() || '0'
    });
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    
    // Valida additionalPrice apenas se não estiver vazio
    if (formData.additionalPrice !== '' && formData.additionalPrice !== null) {
      if (isNaN(parseFloat(formData.additionalPrice))) {
        newErrors.additionalPrice = 'Preço adicional inválido';
      } else if (parseFloat(formData.additionalPrice) < 0) {
        newErrors.additionalPrice = 'Preço adicional deve ser zero ou positivo';
      }
    }
    
    // Valida stockQuantity apenas se não estiver vazio
    if (formData.stockQuantity !== '' && formData.stockQuantity !== null) {
      if (isNaN(parseInt(formData.stockQuantity)) || parseInt(formData.stockQuantity) < 0) {
        newErrors.stockQuantity = 'Quantidade em estoque não pode ser negativa';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const data = {
      name: formData.name.trim(),
      additionalPrice: formData.additionalPrice === '' || formData.additionalPrice === null 
        ? 0 
        : parseFloat(formData.additionalPrice)
    };
    
    // Só adiciona stockQuantity se foi especificado
    if (formData.stockQuantity !== '' && formData.stockQuantity !== null) {
      data.stockQuantity = parseInt(formData.stockQuantity);
    }

    let result;
    if (editingVariation) {
      result = await onUpdateVariation(product.id, editingVariation.id, data);
    } else {
      result = await onCreateVariation(product.id, data);
    }

    if (result.success) {
      resetForm();
    }
  };

  const handleDeleteConfirm = async () => {
    if (deleteVariation) {
      const result = await onDeleteVariation(product.id, deleteVariation.id);
      if (result.success) {
        setDeleteVariation(null);
      }
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const calculateFinalPrice = (basePrice, adjustment) => {
    return basePrice + adjustment;
  };

  if (!product) return null;

  return (
    <>
      <Dialog open={open} onOpenChange={(open) => !open && !loading && onClose()}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Variações - {product.name}</DialogTitle>
            <p className="text-sm text-muted-foreground">
              Preço Base: {formatPrice(product.price)}
            </p>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Formulário de Criação/Edição */}
            <form onSubmit={handleSubmit} className="border rounded-lg p-4 space-y-4 bg-muted/50">
              <h3 className="font-semibold">
                {editingVariation ? 'Editar Variação' : 'Nova Variação'}
              </h3>

              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Ex: Tamanho M, Cor Azul"
                    className={errors.name ? 'border-destructive' : ''}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="additionalPrice">Preço Adicional (R$)</Label>
                    <Input
                      id="additionalPrice"
                      type="number"
                      step="0.01"
                      min="0"
                      value={formData.additionalPrice}
                      onChange={(e) => handleChange('additionalPrice', e.target.value)}
                      placeholder="0.00"
                      className={errors.additionalPrice ? 'border-destructive' : ''}
                    />
                    {errors.additionalPrice && (
                      <p className="text-sm text-destructive">{errors.additionalPrice}</p>
                    )}
                    {formData.additionalPrice && !errors.additionalPrice && (
                      <p className="text-xs text-muted-foreground">
                        Preço Final: {formatPrice(calculateFinalPrice(product.price, parseFloat(formData.additionalPrice) || 0))}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="stockQuantity">Quantidade em Estoque</Label>
                    <Input
                      id="stockQuantity"
                      type="number"
                      min="0"
                      value={formData.stockQuantity}
                      onChange={(e) => handleChange('stockQuantity', e.target.value)}
                      placeholder="0"
                      className={errors.stockQuantity ? 'border-destructive' : ''}
                      disabled={!product.manageStock}
                    />
                    {!product.manageStock && (
                      <p className="text-xs text-muted-foreground">
                        Este produto não gerencia estoque
                      </p>
                    )}
                    {errors.stockQuantity && (
                      <p className="text-sm text-destructive">{errors.stockQuantity}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                {editingVariation && (
                  <Button type="button" variant="outline" onClick={resetForm}>
                    <X className="h-4 w-4 mr-2" />
                    Cancelar
                  </Button>
                )}
                <Button type="submit" disabled={loading}>
                  {editingVariation ? (
                    <>
                      <Pencil className="h-4 w-4 mr-2" />
                      Atualizar
                    </>
                  ) : (
                    <>
                      <Plus className="h-4 w-4 mr-2" />
                      Adicionar
                    </>
                  )}
                </Button>
              </div>
            </form>

            {/* Lista de Variações */}
            <div className="space-y-2">
              <h3 className="font-semibold">Variações Existentes ({variations.length})</h3>
              
              {variations.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <p>Nenhuma variação cadastrada</p>
                  <p className="text-sm">Adicione variações para este produto acima</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {variations.map((variation) => (
                    <div
                      key={variation.id}
                      className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{variation.name}</span>
                          {variation.stockQuantity !== null && variation.stockQuantity !== undefined && variation.stockQuantity === 0 && (
                            <Badge variant="destructive">Sem estoque</Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>
                            Preço: {formatPrice(calculateFinalPrice(product.price, variation.additionalPrice))}
                          </span>
                          {variation.additionalPrice !== 0 && (
                            <span className={variation.additionalPrice > 0 ? 'text-green-600' : 'text-red-600'}>
                              ({variation.additionalPrice > 0 ? '+' : ''}{formatPrice(variation.additionalPrice)})
                            </span>
                          )}
                          {variation.stockQuantity !== null && variation.stockQuantity !== undefined && (
                            <span>Estoque: {variation.stockQuantity}</span>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(variation)}
                          disabled={loading}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setDeleteVariation(variation)}
                          disabled={loading}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t">
            <Button variant="outline" onClick={onClose} disabled={loading}>
              Fechar
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteVariation} onOpenChange={() => setDeleteVariation(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir a variação "{deleteVariation?.name}"?
              Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={loading}>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteConfirm} disabled={loading}>
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
