import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { apiClient } from '@/shared/services/apiClient';

export function useManualVM() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingArticle, setLoadingArticle] = useState(false);
  const [error, setError] = useState(null);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  // Carregar categorias ao montar
  useEffect(() => {
    loadCategories();
  }, []);

  // Carregar artigo quando slug mudar
  useEffect(() => {
    if (slug) {
      loadArticleBySlug(slug);
    } else {
      setSelectedArticle(null);
      setFeedbackSubmitted(false);
    }
  }, [slug]);

  const loadCategories = async () => {
    try {
      setLoading(true);
      const data = await apiClient.get('public/manual/categories');
      setCategories(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const loadChapters = async (categoryId) => {
    try {
      const data = await apiClient.get(`public/manual/chapters/category/${categoryId}`);
      setChapters(data);
    } catch (err) {
      console.error('Erro ao carregar capítulos:', err);
    }
  };

  const loadArticles = async (chapterId) => {
    try {
      const data = await apiClient.get(`public/manual/articles/chapter/${chapterId}`);
      setArticles(data);
    } catch (err) {
      console.error('Erro ao carregar artigos:', err);
    }
  };

  const loadArticleBySlug = async (articleSlug) => {
    try {
      setLoadingArticle(true);
      setFeedbackSubmitted(false);
      const data = await apiClient.get(`public/manual/articles/slug/${articleSlug}`);
      setSelectedArticle(data);
      
      // Expandir categoria e capítulo correspondentes
      if (data.categoryId) {
        setSelectedCategory(data.categoryId);
        await loadChapters(data.categoryId);
      }
      if (data.chapterId) {
        setSelectedChapter(data.chapterId);
        await loadArticles(data.chapterId);
      }
    } catch (err) {
      setError('Artigo não encontrado');
      setSelectedArticle(null);
    } finally {
      setLoadingArticle(false);
    }
  };

  const selectCategory = async (category) => {
    if (selectedCategory === category.id) {
      // Toggle collapse
      setSelectedCategory(null);
      setChapters([]);
      setSelectedChapter(null);
      setArticles([]);
    } else {
      setSelectedCategory(category.id);
      setSelectedChapter(null);
      setArticles([]);
      await loadChapters(category.id);
    }
  };

  const selectChapter = async (chapter) => {
    if (selectedChapter === chapter.id) {
      // Toggle collapse
      setSelectedChapter(null);
      setArticles([]);
    } else {
      setSelectedChapter(chapter.id);
      await loadArticles(chapter.id);
    }
  };

  const selectArticle = (article) => {
    navigate(`/manual/${article.slug}`);
  };

  const submitFeedback = async (helpful, comment = '') => {
    if (!selectedArticle) return;
    
    try {
      await apiClient.post(`article-feedback/articles/${selectedArticle.id}/feedback`, {
        isHelpful: helpful,
        comment,
      });
      setFeedbackSubmitted(true);
      
      // Atualizar contadores de feedback no artigo
      setSelectedArticle(prev => ({
        ...prev,
        helpfulCount: helpful ? prev.helpfulCount + 1 : prev.helpfulCount,
        unhelpfulCount: !helpful ? prev.unhelpfulCount + 1 : prev.unhelpfulCount,
      }));
    } catch (err) {
      console.error('Erro ao enviar feedback:', err);
      throw err;
    }
  };

  return {
    categories,
    selectedCategory,
    chapters,
    selectedChapter,
    articles,
    selectedArticle,
    loading,
    loadingArticle,
    error,
    feedbackSubmitted,
    selectCategory,
    selectChapter,
    selectArticle,
    submitFeedback,
  };
}
