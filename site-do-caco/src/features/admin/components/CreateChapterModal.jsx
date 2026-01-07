import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function CreateChapterModal({ 
  open, 
  onOpenChange, 
  onSubmit, 
  editingChapter, 
  loading,
  categoryId 
}) {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [originalSlug, setOriginalSlug] = useState('');

  useEffect(() => {
    if (editingChapter) {
      setTitle(editingChapter.title);
      setSlug(editingChapter.slug);
      setOriginalSlug(editingChapter.slug);
    } else {
      setTitle('');
      setSlug('');
      setOriginalSlug('');
    }
  }, [editingChapter, open]);

  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleTitleChange = (value) => {
    setTitle(value);
    // Atualiza slug automaticamente se estiver criando OU se editando e o slug não foi customizado
    if (!editingChapter || slug === originalSlug) {
      setSlug(generateSlug(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, slug, categoryId });
  };

  const isValid = title.trim() && slug.trim();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {editingChapter ? 'Editar Capítulo' : 'Novo Capítulo'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="chapter-title">Título</Label>
            <Input
              id="chapter-title"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Ex: Matrícula e Trancamento"
              required
            />
          </div>

          <div>
            <Label htmlFor="chapter-slug">Slug</Label>
            <Input
              id="chapter-slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="Ex: matricula-trancamento"
              required
            />
            <p className="text-xs text-muted-foreground mt-1">
              URL amigável para o capítulo
            </p>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={!isValid || loading}>
              {loading ? 'Salvando...' : editingChapter ? 'Atualizar' : 'Criar'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
