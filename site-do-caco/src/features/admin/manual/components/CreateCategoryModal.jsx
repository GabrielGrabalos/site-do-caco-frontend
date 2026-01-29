import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function CreateCategoryModal({ open, onClose, onSave, loading, category }) {
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (open) {
      if (category) {
        setName(category.name);
        setSlug(category.slug);
      } else {
        setName('');
        setSlug('');
      }
      setErrors({});
    }
  }, [open, category]);

  const handleNameChange = (value) => {
    console.log('Name changed to:', value);
    setName(value);
    // Auto-gera slug sempre
    const generatedSlug = value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    console.log('Generated slug:', generatedSlug);
    setSlug(generatedSlug);
  };

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = 'Nome é obrigatório';
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
      await onSave({ name: name.trim(), slug: slug.trim() });
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
            <Label htmlFor="name">Nome *</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => handleNameChange(e.target.value)}
              placeholder="Ex: Vestuário"
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
