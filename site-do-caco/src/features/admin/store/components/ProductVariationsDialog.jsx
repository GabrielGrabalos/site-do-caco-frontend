import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, Trash2, Pencil, X, Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function ProductVariationsDialog({
  open,
  product,
  onClose,
  onCreateVariation,
  onUpdateVariation,
  onDeleteVariation,
}) {
  const [variations, setVariations] = React.useState([]);
  const [editingId, setEditingId] = React.useState(null);
  const [formData, setFormData] = React.useState({
    name: '',
    additionalPrice: '',
    stockQuantity: '',
  });
  const [isCreating, setIsCreating] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  React.useEffect(() => {
    if (open && product) {
      setVariations(product.variations || []);
      setIsCreating(false);
      setEditingId(null);
      resetForm();
    }
  }, [open, product]);

  const resetForm = () => {
    setFormData({
      name: '',
      additionalPrice: '',
      stockQuantity: '',
    });
    setErrors({});
  };

  const startCreate = () => {
    setIsCreating(true);
    setEditingId(null);
    resetForm();
  };

  const startEdit = (variation) => {
    setEditingId(variation.id);
    setIsCreating(false);
    setFormData({
      name: variation.name,
      additionalPrice: variation.additionalPrice.toString(),
      stockQuantity: variation.stockQuantity?.toString() || '0',
    });
    setErrors({});
  };

  const cancelEdit = () => {
    setEditingId(null);
    setIsCreating(false);
    resetForm();
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    if (formData.additionalPrice === '' || isNaN(parseFloat(formData.additionalPrice))) {
      newErrors.additionalPrice = 'Preço adicional é obrigatório';
    }
    if (formData.stockQuantity === '' || isNaN(parseInt(formData.stockQuantity)) || parseInt(formData.stockQuantity) < 0) {
      newErrors.stockQuantity = 'Quantidade inválida';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validate()) return;

    const data = {
      name: formData.name.trim(),
      additionalPrice: parseFloat(formData.additionalPrice),
      stockQuantity: parseInt(formData.stockQuantity),
    };

    let result;
    if (editingId) {
      result = await onUpdateVariation(product.id, editingId, data);
    } else {
      result = await onCreateVariation(product.id, data);
    }

    if (result.success) {
      if (editingId) {
        setVariations(prev =>
          prev.map(v => (v.id === editingId ? result.data : v))
        );
      } else {
        setVariations(prev => [...prev, result.data]);
      }
      cancelEdit();
    }
  };

  const handleDelete = async (variationId) => {
    const result = await onDeleteVariation(product.id, variationId);
    if (result.success) {
      setVariations(prev => prev.filter(v => v.id !== variationId));
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Gerenciar Variações</DialogTitle>
          <DialogDescription>
            Produto: {product.name}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Lista de Variações */}
          <div className="space-y-2">
            {variations.map((variation) => (
              <div
                key={variation.id}
                className="flex items-center gap-3 p-3 border rounded-lg bg-card"
              >
                {editingId === variation.id ? (
                  // Modo de Edição
                  <div className="flex-1 space-y-3">
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <Label className="text-xs">Nome</Label>
                        <Input
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Ex: Tamanho M"
                          className={errors.name ? 'border-destructive' : ''}
                        />
                        {errors.name && (
                          <p className="text-xs text-destructive mt-1">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <Label className="text-xs">Preço Adicional (R$)</Label>
                        <Input
                          type="number"
                          step="0.01"
                          value={formData.additionalPrice}
                          onChange={(e) => setFormData(prev => ({ ...prev, additionalPrice: e.target.value }))}
                          placeholder="0.00"
                          className={errors.additionalPrice ? 'border-destructive' : ''}
                        />
                        {errors.additionalPrice && (
                          <p className="text-xs text-destructive mt-1">{errors.additionalPrice}</p>
                        )}
                      </div>
                      <div>
                        <Label className="text-xs">Estoque</Label>
                        <Input
                          type="number"
                          min="0"
                          value={formData.stockQuantity}
                          onChange={(e) => setFormData(prev => ({ ...prev, stockQuantity: e.target.value }))}
                          placeholder="0"
                          className={errors.stockQuantity ? 'border-destructive' : ''}
                        />
                        {errors.stockQuantity && (
                          <p className="text-xs text-destructive mt-1">{errors.stockQuantity}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" onClick={handleSave}>
                        <Check className="h-4 w-4 mr-1" />
                        Salvar
                      </Button>
                      <Button size="sm" variant="outline" onClick={cancelEdit}>
                        <X className="h-4 w-4 mr-1" />
                        Cancelar
                      </Button>
                    </div>
                  </div>
                ) : (
                  // Modo de Visualização
                  <>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{variation.name}</h4>
                        {!variation.available && (
                          <Badge variant="secondary">Indisponível</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <span>+ {formatPrice(variation.additionalPrice)}</span>
                        {product.manageStock && (
                          <span>Estoque: {variation.stockQuantity || 0}</span>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => startEdit(variation)}
                        className="h-8 w-8"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(variation.id)}
                        className="h-8 w-8 text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </>
                )}
              </div>
            ))}

            {variations.length === 0 && !isCreating && (
              <div className="text-center py-8 text-muted-foreground">
                Nenhuma variação cadastrada
              </div>
            )}
          </div>

          {/* Formulário de Nova Variação */}
          {isCreating && (
            <div className="border rounded-lg p-4 bg-muted/50 space-y-3">
              <h4 className="font-medium text-sm">Nova Variação</h4>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <Label className="text-xs">Nome *</Label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Ex: Tamanho M"
                    className={errors.name ? 'border-destructive' : ''}
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <Label className="text-xs">Preço Adicional (R$) *</Label>
                  <Input
                    type="number"
                    step="0.01"
                    value={formData.additionalPrice}
                    onChange={(e) => setFormData(prev => ({ ...prev, additionalPrice: e.target.value }))}
                    placeholder="0.00"
                    className={errors.additionalPrice ? 'border-destructive' : ''}
                  />
                  {errors.additionalPrice && (
                    <p className="text-xs text-destructive mt-1">{errors.additionalPrice}</p>
                  )}
                </div>
                <div>
                  <Label className="text-xs">Estoque *</Label>
                  <Input
                    type="number"
                    min="0"
                    value={formData.stockQuantity}
                    onChange={(e) => setFormData(prev => ({ ...prev, stockQuantity: e.target.value }))}
                    placeholder="0"
                    className={errors.stockQuantity ? 'border-destructive' : ''}
                  />
                  {errors.stockQuantity && (
                    <p className="text-xs text-destructive mt-1">{errors.stockQuantity}</p>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" onClick={handleSave}>
                  <Check className="h-4 w-4 mr-1" />
                  Criar
                </Button>
                <Button size="sm" variant="outline" onClick={cancelEdit}>
                  <X className="h-4 w-4 mr-1" />
                  Cancelar
                </Button>
              </div>
            </div>
          )}

          {/* Botão Adicionar */}
          {!isCreating && !editingId && (
            <Button variant="outline" onClick={startCreate} className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Variação
            </Button>
          )}
        </div>

        <div className="flex justify-end pt-4 border-t">
          <Button onClick={onClose}>Fechar</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
