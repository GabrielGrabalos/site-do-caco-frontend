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
    value: '',
    priceAdjustment: '',
    stock: ''
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
      value: '',
      priceAdjustment: '',
      stock: ''
    });
    setEditingVariation(null);
    setErrors({});
  };

  const handleEdit = (variation) => {
    setEditingVariation(variation);
    setFormData({
      name: variation.name || '',
      value: variation.value || '',
      priceAdjustment: variation.priceAdjustment?.toString() || '0',
      stock: variation.stock?.toString() || ''
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
      newErrors.name = 'Nome da variação é obrigatório';
    }
    
    if (!formData.value.trim()) {
      newErrors.value = 'Valor é obrigatório';
    }
    
    if (formData.priceAdjustment === '' || isNaN(parseFloat(formData.priceAdjustment))) {
      newErrors.priceAdjustment = 'Ajuste de preço inválido';
    }
    
    if (!formData.stock || parseInt(formData.stock) < 0) {
      newErrors.stock = 'Estoque inválido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const data = {
      name: formData.name.trim(),
      value: formData.value.trim(),
      priceAdjustment: parseFloat(formData.priceAdjustment),
      stock: parseInt(formData.stock)
    };

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
              Preço Base: {formatPrice(product.basePrice)}
            </p>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Formulário de Criação/Edição */}
            <form onSubmit={handleSubmit} className="border rounded-lg p-4 space-y-4 bg-muted/50">
              <h3 className="font-semibold">
                {editingVariation ? 'Editar Variação' : 'Nova Variação'}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome da Variação *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Ex: Tamanho"
                    className={errors.name ? 'border-destructive' : ''}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="value">Valor *</Label>
                  <Input
                    id="value"
                    value={formData.value}
                    onChange={(e) => handleChange('value', e.target.value)}
                    placeholder="Ex: M, G, GG"
                    className={errors.value ? 'border-destructive' : ''}
                  />
                  {errors.value && (
                    <p className="text-sm text-destructive">{errors.value}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="priceAdjustment">Ajuste de Preço (R$) *</Label>
                  <Input
                    id="priceAdjustment"
                    type="number"
                    step="0.01"
                    value={formData.priceAdjustment}
                    onChange={(e) => handleChange('priceAdjustment', e.target.value)}
                    placeholder="0.00"
                    className={errors.priceAdjustment ? 'border-destructive' : ''}
                  />
                  {errors.priceAdjustment && (
                    <p className="text-sm text-destructive">{errors.priceAdjustment}</p>
                  )}
                  {formData.priceAdjustment && !errors.priceAdjustment && (
                    <p className="text-xs text-muted-foreground">
                      Preço Final: {formatPrice(calculateFinalPrice(product.basePrice, parseFloat(formData.priceAdjustment) || 0))}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="stock">Estoque *</Label>
                  <Input
                    id="stock"
                    type="number"
                    min="0"
                    value={formData.stock}
                    onChange={(e) => handleChange('stock', e.target.value)}
                    placeholder="0"
                    className={errors.stock ? 'border-destructive' : ''}
                  />
                  {errors.stock && (
                    <p className="text-sm text-destructive">{errors.stock}</p>
                  )}
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
                          <span className="font-medium">{variation.name}:</span>
                          <Badge variant="secondary">{variation.value}</Badge>
                          {variation.stock === 0 && (
                            <Badge variant="destructive">Sem estoque</Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>
                            Preço: {formatPrice(calculateFinalPrice(product.basePrice, variation.priceAdjustment))}
                          </span>
                          {variation.priceAdjustment !== 0 && (
                            <span className={variation.priceAdjustment > 0 ? 'text-green-600' : 'text-red-600'}>
                              ({variation.priceAdjustment > 0 ? '+' : ''}{formatPrice(variation.priceAdjustment)})
                            </span>
                          )}
                          <span>Estoque: {variation.stock}</span>
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
              Tem certeza que deseja excluir a variação "{deleteVariation?.name}: {deleteVariation?.value}"?
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
