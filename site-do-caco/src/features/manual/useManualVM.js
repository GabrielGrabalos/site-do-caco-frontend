import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { httpClient } from '@/shared/lib/http';
import { authService } from '@/shared/services/authService';

const PENDING_FEEDBACK_KEY = 'caco_pending_feedback';

// Funções para gerenciar feedback pendente no localStorage
const savePendingFeedback = (articleSlug, helpful, comment) => {
  localStorage.setItem(PENDING_FEEDBACK_KEY, JSON.stringify({
    articleSlug,
    helpful,
    comment,
    timestamp: Date.now()
  }));
};

const getPendingFeedback = (articleSlug) => {
  try {
    const data = localStorage.getItem(PENDING_FEEDBACK_KEY);
    if (!data) return null;
    
    const feedback = JSON.parse(data);
    // Só retorna se for para o mesmo artigo
    if (feedback.articleSlug === articleSlug) {
      return { helpful: feedback.helpful, comment: feedback.comment };
    }
    return null;
  } catch (err) {
    console.error('Erro ao recuperar feedback pendente:', err);
    return null;
  }
};

const clearPendingFeedback = () => {
  localStorage.removeItem(PENDING_FEEDBACK_KEY);
};

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
  const [pendingFeedback, setPendingFeedback] = useState(null);

  // Cache para armazenar chapters e articles já carregados
  const [chaptersCache, setChaptersCache] = useState({});
  const [articlesCache, setArticlesCache] = useState({});

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
      const data = await httpClient.get('public/manual/categories');
      setCategories(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const loadChapters = async (categoryId) => {
    try {
      // Verificar se já está no cache
      if (chaptersCache[categoryId]) {
        setChapters(chaptersCache[categoryId]);
        return;
      }
      
      const data = await httpClient.get(`public/manual/chapters/category/${categoryId}`);
      setChapters(data);
      
      // Armazenar no cache
      setChaptersCache(prev => ({
        ...prev,
        [categoryId]: data
      }));
    } catch (err) {
      console.error('Erro ao carregar capítulos:', err);
    }
  };

  const loadArticles = async (chapterId) => {
    try {
      // Verificar se já está no cache
      if (articlesCache[chapterId]) {
        setArticles(articlesCache[chapterId]);
        return;
      }
      
      const data = await httpClient.get(`public/manual/articles/chapter/${chapterId}`);
      setArticles(data);
      
      // Armazenar no cache
      setArticlesCache(prev => ({
        ...prev,
        [chapterId]: data
      }));
    } catch (err) {
      console.error('Erro ao carregar artigos:', err);
    }
  };

  const loadArticleBySlug = async (articleSlug) => {
    try {
      setLoadingArticle(true);
      setFeedbackSubmitted(false);
      const data = await httpClient.get(`public/manual/articles/slug/${articleSlug}`);
      setSelectedArticle(data);
      
      // Verificar se há feedback pendente para este artigo
      const pending = getPendingFeedback(articleSlug);
      setPendingFeedback(pending);
      
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
    
    // Verificar se o usuário está autenticado
    const isAuthenticated = authService.getToken() !== null;
    
    if (!isAuthenticated) {
      // Salvar feedback no localStorage
      savePendingFeedback(selectedArticle.slug, helpful, comment);
      
      // Redirecionar para login
      navigate('/login', { state: { from: `/manual/${selectedArticle.slug}` } });
      return;
    }
    
    try {
      await httpClient.post(`article-feedback/articles/${selectedArticle.id}/feedback`, {
        isHelpful: helpful,
        comment,
      });
      setFeedbackSubmitted(true);
      
      // Limpar feedback pendente após envio bem-sucedido
      clearPendingFeedback();
      setPendingFeedback(null);
      
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
    pendingFeedback,
    selectCategory,
    selectChapter,
    selectArticle,
    submitFeedback,
  };
}
