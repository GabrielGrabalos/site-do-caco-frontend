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
import { MDXEditor } from '@/shared/components/MDXEditor';

export function CreateArticleModal({ 
  open, 
  onOpenChange, 
  onSubmit, 
  editingArticle, 
  loading,
  chapterId 
}) {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [originalSlug, setOriginalSlug] = useState('');

  useEffect(() => {
    if (editingArticle) {
      setTitle(editingArticle.title);
      setSlug(editingArticle.slug);
      setContent(editingArticle.content || '');
      setOriginalSlug(editingArticle.slug);
    } else {
      setTitle('');
      setSlug('');
      setContent('');
      setOriginalSlug('');
    }
  }, [editingArticle, open]);

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
    if (!editingArticle || slug === originalSlug || slug === generateSlug(title)) {
      setSlug(generateSlug(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, slug, content, chapterId });
  };

  const isValid = title.trim() && slug.trim() && content.trim();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {editingArticle ? 'Editar Artigo' : 'Novo Artigo'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="article-title">Título</Label>
            <Input
              id="article-title"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Ex: Como fazer matrícula"
              required
            />
          </div>

          <div>
            <Label htmlFor="article-slug">Slug</Label>
            <Input
              id="article-slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="Ex: como-fazer-matricula"
              required
            />
            <p className="text-xs text-muted-foreground mt-1">
              URL amigável para o artigo
            </p>
          </div>

          <div>
            <Label htmlFor="article-content">Conteúdo</Label>
            <div className="border rounded-md overflow-hidden">
              <MDXEditor
                value={content}
                onChange={setContent}
                placeholder="Escreva o conteúdo do artigo aqui..."
                className="min-h-[300px]"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Suporta Markdown com imagens e formatação
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
              {loading ? 'Salvando...' : editingArticle ? 'Atualizar' : 'Criar'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
