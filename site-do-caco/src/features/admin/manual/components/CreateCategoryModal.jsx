import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function CreateCategoryModal({ open, onClose, onSubmit, loading, category }) {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (open) {
      if (category) {
        setTitle(category.title);
        setSlug(category.slug);
      } else {
        setTitle('');
        setSlug('');
      }
      setErrors({});
    }
  }, [open, category]);

  const handleTitleChange = (value) => {
    setTitle(value);
    // Auto-gera slug sempre
    const generatedSlug = value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    setSlug(generatedSlug);
  };

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) {
      newErrors.title = 'Nome é obrigatório';
    }
    if (!slug.trim()) {
      newErrors.slug = 'Slug é obrigatório';
    } else if (!/^[a-z0-9-]+$/.test(slug)) {
      newErrors.slug = 'Slug deve conter apenas letras minúsculas, números e hífens';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      await onSubmit({ title: title.trim(), slug: slug.trim() });
    }
  };

  return (
    <Dialog open={open} onOpenChange={(open) => !open && !loading && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {category ? 'Editar Categoria' : 'Nova Categoria'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="title">Nome *</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Ex: Vestuário"
              className={errors.title ? 'border-destructive' : ''}
            />
            {errors.title && (
              <p className="text-sm text-destructive">{errors.title}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="slug">Slug (URL) *</Label>
            <Input
              id="slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value.toLowerCase())}
              placeholder="Ex: vestuario"
              className={errors.slug ? 'border-destructive' : ''}
            />
            {errors.slug && (
              <p className="text-sm text-destructive">{errors.slug}</p>
            )}
            <p className="text-xs text-muted-foreground">
              Apenas letras minúsculas, números e hífens
            </p>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose} disabled={loading}>
              Cancelar
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Salvando...' : category ? 'Salvar' : 'Criar'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
