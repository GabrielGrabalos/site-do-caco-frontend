import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { contentService } from '@/shared/services/contentService';

export function useManualVM() {
  const { articleId } = useParams();
  const [tree, setTree] = useState([]);
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  useEffect(() => {
    loadTree();
  }, []);

  useEffect(() => {
    if (articleId) {
      loadArticle(articleId);
    }
  }, [articleId]);

  const loadTree = async () => {
    try {
      const data = await contentService.getManualTree();
      setTree(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const loadArticle = async (id) => {
    try {
      setLoading(true);
      setFeedbackSubmitted(false);
      const data = await contentService.getManualArticle(id);
      setArticle(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const submitFeedback = async (helpful, comment = '') => {
    try {
      await contentService.submitFeedback(articleId, helpful, comment);
      setFeedbackSubmitted(true);
    } catch (err) {
      console.error('Erro ao enviar feedback:', err);
      throw err;
    }
  };

  return {
    tree,
    article,
    loading,
    error,
    feedbackSubmitted,
    submitFeedback,
  };
}
