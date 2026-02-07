import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
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
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MDXEditor } from '@/shared/components/MDXEditor';
import { Trash2 } from 'lucide-react';
import { ConfirmDeleteDialog } from '../../components/ConfirmDeleteDialog';
import { useFormDraft } from '@/shared/hooks/useFormDraft';

const DRAFT_KEY = 'article-draft';

export function CreateArticleModal({ 
  open, 
  onOpenChange, 
  onSubmit, 
  editingArticle, 
  loading,
  chapterId 
}) {
  const { draftValues, hasDraft, saveDraft, discardDraft } = useFormDraft(DRAFT_KEY, {}, !!editingArticle);

  const [title, setTitle] = useState(editingArticle?.title || draftValues.title || '');
  const [slug, setSlug] = useState(editingArticle?.slug || draftValues.slug || '');
  const [content, setContent] = useState(editingArticle?.content || draftValues.content || '');
  const [originalSlug, setOriginalSlug] = useState(editingArticle?.slug || '');
  const [discardDialogOpen, setDiscardDialogOpen] = useState(false);

  // Carregar do localStorage ao abrir o modal (apenas se não estiver editando)
  useEffect(() => {
    if (open && !editingArticle && hasDraft) {
         setTitle(draftValues.title || '');
         setSlug(draftValues.slug || '');
         setContent(draftValues.content || '');
    }
  }, [open, editingArticle, hasDraft, draftValues]);

  // Limpar formulário ao fechar se não estiver salvando rascunho (opcional, mas comum em modais)
  useEffect(() => {
     if (!open && !editingArticle) {
         // Opcional: resetar estados locais visualmente, mas manter rascunho no hook, ou não.
         // Neste caso específico, o código original limpava.
         // Vamos manter a lógica original de limpar estados se fechar.
         // setTitle(''); setSlug(''); setContent('');
     }
  }, [open, editingArticle]);

  // Salvar no localStorage sempre que houver mudanças (apenas se não estiver editando)
  useEffect(() => {
    if (!editingArticle && open && (title || slug || content)) {
       saveDraft({ title, slug, content, chapterId });
    }
  }, [title, slug, content, chapterId, editingArticle, open, saveDraft]);

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

  const handleDiscard = () => {
    setDiscardDialogOpen(true);
  };

  const confirmDiscard = () => {
    discardDraft();
    setTitle('');
    setSlug('');
    setContent('');
    setOriginalSlug('');
    setDiscardDialogOpen(false);
    onOpenChange(false);
  };

  const isValid = title.trim() && slug.trim() && content.trim();
  const showDiscardButton = !editingArticle && (title || slug || content);

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
            {showDiscardButton && (
              <Button
                type="button"
                variant="destructive"
                onClick={handleDiscard}
                disabled={loading}
                className="mr-auto"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Descartar
              </Button>
            )}
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

      <ConfirmDeleteDialog
        open={discardDialogOpen}
        onOpenChange={setDiscardDialogOpen}
        title="Descartar rascunho?"
        description="Tem certeza que deseja descartar este rascunho? Todo o conteúdo será perdido e esta ação não pode ser desfeita."
        onConfirm={confirmDiscard}
        confirmText="Descartar"
      />    
    </Dialog>
  );
}
