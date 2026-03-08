import { useState, useEffect } from 'react';
import { newsService } from '@/shared/services/newsService';
import { useToast } from '@/components/ui/use-toast';

export function useEditorNewsVM() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    loadNews();
  }, [page]);

  const loadNews = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await newsService.getEditorNews(page, 10);
      setNews(response.content || []);
      setTotalElements(response.totalElements || 0);
      setTotalPages(response.totalPages || 0);
    } catch (err) {
      const message = err.message || 'Erro ao carregar notícias';
      setError(message);
      toast({
        title: 'Erro',
        description: message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const createNews = async (formData) => {
    try {
      setSaving(true);
      await newsService.createEditorNews(formData);
      toast({
        title: 'Sucesso',
        description: 'Notícia criada com sucesso',
      });
      await loadNews();
    } catch (err) {
      const message = err.message || 'Erro ao criar notícia';
      toast({
        title: 'Erro',
        description: message,
        variant: 'destructive',
      });
      throw err;
    } finally {
      setSaving(false);
    }
  };

  const updateNews = async (id, formData) => {
    try {
      setSaving(true);
      await newsService.updateEditorNews(id, formData);
      toast({
        title: 'Sucesso',
        description: 'Notícia atualizada com sucesso',
      });
      await loadNews();
    } catch (err) {
      const message = err.message || 'Erro ao atualizar notícia';
      toast({
        title: 'Erro',
        description: message,
        variant: 'destructive',
      });
      throw err;
    } finally {
      setSaving(false);
    }
  };

  const deleteNews = async (id) => {
    try {
      setDeleting(true);
      await newsService.deleteEditorNews(id);
      toast({
        title: 'Sucesso',
        description: 'Notícia deletada com sucesso',
      });
      await loadNews();
    } catch (err) {
      const message = err.message || 'Erro ao deletar notícia';
      toast({
        title: 'Erro',
        description: message,
        variant: 'destructive',
      });
      throw err;
    } finally {
      setDeleting(false);
    }
  };

  const getNewsDetailById = async (id) => {
    try {
      const data = await newsService.getNewsDetailById(id);
      return data;
    } catch (err) {
      throw new Error(err.message || 'Erro ao carregar notícia');
    }
  };

  return {
    news,
    loading,
    saving,
    deleting,
    error,
    page,
    totalElements,
    totalPages,
    setPage,
    createNews,
    updateNews,
    deleteNews,
    getNewsDetailById,
    reload: loadNews,
  };
}
