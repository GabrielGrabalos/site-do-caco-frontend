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
import { Textarea } from '@/components/ui/textarea';
import { Plus, X, Loader2, Image as ImageIcon } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { ScrollArea } from '@/components/ui/scroll-area';

export function StoreProductDialog({
  open,
  product,
  categories,
  onSave,
  onCancel,
  onManageVariations,
}) {
  const [formData, setFormData] = React.useState({
    name: '',
    slug: '',
    description: '',
    price: '',
    originalPrice: '',
    categoryId: '',
    manageStock: false,
    stockQuantity: 0,
    active: true,
    images: [],
  });
  const [imageUrl, setImageUrl] = React.useState('');
  const [errors, setErrors] = React.useState({});
  const [saving, setSaving] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      if (product) {
        setFormData({
          name: product.name,
          slug: product.slug,
          description: product.description,
          price: product.price.toString(),
          originalPrice: product.originalPrice ? product.originalPrice.toString() : '',
          categoryId: product.categoryId,
          manageStock: product.manageStock,
          stockQuantity: product.stockQuantity || 0,
          active: product.active,
          images: product.images || [],
        });
      } else {
        setFormData({
          name: '',
          slug: '',
          description: '',
          price: '',
          originalPrice: '',
          categoryId: categories.length > 0 ? categories[0].id : '',
          manageStock: false,
          stockQuantity: 0,
          active: true,
          images: [],
        });
      }
      setImageUrl('');
      setErrors({});
    }
  }, [open, product, categories]);

  const handleNameChange = (value) => {
    setFormData(prev => ({ ...prev, name: value }));
    // Auto-gera slug se for novo produto
    if (!product) {
      const generatedSlug = value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      setFormData(prev => ({ ...prev, slug: generatedSlug }));
    }
  };

  const handleAddImage = () => {
    if (imageUrl.trim()) {
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, imageUrl.trim()],
      }));
      setImageUrl('');
    }
  };

  const handleRemoveImage = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    if (!formData.slug.trim()) {
      newErrors.slug = 'Slug é obrigatório';
    } else if (!/^[a-z0-9-]+$/.test(formData.slug)) {
      newErrors.slug = 'Slug deve conter apenas letras minúsculas, números e hífens';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Descrição é obrigatória';
    }
    if (!formData.price || parseFloat(formData.price) <= 0) {
      newErrors.price = 'Preço deve ser maior que zero';
    }
    if (formData.originalPrice && parseFloat(formData.originalPrice) <= parseFloat(formData.price)) {
      newErrors.originalPrice = 'Preço original deve ser maior que o preço atual';
    }
    if (!formData.categoryId) {
      newErrors.categoryId = 'Categoria é obrigatória';
    }
    if (formData.manageStock && formData.stockQuantity < 0) {
      newErrors.stockQuantity = 'Quantidade não pode ser negativa';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (validate()) {
      setSaving(true);
      try {
        const data = {
          name: formData.name.trim(),
          slug: formData.slug.trim(),
          description: formData.description.trim(),
          price: parseFloat(formData.price),
          originalPrice: formData.originalPrice ? parseFloat(formData.originalPrice) : null,
          categoryId: formData.categoryId,
          manageStock: formData.manageStock,
          stockQuantity: formData.manageStock ? parseInt(formData.stockQuantity) : 0,
          active: formData.active,
          images: formData.images,
        };
        await onSave(data);
      } finally {
        setSaving(false);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={(open) => !open && !saving && onCancel()}>
      <DialogContent className="max-w-3xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>
            {product ? 'Editar Produto' : 'Novo Produto'}
          </DialogTitle>
          <DialogDescription>
            {product
              ? 'Atualize as informações do produto.'
              : 'Preencha as informações para criar um novo produto.'}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[calc(90vh-200px)] pr-4">
          <div className="space-y-4 py-4">
            {/* Nome e Slug */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  placeholder="Ex: Camiseta CACo"
                  className={errors.name ? 'border-destructive' : ''}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">Slug (URL) *</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value.toLowerCase() }))}
                  placeholder="Ex: camiseta-caco"
                  className={errors.slug ? 'border-destructive' : ''}
                />
                {errors.slug && (
                  <p className="text-sm text-destructive">{errors.slug}</p>
                )}
              </div>
            </div>

            {/* Descrição */}
            <div className="space-y-2">
              <Label htmlFor="description">Descrição *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Descreva o produto..."
                rows={4}
                className={errors.description ? 'border-destructive' : ''}
              />
              {errors.description && (
                <p className="text-sm text-destructive">{errors.description}</p>
              )}
            </div>

            {/* Preços e Categoria */}
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Preço (R$) *</Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  min="0"
                  value={formData.price}
                  onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                  placeholder="0.00"
                  className={errors.price ? 'border-destructive' : ''}
                />
                {errors.price && (
                  <p className="text-sm text-destructive">{errors.price}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="originalPrice">Preço Original (R$)</Label>
                <Input
                  id="originalPrice"
                  type="number"
                  step="0.01"
                  min="0"
                  value={formData.originalPrice}
                  onChange={(e) => setFormData(prev => ({ ...prev, originalPrice: e.target.value }))}
                  placeholder="0.00"
                  className={errors.originalPrice ? 'border-destructive' : ''}
                />
                {errors.originalPrice && (
                  <p className="text-sm text-destructive">{errors.originalPrice}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="categoryId">Categoria *</Label>
                <select
                  id="categoryId"
                  value={formData.categoryId}
                  onChange={(e) => setFormData(prev => ({ ...prev, categoryId: e.target.value }))}
                  className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${errors.categoryId ? 'border-destructive' : ''}`}
                >
                  <option value="">Selecione...</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
                {errors.categoryId && (
                  <p className="text-sm text-destructive">{errors.categoryId}</p>
                )}
              </div>
            </div>

            {/* Estoque */}
            <div className="space-y-3 border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="manageStock">Gerenciar Estoque</Label>
                  <p className="text-sm text-muted-foreground">
                    Controlar quantidade disponível
                  </p>
                </div>
                <Switch
                  id="manageStock"
                  checked={formData.manageStock}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, manageStock: checked }))}
                />
              </div>

              {formData.manageStock && (
                <div className="space-y-2">
                  <Label htmlFor="stockQuantity">Quantidade em Estoque</Label>
                  <Input
                    id="stockQuantity"
                    type="number"
                    min="0"
                    value={formData.stockQuantity}
                    onChange={(e) => setFormData(prev => ({ ...prev, stockQuantity: e.target.value }))}
                    className={errors.stockQuantity ? 'border-destructive' : ''}
                  />
                  {errors.stockQuantity && (
                    <p className="text-sm text-destructive">{errors.stockQuantity}</p>
                  )}
                </div>
              )}
            </div>

            {/* Status Ativo */}
            <div className="flex items-center justify-between border rounded-lg p-4">
              <div>
                <Label htmlFor="active">Produto Ativo</Label>
                <p className="text-sm text-muted-foreground">
                  Produto visível na loja
                </p>
              </div>
              <Switch
                id="active"
                checked={formData.active}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, active: checked }))}
              />
            </div>

            {/* Imagens */}
            <div className="space-y-3 border rounded-lg p-4">
              <Label>Imagens do Produto</Label>
              
              <div className="flex gap-2">
                <Input
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="Cole a URL da imagem"
                  onKeyPress={(e) => e.key === 'Enter' && handleAddImage()}
                />
                <Button type="button" onClick={handleAddImage} size="sm">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {formData.images.length > 0 && (
                <div className="grid grid-cols-4 gap-2">
                  {formData.images.map((img, index) => (
                    <div key={index} className="relative aspect-square border rounded-lg overflow-hidden group">
                      <img
                        src={img}
                        alt={`Produto ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(index)}
                        className="absolute top-1 right-1 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-3 w-3" />
                      </button>
                      {index === 0 && (
                        <div className="absolute bottom-1 left-1 bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded">
                          Capa
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Variações (apenas para produtos existentes) */}
            {product && (
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <Label>Variações do Produto</Label>
                    <p className="text-sm text-muted-foreground">
                      {product.variations?.length || 0} variação(ões) cadastrada(s)
                    </p>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => onManageVariations(product)}
                  >
                    Gerenciar Variações
                  </Button>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="flex justify-end gap-2 pt-4 border-t">
          <Button variant="outline" onClick={onCancel} disabled={saving}>
            Cancelar
          </Button>
          <Button onClick={handleSave} disabled={saving}>
            {saving ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Salvando...
              </>
            ) : (
              product ? 'Salvar' : 'Criar'
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
