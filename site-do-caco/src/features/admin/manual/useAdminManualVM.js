import { useState, useEffect } from 'react';
import { manualService } from '@/shared/services/manualService';
import { ManualCategory } from './models/ManualCategory';
import { ManualChapter } from './models/ManualChapter';
import { ManualArticle } from './models/ManualArticle';

export function useAdminManualVM() {
  const [categories, setCategories] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setSelectedChapter(null); // Limpa capítulo selecionado ao trocar de categoria
      loadChapters(selectedCategory.id);
    } else {
      setChapters([]);
      setSelectedChapter(null);
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedChapter) {
      loadArticles(selectedChapter.id);
    } else {
      setArticles([]);
    }
  }, [selectedChapter]);

  // === CATEGORIAS ===
  const loadCategories = async () => {
    try {
      setLoading(true);
      const data = await manualService.getCategories();
      setCategories(ManualCategory.fromDTOArray(data));
    } catch (err) {
      console.error('Erro ao carregar categorias:', err);
    } finally {
      setLoading(false);
    }
  };

  const createCategory = async (categoryData) => {
    try {
      setCreating(true);
      const newCategoryDTO = await manualService.createCategory(categoryData);
      const newCategory = ManualCategory.fromDTO(newCategoryDTO);
      setCategories([...categories, newCategory]);
      return { success: true, data: newCategory };
    } catch (err) {
      return { success: false, error: err.message };
    } finally {
      setCreating(false);
    }
  };

  const updateCategory = async (id, categoryData) => {
    try {
      const updatedDTO = await manualService.updateCategory(id, categoryData);
      const updatedCategory = ManualCategory.fromDTO(updatedDTO);
      setCategories(categories.map(c => c.id === id ? updatedCategory : c));
      
      // Atualiza a categoria selecionada se for ela
      if (selectedCategory?.id === id) {
        setSelectedCategory(updatedCategory);
      }
      
      return { success: true, data: updatedCategory };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const deleteCategory = async (id) => {
    try {
      await manualService.deleteCategory(id);
      setCategories(categories.filter(c => c.id !== id));
      
      // Remove seleção se for a categoria deletada
      if (selectedCategory?.id === id) {
        setSelectedCategory(null);
      }
      
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const reorderCategories = async (newOrder) => {
    try {
      setCategories(newOrder);
      const categoryIds = newOrder.map(c => c.id);
      await manualService.reorderCategories(categoryIds);
      return { success: true };
    } catch (err) {
      await loadCategories(); // Reverte em caso de erro
      return { success: false, error: err.message };
    }
  };

  // === CAPÍTULOS ===
  const loadChapters = async (categoryId) => {
    try {
      const data = await manualService.getChaptersByCategory(categoryId);
      setChapters(ManualChapter.fromDTOArray(data));
    } catch (err) {
      console.error('Erro ao carregar capítulos:', err);
    }
  };

  const createChapter = async (chapterData) => {
    try {
      setCreating(true);
      const newChapterDTO = await manualService.createChapter(chapterData);
      const newChapter = ManualChapter.fromDTO(newChapterDTO);
      setChapters([...chapters, newChapter]);
      
      // Atualiza contador da categoria
      setCategories(categories.map(c => 
        c.id === chapterData.categoryId 
          ? c.clone({ chapterCount: c.chapterCount + 1 })
          : c
      ));
      
      return { success: true, data: newChapter };
    } catch (err) {
      return { success: false, error: err.message };
    } finally {
      setCreating(false);
    }
  };

  const updateChapter = async (id, chapterData) => {
    try {
      const updatedDTO = await manualService.updateChapter(id, chapterData);
      const updatedChapter = ManualChapter.fromDTO(updatedDTO);
      setChapters(chapters.map(ch => ch.id === id ? updatedChapter : ch));
      
      // Atualiza o capítulo selecionado se for ele
      if (selectedChapter?.id === id) {
        setSelectedChapter(updatedChapter);
      }
      
      return { success: true, data: updatedChapter };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const deleteChapter = async (id) => {
    try {
      const chapter = chapters.find(ch => ch.id === id);
      await manualService.deleteChapter(id);
      setChapters(chapters.filter(ch => ch.id !== id));
      
      // Remove seleção se for o capítulo deletado
      if (selectedChapter?.id === id) {
        setSelectedChapter(null);
      }
      
      // Atualiza contador da categoria
      if (chapter) {
        setCategories(categories.map(c => 
          c.id === chapter.categoryId 
            ? c.clone({ chapterCount: Math.max(0, c.chapterCount - 1) })
            : c
        ));
      }
      
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const reorderChapters = async (categoryId, newOrder) => {
    try {
      setChapters(newOrder);
      const chapterIds = newOrder.map(ch => ch.id);
      await manualService.reorderChapters(categoryId, chapterIds);
      return { success: true };
    } catch (err) {
      if (selectedCategory) {
        await loadChapters(selectedCategory.id); // Reverte em caso de erro
      }
      return { success: false, error: err.message };
    }
  };

  // === ARTIGOS ===
  const loadArticles = async (chapterId) => {
    try {
      const data = await manualService.getArticlesByChapter(chapterId);
      setArticles(ManualArticle.fromDTOArray(data));
    } catch (err) {
      console.error('Erro ao carregar artigos:', err);
    }
  };

  const createArticle = async (articleData) => {
    try {
      setCreating(true);
      const newArticleDTO = await manualService.createArticle(articleData);
      const newArticle = ManualArticle.fromDTO(newArticleDTO);
      setArticles([...articles, newArticle]);
      
      // Atualiza contador do capítulo
      setChapters(chapters.map(ch => 
        ch.id === articleData.chapterId 
          ? ch.clone({ articleCount: ch.articleCount + 1 })
          : ch
      ));
      
      return { success: true, data: newArticle };
    } catch (err) {
      return { success: false, error: err.message };
    } finally {
      setCreating(false);
    }
  };

  const updateArticle = async (id, articleData) => {
    try {
      const updatedDTO = await manualService.updateArticle(id, articleData);
      const updatedArticle = ManualArticle.fromDTO(updatedDTO);
      setArticles(articles.map(a => a.id === id ? updatedArticle : a));
      return { success: true, data: updatedArticle };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const deleteArticle = async (id) => {
    try {
      const article = articles.find(a => a.id === id);
      await manualService.deleteArticle(id);
      setArticles(articles.filter(a => a.id !== id));
      
      // Atualiza contador do capítulo
      if (article) {
        setChapters(chapters.map(ch => 
          ch.id === article.chapterId 
            ? ch.clone({ articleCount: Math.max(0, ch.articleCount - 1) })
            : ch
        ));
      }
      
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const reorderArticles = async (chapterId, newOrder) => {
    try {
      setArticles(newOrder);
      const articleIds = newOrder.map(a => a.id);
      await manualService.reorderArticles(chapterId, articleIds);
      return { success: true };
    } catch (err) {
      if (selectedChapter) {
        await loadArticles(selectedChapter.id); // Reverte em caso de erro
      }
      return { success: false, error: err.message };
    }
  };

  const getArticleFeedbacks = async (articleId) => {
    try {
      const response = await manualService.getArticleFeedbacks(articleId);
      return { success: true, data: response.content || [] }; 
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  return {
    // Estados
    categories,
    chapters,
    articles,
    selectedCategory,
    selectedChapter,
    loading,
    creating,
    
    // Setters de seleção
    setSelectedCategory,
    setSelectedChapter,
    
    // Categorias
    createCategory,
    updateCategory,
    deleteCategory,
    reorderCategories,
    
    // Capítulos
    createChapter,
    updateChapter,
    deleteChapter,
    reorderChapters,

    // Artigos
    createArticle,
    updateArticle,
    deleteArticle,
    reorderArticles,
    getArticleFeedbacks,
  };
}
