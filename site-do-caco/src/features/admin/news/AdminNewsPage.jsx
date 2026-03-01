import { useState } from 'react';
import { FileText, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast.jsx';
import { useAdminNewsVM } from './useAdminNewsVM';
import { NewsFormSection } from './components/NewsFormSection';
import { AdminNewsCard } from './components/AdminNewsCard';
import { ConfirmDeleteDialog } from '../components/ConfirmDeleteDialog';

export function AdminNewsPage() {
  const {
    news,
    loading,
    saving,
    deleting,
    page,
    totalPages,
    totalElements,
    createNews,
    updateNews,
    getNewsDetailBySlug,
    deleteNews,
    goToPage,
  } = useAdminNewsVM();

  const [searchTerm, setSearchTerm] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingNewsDetail, setEditingNewsDetail] = useState(null);
  const [loadingEditDetail, setLoadingEditDetail] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [newsToDelete, setNewsToDelete] = useState(null);

  const { toast } = useToast();

  // Se estiver editando, mostra o formulário
  const isFormVisible = editingId === 'new' || loadingEditDetail || !!editingNewsDetail;

  const handleCreate = () => {
    setEditingId('new');
    setEditingNewsDetail(null);
    // Scroll para o topo do formulário
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEdit = async (article) => {
    try {
      setEditingId(article.id);
      setLoadingEditDetail(true);

      const detail = await getNewsDetailBySlug(article.slug);
      setEditingNewsDetail(detail);

      // Scroll para o topo do formulário
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
      // Erro já é tratado no VM
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
        // Erro já é tratado no VM
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

  // Se estiver mostrando o formulário, não mostra a listagem
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
            <h1 className="text-3xl font-bold">Gerenciar Notícias</h1>
            <p className="text-sm text-muted-foreground">
              Total: {totalElements} notícia{totalElements !== 1 ? 's' : ''}
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
                {searchTerm ? 'Nenhuma notícia encontrada' : 'Nenhuma notícia criada ainda'}
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

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Página {page + 1} de {totalPages}
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => goToPage(page - 1)}
              disabled={page === 0 || loading}
            >
              <ChevronLeft className="h-4 w-4" />
              Anterior
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => goToPage(page + 1)}
              disabled={page >= totalPages - 1 || loading}
            >
              Próxima
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

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
