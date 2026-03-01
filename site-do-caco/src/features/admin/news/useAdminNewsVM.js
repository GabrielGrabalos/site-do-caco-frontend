import { useState, useEffect } from 'react';
import { newsService } from '@/shared/services/newsService';
import { useToast } from '@/components/ui/use-toast.jsx';

export function useAdminNewsVM() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadNews();
  }, [page]);

  const loadNews = async () => {
    try {
      setLoading(true);
      const response = await newsService.getNewsListAdmin(page, 10, 'publishedAt,desc');
      setNews(response.content || []);
      setTotalPages(response.totalPages || 0);
      setTotalElements(response.totalElements || 0);
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Falha ao carregar notícias',
        variant: 'destructive',
      });
      console.error('Erro ao carregar notícias:', error);
    } finally {
      setLoading(false);
    }
  };

  const createNews = async (data) => {
    try {
      setSaving(true);
      const response = await newsService.createNewsAsAdmin(data);
      toast({
        title: 'Sucesso',
        description: 'Notícia criada com sucesso',
      });
      await loadNews();
      return response;
    } catch (error) {
      toast({
        title: 'Erro',
        description: error.message || 'Falha ao criar notícia',
        variant: 'destructive',
      });
      throw error;
    } finally {
      setSaving(false);
    }
  };

  const updateNews = async (id, data) => {
    try {
      setSaving(true);
      const response = await newsService.updateNewsAsAdmin(id, data);
      toast({
        title: 'Sucesso',
        description: 'Notícia atualizada com sucesso',
      });
      await loadNews();
      return response;
    } catch (error) {
      toast({
        title: 'Erro',
        description: error.message || 'Falha ao atualizar notícia',
        variant: 'destructive',
      });
      throw error;
    } finally {
      setSaving(false);
    }
  };

  const getNewsDetailBySlug = async (slug) => {
    return newsService.getNewsBySlug(slug);
  };

  const deleteNews = async (id) => {
    try {
      setDeleting(true);
      await newsService.deleteNewsAsAdmin(id);
      toast({
        title: 'Sucesso',
        description: 'Notícia deletada com sucesso',
      });
      await loadNews();
    } catch (error) {
      toast({
        title: 'Erro',
        description: error.message || 'Falha ao deletar notícia',
        variant: 'destructive',
      });
      throw error;
    } finally {
      setDeleting(false);
    }
  };

  const goToPage = (newPage) => {
    if (newPage >= 0 && newPage < totalPages) {
      setPage(newPage);
    }
  };

  return {
    news,
    loading,
    saving,
    deleting,
    page,
    totalPages,
    totalElements,
    loadNews,
    createNews,
    updateNews,
    getNewsDetailBySlug,
    deleteNews,
    goToPage,
  };
}
