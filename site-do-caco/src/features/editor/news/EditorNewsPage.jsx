import { useState } from 'react';
import { FileText, Plus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast.jsx';
import { useEditorNewsVM } from './useEditorNewsVM';
import { NewsFormSection } from '@/features/admin/news/components/NewsFormSection';
import { AdminNewsCard } from '@/features/admin/news/components/AdminNewsCard';
import { ConfirmDeleteDialog } from '@/features/admin/components/ConfirmDeleteDialog';

export function EditorNewsPage() {
  const {
    news,
    loading,
    saving,
    deleting,
    createNews,
    updateNews,
    deleteNews,
    getNewsDetailById,
  } = useEditorNewsVM();

  const [searchTerm, setSearchTerm] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingNewsDetail, setEditingNewsDetail] = useState(null);
  const [loadingEditDetail, setLoadingEditDetail] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [newsToDelete, setNewsToDelete] = useState(null);

  const { toast } = useToast();

  const isFormVisible = editingId === 'new' || loadingEditDetail || !!editingNewsDetail;

  const handleCreate = () => {
    setEditingId('new');
    setEditingNewsDetail(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEdit = async (article) => {
    try {
      setEditingId(article.id);
      setLoadingEditDetail(true);

      const detail = await getNewsDetailById(article.slug);
      setEditingNewsDetail(detail);

      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      setEditingId(null);
      setEditingNewsDetail(null);
      toast({
        title: 'Erro',
        description: 'Não foi possível carregar os detalhes da notícia para edição',
        variant: 'destructive',
      });
      console.error('Erro ao carregar detalhe da notícia:', error);
    } finally {
      setLoadingEditDetail(false);
    }
  };

  const handleSave = async (formData) => {
    try {
      if (editingId === 'new') {
        await createNews(formData);
      } else {
        await updateNews(editingId, formData);
      }
      setEditingId(null);
      setEditingNewsDetail(null);
    } catch (error) {
      console.error('Erro ao salvar notícia:', error);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditingNewsDetail(null);
  };

  const handleDeleteClick = (article) => {
    setNewsToDelete(article);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (newsToDelete) {
      try {
        await deleteNews(newsToDelete.id);
        setDeleteDialogOpen(false);
        setNewsToDelete(null);
      } catch (error) {
        console.error('Erro ao deletar notícia:', error);
      }
    }
  };

  const filteredNews = news.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading && news.length === 0) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  if (isFormVisible) {
    if (loadingEditDetail) {
      return (
        <div className="flex items-center justify-center p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <NewsFormSection
          news={editingNewsDetail}
          onSave={handleSave}
          onCancel={handleCancel}
          saving={saving}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <FileText className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">Minhas Notícias</h1>
            <p className="text-sm text-muted-foreground">
              Total: {news.length} notícia{news.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
        <Button onClick={handleCreate} disabled={saving} size="lg">
          <Plus className="mr-2 h-4 w-4" />
          Nova Notícia
        </Button>
      </div>

      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle>Pesquisar</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Buscar por título ou slug..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </CardContent>
      </Card>

      {/* Notícias Cards */}
      <Card>
        <CardContent className="p-4 sm:p-6">
          {filteredNews.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-muted-foreground">
                {searchTerm ? 'Nenhuma notícia encontrada' : 'Você ainda não criou nenhuma notícia'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredNews.map((article) => (
                <AdminNewsCard
                  key={article.id}
                  article={article}
                  onEdit={handleEdit}
                  onDelete={handleDeleteClick}
                  disabled={saving || deleting}
                />
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Delete Confirmation Dialog */}
      <ConfirmDeleteDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        onConfirm={handleConfirmDelete}
        title="Deletar notícia"
        description={`Tem certeza que deseja deletar a notícia "${newsToDelete?.title}"? Esta ação não pode ser desfeita.`}
        confirmText="Deletar"
      />
    </div>
  );
}
