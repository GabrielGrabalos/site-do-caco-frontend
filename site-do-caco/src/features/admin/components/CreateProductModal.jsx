import { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { PriceInput } from '@/components/ui/price-input';
import { X, Upload } from 'lucide-react';

export function CreateProductModal({ open, onClose, onSave, loading, product, categoryId }) {
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    price: '',
    originalPrice: '',
    manageStock: true,
    stockQuantity: '',
    active: true
  });
  const [imageFiles, setImageFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [errors, setErrors] = useState({});
  const [uploadProgress, setUploadProgress] = useState({ current: 0, total: 0, uploading: false });
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (open) {
      if (product) {
        setFormData({
          name: product.name || '',
          slug: product.slug || '',
          description: product.description || '',
          price: product.price?.toString() || '',
          originalPrice: product.originalPrice?.toString() || '',
          manageStock: product.manageStock ?? true,
          stockQuantity: product.stockQuantity?.toString() || '',
          active: product.active ?? true
        });
        // Ao editar, não gerencia imagens aqui (use modal separado)
        setExistingImages([]);
        setImageFiles([]);
        setImagePreviews([]);
      } else {
        setFormData({
          name: '',
          slug: '',
          description: '',
          price: '',
          originalPrice: '',
          manageStock: true,
          stockQuantity: '',
          active: true
        });
        setExistingImages([]);
        setImageFiles([]);
        setImagePreviews([]);
      }
      setErrors({});
      setUploadProgress({ current: 0, total: 0, uploading: false });
    }
  }, [open, product]);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }

    // Auto-gera slug quando o nome muda (apenas para novo produto)
    if (field === 'name' && !product) {
      const generatedSlug = value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      setFormData(prev => ({ ...prev, slug: generatedSlug }));
    }
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    // Validar tipo e tamanho
    const validFiles = files.filter(file => {
      if (!file.type.startsWith('image/')) {
        return false;
      }
      if (file.size > 10 * 1024 * 1024) { // 10MB
        return false;
      }
      return true;
    });

    if (validFiles.length !== files.length) {
      setErrors(prev => ({
        ...prev,
        images: 'Alguns arquivos foram ignorados (apenas imagens até 10MB)'
      }));
    }

    // Criar previews e adicionar arquivos
    const newPreviews = validFiles.map(file => URL.createObjectURL(file));
    
    setImageFiles(prev => [...prev, ...validFiles]);
    setImagePreviews(prev => [...prev, ...newPreviews]);
    
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeNewImage = (index) => {
    URL.revokeObjectURL(imagePreviews[index]);
    setImageFiles(prev => prev.filter((_, i) => i !== index));
    setImagePreviews(prev => prev.filter((_, i) => i !== index));
  };

  const removeExistingImage = (imageUrl) => {
    setExistingImages(prev => prev.filter(url => url !== imageUrl));
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
    
    const priceValue = parseFloat(formData.price);
    if (!formData.price || isNaN(priceValue) || priceValue <= 0) {
      newErrors.price = 'Preço deve ser maior que zero';
    }

    if (formData.originalPrice) {
      const originalPriceValue = parseFloat(formData.originalPrice);
      const currentPriceValue = parseFloat(formData.price);
      if (!isNaN(originalPriceValue) && !isNaN(currentPriceValue) && originalPriceValue >= currentPriceValue) {
        newErrors.originalPrice = 'Preço de custo deve ser menor que o preço de venda';
      }
    }
    
    if (formData.manageStock) {
      const stockValue = parseInt(formData.stockQuantity);
      if (!formData.stockQuantity || isNaN(stockValue) || stockValue < 0) {
        newErrors.stockQuantity = 'Estoque inválido';
      }
    }

    // Ao criar novo produto, pelo menos uma imagem é necessária
    if (!product && imageFiles.length === 0) {
      newErrors.images = 'Adicione pelo menos uma imagem';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const priceValue = parseFloat(formData.price);
    const originalPriceValue = formData.originalPrice ? parseFloat(formData.originalPrice) : null;

    if (!categoryId) {
      setErrors({ general: 'Categoria não selecionada' });
      return;
    }

    const data = {
      name: formData.name.trim(),
      slug: formData.slug.trim(),
      description: formData.description.trim(),
      price: priceValue,
      originalPrice: originalPriceValue,
      manageStock: formData.manageStock,
      stockQuantity: formData.manageStock ? parseInt(formData.stockQuantity) : 0,
      active: formData.active,
      categoryId: categoryId
    };

    // Callback de progresso do upload
    const onProgress = (current, total, uploading) => {
      setUploadProgress({ current, total, uploading });
    };

    await onSave(data, imageFiles, onProgress);
  };

  // Cleanup previews on unmount
  useEffect(() => {
    return () => {
      imagePreviews.forEach(url => URL.revokeObjectURL(url));
    };
  }, [imagePreviews]);

  const totalImages = existingImages.length + imageFiles.length;

  return (
    <Dialog open={open} onOpenChange={(open) => !open && !loading && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {product ? 'Editar Produto' : 'Novo Produto'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          {/* Nome */}
          <div className="space-y-2">
            <Label htmlFor="name">Nome *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="Ex: Camiseta CACO 2024"
              className={errors.name ? 'border-destructive' : ''}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name}</p>
            )}
          </div>

          {/* Slug */}
          <div className="space-y-2">
            <Label htmlFor="slug">Slug (URL) *</Label>
            <Input
              id="slug"
              value={formData.slug}
              onChange={(e) => handleChange('slug', e.target.value.toLowerCase())}
              placeholder="Ex: camiseta-caco-2024"
              className={errors.slug ? 'border-destructive' : ''}
            />
            {errors.slug && (
              <p className="text-sm text-destructive">{errors.slug}</p>
            )}
            <p className="text-xs text-muted-foreground">
              Apenas letras minúsculas, números e hífens
            </p>
          </div>

          {/* Descrição */}
          <div className="space-y-2">
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              placeholder="Descrição detalhada do produto..."
              rows={3}
            />
          </div>

          {/* Preço e Preço Original */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Preço (R$) *</Label>
              <PriceInput
                id="price"
                value={formData.price}
                onChange={(value) => handleChange('price', value)}
                placeholder="0,00"
                className={errors.price ? 'border-destructive' : ''}
              />
              {errors.price && (
                <p className="text-sm text-destructive">{errors.price}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="originalPrice">Preço de Custo (R$)</Label>
              <PriceInput
                id="originalPrice"
                value={formData.originalPrice}
                onChange={(value) => handleChange('originalPrice', value)}
                placeholder="0,00"
                className={errors.originalPrice ? 'border-destructive' : ''}
              />
              {errors.originalPrice && (
                <p className="text-sm text-destructive">{errors.originalPrice}</p>
              )}
              <p className="text-xs text-muted-foreground">
                Preço original de compra/produção
              </p>
            </div>
          </div>

          {/* Gerenciar Estoque */}
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="space-y-0.5">
              <Label htmlFor="manageStock" className="cursor-pointer">Gerenciar Estoque</Label>
              <p className="text-xs text-muted-foreground">
                Ative para controlar a quantidade disponível
              </p>
            </div>
            <Switch
              id="manageStock"
              checked={formData.manageStock}
              onCheckedChange={(checked) => handleChange('manageStock', checked)}
            />
          </div>

          {/* Estoque (condicional) */}
          {formData.manageStock && (
            <div className="space-y-2">
              <Label htmlFor="stockQuantity">Quantidade em Estoque *</Label>
              <Input
                id="stockQuantity"
                type="number"
                min="0"
                value={formData.stockQuantity}
                onChange={(e) => handleChange('stockQuantity', e.target.value)}
                placeholder="0"
                className={errors.stockQuantity ? 'border-destructive' : ''}
              />
              {errors.stockQuantity && (
                <p className="text-sm text-destructive">{errors.stockQuantity}</p>
              )}
            </div>
          )}

          {/* Ativo */}
          <div className="flex items-center justify-between">
            <Label htmlFor="active">Produto Ativo</Label>
            <Switch
              id="active"
              checked={formData.active}
              onCheckedChange={(checked) => handleChange('active', checked)}
            />
          </div>

          {/* Imagens - Apenas ao criar produto */}
          {!product && (
            <div className="space-y-2">
              <Label>Imagens * ({imageFiles.length})</Label>

              {/* Novas Imagens */}
              {imagePreviews.length > 0 && (
                <div className="grid grid-cols-4 gap-2 mb-2">
                  {imagePreviews.map((preview, index) => (
                    <div key={`new-${index}`} className="relative group">
                      <img
                        src={preview}
                        alt={`Nova ${index + 1}`}
                        className="w-full h-24 object-cover rounded border border-primary"
                      />
                      <button
                        type="button"
                        onClick={() => removeNewImage(index)}
                        className="absolute top-1 right-1 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Upload Button */}
              <div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileSelect}
                  className="hidden"
                  disabled={loading}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={loading}
                  className="w-full"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Adicionar Imagens
                </Button>
              </div>

              {errors.images && (
                <p className="text-sm text-destructive">{errors.images}</p>
              )}
              <p className="text-xs text-muted-foreground">
                Formatos aceitos: JPG, PNG, WebP. Máximo 10MB por imagem.
              </p>

              {/* Progress bar para upload de imagens */}
              {uploadProgress.uploading && (
                <div className="space-y-2 p-3 bg-muted rounded-lg">
                  <div className="flex justify-between text-sm">
                    <span>Enviando imagens...</span>
                    <span>{uploadProgress.current} de {uploadProgress.total}</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(uploadProgress.current / uploadProgress.total) * 100}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose} disabled={loading}>
              Cancelar
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Salvando...' : product ? 'Salvar' : 'Criar'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
