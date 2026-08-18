import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BookOpen, Plus, Trash2, Save, X, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast.jsx';
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
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useAdminManualVM } from './useAdminManualVM';
import { CategoryItem } from './components/CategoryItem';
import { ChapterItem } from './components/ChapterItem';
import { ArticleItem } from './components/ArticleItem';
import { CreateCategoryModal } from './components/CreateCategoryModal';
import { CreateChapterModal } from './components/CreateChapterModal';
import { MDXEditor } from '@/shared/components/MDXEditor';
import { ConfirmDeleteDialog } from '../components/ConfirmDeleteDialog';
import { useFormDraft } from '@/shared/hooks/useFormDraft';

export function AdminManualPage() {
  const {
    categories,
    chapters,
    articles,
    selectedCategory,
    selectedChapter,
    loading,
    creating,
    setSelectedCategory,
    setSelectedChapter,
    createCategory,
    updateCategory,
    deleteCategory,
    reorderCategories,
    createChapter,
    updateChapter,
    deleteChapter,
    reorderChapters,
    createArticle,
    updateArticle,
    deleteArticle,
    reorderArticles,
    getArticleFeedbacks,
  } = useAdminManualVM();

  // Estados para categorias
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [deleteCategoryDialogOpen, setDeleteCategoryDialogOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);

  // Estados para capítulos
  const [chapterModalOpen, setChapterModalOpen] = useState(false);
  const [editingChapter, setEditingChapter] = useState(null);
  const [deleteChapterDialogOpen, setDeleteChapterDialogOpen] = useState(false);
  const [chapterToDelete, setChapterToDelete] = useState(null);

  // Estados para artigos (editor inline)
  const [editingArticle, setEditingArticle] = useState(null);
  const [articleTitle, setArticleTitle] = useState('');
  const [articleSlug, setArticleSlug] = useState('');
  const [articleContent, setArticleContent] = useState('');
  const [originalSlug, setOriginalSlug] = useState('');
  const [deleteArticleDialogOpen, setDeleteArticleDialogOpen] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState(null);
  const [discardDialogOpen, setDiscardDialogOpen] = useState(false);
  const [isViewingDraft, setIsViewingDraft] = useState(false);
  const [selectedArticleForFeedback, setSelectedArticleForFeedback] = useState(null);
  const [articleFeedbacks, setArticleFeedbacks] = useState([]);
  const [loadingFeedbacks, setLoadingFeedbacks] = useState(false);
  const [editorResetKey, setEditorResetKey] = useState(0);

  const { toast } = useToast();

  const DRAFT_KEY = 'article-draft';
  const { 
    hasDraft, 
    discardDraft, 
    saveDraft,
    draftValues
  } = useFormDraft(DRAFT_KEY, { 
    title: '', 
    slug: '', 
    content: '' 
  }, !!editingArticle);

  // Quando selecionar um artigo para editar
  useEffect(() => {
    if (editingArticle) {
      setArticleTitle(editingArticle.title || '');
      setArticleSlug(editingArticle.slug || '');
      setArticleContent(editingArticle.content || '');
      setOriginalSlug(editingArticle.slug || '');
      setIsViewingDraft(false);
      setEditorResetKey(prev => prev + 1); // Força re-montagem do editor
    }
  }, [editingArticle]);

  // Salvar no localStorage sempre que houver mudanças (apenas se não estiver editando)
  useEffect(() => {
    if (!editingArticle && selectedChapter && (articleTitle || articleSlug || articleContent)) {
      saveDraft({ title: articleTitle, slug: articleSlug, content: articleContent });
      setIsViewingDraft(true);
    }
  }, [articleTitle, articleSlug, articleContent, selectedChapter, editingArticle, saveDraft]);

  // Limpar edição/visualização ao mudar de categoria ou capítulo
  useEffect(() => {
    setEditingArticle(null);
    setSelectedArticleForFeedback(null);
    setArticleFeedbacks([]);
    setArticleTitle('');
    setArticleSlug('');
    setArticleContent('');
    setIsViewingDraft(false);
  }, [selectedCategory, selectedChapter]);

  const manualSensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // ==================== Handlers de Categorias ====================
  const handleDragEndCategories = async (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = categories.findIndex((c) => c.id === active.id);
    const newIndex = categories.findIndex((c) => c.id === over.id);
    if (oldIndex === -1 || newIndex === -1) return;

    const newOrder = arrayMove(categories, oldIndex, newIndex);
    const result = await reorderCategories(newOrder);
    
    if (!result.success) {
      toast({
        variant: 'destructive',
        title: 'Erro ao reordenar',
        description: result.error,
      });
    }
  };

  const handleCreateCategory = async (categoryData) => {
    const result = editingCategory
      ? await updateCategory(editingCategory.id, categoryData)
      : await createCategory(categoryData);
    
    if (result.success) {
      setCategoryModalOpen(false);
      setEditingCategory(null);
      toast({
        title: editingCategory ? 'Categoria atualizada' : 'Categoria criada',
        description: editingCategory 
          ? 'A categoria foi atualizada com sucesso.'
          : 'A categoria foi criada com sucesso.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: editingCategory ? 'Erro ao atualizar' : 'Erro ao criar',
        description: result.error,
      });
    }
  };

  const handleEditCategory = (category) => {
    setEditingCategory(category);
    setCategoryModalOpen(true);
  };

  const handleDeleteCategory = (category) => {
    setCategoryToDelete(category.id);
    setDeleteCategoryDialogOpen(true);
  };

  const confirmDeleteCategory = async () => {
    if (!categoryToDelete) return;
    const result = await deleteCategory(categoryToDelete);
    
    if (result.success) {
      toast({
        title: 'Categoria excluída',
        description: 'A categoria foi removida com sucesso.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao excluir',
        description: result.error,
      });
    }
    
    setDeleteCategoryDialogOpen(false);
    setCategoryToDelete(null);
  };

  // ==================== Handlers de Capítulos ====================
  const handleDragEndChapters = async (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id || !selectedCategory) return;

    const oldIndex = chapters.findIndex((ch) => ch.id === active.id);
    const newIndex = chapters.findIndex((ch) => ch.id === over.id);
    if (oldIndex === -1 || newIndex === -1) return;

    const newOrder = arrayMove(chapters, oldIndex, newIndex);
    const result = await reorderChapters(selectedCategory.id, newOrder);
    
    if (!result.success) {
      toast({
        variant: 'destructive',
        title: 'Erro ao reordenar',
        description: result.error,
      });
    }
  };

  const handleCreateChapter = async (chapterData) => {
    const result = editingChapter
      ? await updateChapter(editingChapter.id, chapterData)
      : await createChapter(chapterData);
    
    if (result.success) {
      setChapterModalOpen(false);
      setEditingChapter(null);
      toast({
        title: editingChapter ? 'Capítulo atualizado' : 'Capítulo criado',
        description: editingChapter 
          ? 'O capítulo foi atualizado com sucesso.'
          : 'O capítulo foi criado com sucesso.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: editingChapter ? 'Erro ao atualizar' : 'Erro ao criar',
        description: result.error,
      });
    }
  };

  const handleEditChapter = (chapter) => {
    setEditingChapter(chapter);
    setChapterModalOpen(true);
  };

  const handleDeleteChapter = (chapter) => {
    setChapterToDelete(chapter.id);
    setDeleteChapterDialogOpen(true);
  };

  const confirmDeleteChapter = async () => {
    if (!chapterToDelete) return;
    const result = await deleteChapter(chapterToDelete);
    
    if (result.success) {
      toast({
        title: 'Capítulo excluído',
        description: 'O capítulo foi removido com sucesso.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao excluir',
        description: result.error,
      });
    }
    
    setDeleteChapterDialogOpen(false);
    setChapterToDelete(null);
  };

  // ==================== Handlers de Artigos ====================
  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleArticleTitleChange = (value) => {
    setArticleTitle(value);
    // Atualiza slug automaticamente se estiver criando OU se editando e o slug não foi customizado
    if (!editingArticle || articleSlug === originalSlug || articleSlug === generateSlug(articleTitle)) {
      setArticleSlug(generateSlug(value));
    }
  };

  const handleNewArticle = () => {
    setEditingArticle(null);
    setSelectedArticleForFeedback(null);
    setArticleFeedbacks([]);
    setArticleTitle('');
    setArticleSlug('');
    setArticleContent('');
    setOriginalSlug('');
    setIsViewingDraft(false);
  };

  const handleViewDraft = () => {
    if (draftValues) {
      setEditingArticle(null);
      setSelectedArticleForFeedback(null);
      setArticleFeedbacks([]);
      setArticleTitle(draftValues.title || '');
      setArticleSlug(draftValues.slug || '');
      setArticleContent(draftValues.content || '');
      setOriginalSlug('');
      setIsViewingDraft(true);
      setEditorResetKey(prev => prev + 1); // Força re-montagem do editor
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao carregar rascunho',
        description: 'Dados do rascunho indisponíveis.',
      });
    }
  };

  const handleEditArticle = (article) => {
    setEditingArticle(article);
    setSelectedArticleForFeedback(null);
    setArticleFeedbacks([]);
  };

  const handleSelectArticleForFeedback = async (article) => {
    setEditingArticle(null);
    setSelectedArticleForFeedback(article);
    setArticleTitle('');
    setArticleSlug('');
    setArticleContent('');
    setIsViewingDraft(false);
    
    // Carregar feedbacks do artigo
    setLoadingFeedbacks(true);
    try {
      const result = await getArticleFeedbacks(article.id);
      if (result.success) {
        setArticleFeedbacks(result.data);
      } else {
        throw new Error(result.error);
      }
    } catch (err) {
      console.error('Erro ao carregar feedbacks:', err);
      toast({
        variant: 'destructive',
        title: 'Erro ao carregar feedbacks',
        description: 'Não foi possível carregar os feedbacks deste artigo.',
      });
      setArticleFeedbacks([]);
    } finally {
      setLoadingFeedbacks(false);
    }
  };

  const handleCancelArticle = () => {
    if (!editingArticle && (articleTitle || articleSlug || articleContent)) {
      setDiscardDialogOpen(true);
    } else {
      clearArticleForm();
    }
  };

  const clearArticleForm = () => {
    setEditingArticle(null);
    setArticleTitle('');
    setArticleSlug('');
    setArticleContent('');
    setOriginalSlug('');
    setIsViewingDraft(false);
  };

  const handleDiscardDraft = () => {
    discardDraft();
    clearArticleForm();
    setDiscardDialogOpen(false);
  };

  const handleSaveArticle = async () => {
    if (!articleTitle.trim() || !articleSlug.trim() || !articleContent.trim() || !selectedChapter) {
      toast({
        variant: 'destructive',
        title: 'Campos obrigatórios',
        description: 'Preencha título, slug e conteúdo.',
      });
      return;
    }

    const articleData = {
      title: articleTitle,
      slug: articleSlug,
      content: articleContent,
      chapterId: selectedChapter.id,
    };

    const result = editingArticle
      ? await updateArticle(editingArticle.id, articleData)
      : await createArticle(articleData);
    
    if (result.success) {
      // Limpar rascunho do localStorage após sucesso
      if (!editingArticle || isViewingDraft) {
        discardDraft();
      }
      clearArticleForm();
      toast({
        title: editingArticle ? 'Artigo atualizado' : 'Artigo criado',
        description: editingArticle 
          ? 'O artigo foi atualizado com sucesso.'
          : 'O artigo foi criado com sucesso.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: editingArticle ? 'Erro ao atualizar' : 'Erro ao criar',
        description: result.error,
      });
    }
  };

  const handleDragEndArticles = async (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id || !selectedChapter) return;

    const oldIndex = articles.findIndex((a) => a.id === active.id);
    const newIndex = articles.findIndex((a) => a.id === over.id);
    if (oldIndex === -1 || newIndex === -1) return;

    const newOrder = arrayMove(articles, oldIndex, newIndex);
    const result = await reorderArticles(selectedChapter.id, newOrder);
    
    if (!result.success) {
      toast({
        variant: 'destructive',
        title: 'Erro ao reordenar',
        description: result.error,
      });
    }
  };

  const handleDeleteArticle = (article) => {
    setArticleToDelete(article.id);
    setDeleteArticleDialogOpen(true);
  };

  const confirmDeleteArticle = async () => {
    if (!articleToDelete) return;
    const result = await deleteArticle(articleToDelete);
    
    if (result.success) {
      toast({
        title: 'Artigo excluído',
        description: 'O artigo foi removido com sucesso.',
      });
      // Se estava editando o artigo excluído, limpar o formulário
      if (editingArticle?.id === articleToDelete) {
        clearArticleForm();
      }
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao excluir',
        description: result.error,
      });
    }
    
    setDeleteArticleDialogOpen(false);
    setArticleToDelete(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <BookOpen className="h-7 w-7" />
            Manual dê Ingressante
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Gerencie categorias, capítulos e artigos do manual
          </p>
        </div>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Coluna de Categorias */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-sm">Categorias</h3>
                <Button
                  size="sm"
                  onClick={() => setCategoryModalOpen(true)}
                  className="h-8"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              
              <DndContext
                sensors={manualSensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEndCategories}
              >
                <SortableContext
                  items={categories.map(c => c.id)}
                  strategy={verticalListSortingStrategy}
                >
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <CategoryItem
                        key={category.id}
                        category={category}
                        onDelete={handleDeleteCategory}
                        onEdit={handleEditCategory}
                        onSelect={setSelectedCategory}
                        isSelected={selectedCategory?.id === category.id}
                      />
                    ))}
                  </div>
                </SortableContext>
              </DndContext>

              {categories.length === 0 && (
                <div className="text-center py-8 border-2 border-dashed rounded-lg">
                  <p className="text-sm text-muted-foreground mb-3">
                    Nenhuma categoria
                  </p>
                  <Button
                    size="sm"
                    onClick={() => setCategoryModalOpen(true)}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Criar Categoria
                  </Button>
                </div>
              )}
            </div>

            {/* Coluna de Capítulos */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-sm">Capítulos</h3>
                <Button
                  size="sm"
                  onClick={() => setChapterModalOpen(true)}
                  disabled={!selectedCategory}
                  className="h-8"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {!selectedCategory ? (
                <div className="text-center py-12 border-2 border-dashed rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Selecione uma categoria
                  </p>
                </div>
              ) : (
                <>
                  <DndContext
                    sensors={manualSensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEndChapters}
                  >
                    <SortableContext
                      items={chapters.map(ch => ch.id)}
                      strategy={verticalListSortingStrategy}
                    >
                      <div className="space-y-2">
                        {chapters.map((chapter) => (
                          <ChapterItem
                            key={chapter.id}
                            chapter={chapter}
                            onDelete={handleDeleteChapter}
                            onEdit={handleEditChapter}
                            onSelect={setSelectedChapter}
                            isSelected={selectedChapter?.id === chapter.id}
                          />
                        ))}
                      </div>
                    </SortableContext>
                  </DndContext>

                  {chapters.length === 0 && (
                    <div className="text-center py-8 border-2 border-dashed rounded-lg">
                      <p className="text-sm text-muted-foreground mb-3">
                        Nenhum capítulo
                      </p>
                      <Button
                        size="sm"
                        onClick={() => setChapterModalOpen(true)}
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Criar Capítulo
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Coluna de Artigos */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-sm">Artigos</h3>
                <Button
                  size="sm"
                  onClick={handleNewArticle}
                  disabled={!selectedChapter}
                  className="h-8"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {!selectedChapter ? (
                <div className="text-center py-12 border-2 border-dashed rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Selecione um capítulo
                  </p>
                </div>
              ) : (
                <>
                  <DndContext
                    sensors={manualSensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEndArticles}
                  >
                    <SortableContext
                      items={articles.map(a => a.id)}
                      strategy={verticalListSortingStrategy}
                    >
                      <div className="space-y-2">
                        {/* Item de rascunho - aparece quando houver rascunho e um capítulo estiver selecionado */}
                        {hasDraft && draftValues && (() => {
                            const draftArticle = {
                              id: 'draft',
                              title: draftValues.title || 'Rascunho',
                              slug: draftValues.slug || 'Sem slug',
                                isDraft: true,
                                totalFeedback: 0,
                                helpfulCount: 0,
                                unhelpfulCount: 0,
                                helpfulPercentage: 0,
                              };
                              return (
                                <ArticleItem
                                  key="draft"
                                  article={draftArticle}
                                  onDelete={() => {
                                    setDiscardDialogOpen(true);
                                  }}
                                  onEdit={handleViewDraft}
                                  onSelect={handleViewDraft}
                                  isSelected={isViewingDraft}
                                />
                              );
                        })()}
                        
                        {articles.map((article) => (
                          <ArticleItem
                            key={article.id}
                            article={article}
                            onDelete={handleDeleteArticle}
                            onEdit={handleEditArticle}
                            onSelect={handleSelectArticleForFeedback}
                            isSelected={editingArticle?.id === article.id || selectedArticleForFeedback?.id === article.id}
                          />
                        ))}
                      </div>
                    </SortableContext>
                  </DndContext>

                  {articles.length === 0 && !hasDraft && (
                    <div className="text-center py-8 border-2 border-dashed rounded-lg">
                      <p className="text-sm text-muted-foreground mb-3">
                        Nenhum artigo
                      </p>
                      <Button
                        size="sm"
                        onClick={handleNewArticle}
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Criar Artigo
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Editor de Artigo Inline ou Visualização de Feedbacks */}
      {selectedChapter && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span>
                  {selectedArticleForFeedback 
                    ? `Feedbacks - ${selectedArticleForFeedback.title}` 
                    : editingArticle 
                      ? 'Editar Artigo' 
                      : 'Novo Artigo'
                  }
                </span>
                {isViewingDraft && (
                  <span className="text-xs px-2 py-0.5 bg-muted text-muted-foreground rounded-md font-medium">
                    Rascunho
                  </span>
                )}
              </div>
              <div className="flex gap-2">
                {selectedArticleForFeedback && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedArticleForFeedback(null);
                      setArticleFeedbacks([]);
                    }}
                  >
                    <X className="h-4 w-4 mr-2" />
                    Fechar
                  </Button>
                )}
                {!editingArticle && !selectedArticleForFeedback && (articleTitle || articleSlug || articleContent) && (
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => setDiscardDialogOpen(true)}
                    disabled={creating}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Descartar
                  </Button>
                )}
                {(editingArticle || articleTitle || articleSlug || articleContent) && !selectedArticleForFeedback && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCancelArticle}
                    disabled={creating}
                  >
                    <X className="h-4 w-4 mr-2" />
                    Cancelar
                  </Button>
                )}
                {!selectedArticleForFeedback && (
                  <Button
                    size="sm"
                    onClick={handleSaveArticle}
                    disabled={!articleTitle.trim() || !articleSlug.trim() || !articleContent.trim() || creating}
                  >
                    <Save className="h-4 w-4 mr-2" />
                    {creating ? 'Salvando...' : editingArticle ? 'Atualizar' : 'Criar'}
                  </Button>
                )}
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {selectedArticleForFeedback ? (
              // Visualização de feedbacks
              <div className="space-y-4">
                {loadingFeedbacks ? (
                  <div className="flex items-center justify-center py-12">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
                  </div>
                ) : !Array.isArray(articleFeedbacks) || articleFeedbacks.length === 0 ? (
                  <div className="text-center py-12 border-2 border-dashed rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      Nenhum feedback recebido para este artigo
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-sm">
                        <span className="font-semibold">{articleFeedbacks.length}</span> feedback(s) total
                      </div>
                      <div className="text-sm text-green-600">
                        <ThumbsUp className="h-4 w-4 inline mr-1" />
                        <span className="font-semibold">
                          {articleFeedbacks.filter(f => f.isHelpful).length}
                        </span> úteis
                      </div>
                      <div className="text-sm text-red-600">
                        <ThumbsDown className="h-4 w-4 inline mr-1" />
                        <span className="font-semibold">
                          {articleFeedbacks.filter(f => !f.isHelpful).length}
                        </span> não úteis
                      </div>
                    </div>
                    
                    {articleFeedbacks.map((feedback) => (
                      <div key={feedback.id} className="p-4 border rounded-lg bg-white">
                        <div className="flex items-start gap-3">
                          {/* Avatar do usuário */}
                          {feedback.userAvatarUrl ? (
                            <img 
                              src={feedback.userAvatarUrl} 
                              alt={feedback.userName}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
                              {feedback.userName?.charAt(0).toUpperCase() || '?'}
                            </div>
                          )}
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-sm font-medium text-gray-900">
                                {feedback.userName || 'Anônimo'}
                              </span>
                              <span className={`text-xs px-2 py-0.5 rounded-full ${
                                feedback.isHelpful 
                                  ? 'bg-green-100 text-green-700' 
                                  : 'bg-red-100 text-red-700'
                              }`}>
                                {feedback.isHelpful ? (
                                  <><ThumbsUp className="h-3 w-3 inline mr-1" />Útil</>
                                ) : (
                                  <><ThumbsDown className="h-3 w-3 inline mr-1" />Não útil</>
                                )}
                              </span>
                              {feedback.postedAt && (
                                <span className="text-xs text-muted-foreground">
                                  {new Date(feedback.postedAt).toLocaleString('pt-BR')}
                                </span>
                              )}
                            </div>
                            {feedback.comment ? (
                              <p className="text-sm text-gray-700">{feedback.comment}</p>
                            ) : (
                              <p className="text-sm text-muted-foreground italic">Sem comentário</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              // Editor de artigo
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="article-title">Título</Label>
                    <Input
                      id="article-title"
                      value={articleTitle}
                      onChange={(e) => handleArticleTitleChange(e.target.value)}
                      placeholder="Título do artigo"
                      disabled={creating}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="article-slug">Slug</Label>
                    <Input
                      id="article-slug"
                      value={articleSlug}
                      onChange={(e) => setArticleSlug(e.target.value)}
                      placeholder="slug-do-artigo"
                      disabled={creating}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Conteúdo</Label>
                  <MDXEditor
                    editorKey={`editor-${editorResetKey}`}
                    value={articleContent}
                    onChange={setArticleContent}
                    placeholder="Escreva o conteúdo do artigo..."
                  />
                </div>
              </>
            )}
          </CardContent>
        </Card>
      )}

      {/* Modais e Dialogs */}
      <CreateCategoryModal
        open={categoryModalOpen}
        onClose={() => setCategoryModalOpen(false)}
        onSubmit={handleCreateCategory}
        category={editingCategory}
        loading={creating}
      />

      <CreateChapterModal
        open={chapterModalOpen}
        onOpenChange={setChapterModalOpen}
        onSubmit={handleCreateChapter}
        editingChapter={editingChapter}
        loading={creating}
        categoryId={selectedCategory?.id}
      />

      {/* Diálogos de confirmação de exclusão */}
      <ConfirmDeleteDialog
        open={discardDialogOpen}
        onOpenChange={setDiscardDialogOpen}
        onConfirm={handleDiscardDraft}
        title={"Descartar rascunho?"}
        description={"Tem certeza que deseja descartar este rascunho? Todo o conteúdo será perdido e esta ação não pode ser desfeita."}
        confirmText={"Descartar"}
      />

      <ConfirmDeleteDialog
        open={deleteCategoryDialogOpen}
        onOpenChange={setDeleteCategoryDialogOpen}
        onConfirm={confirmDeleteCategory}
        title={"Confirmar exclusão"}
        description={"Tem certeza que deseja excluir esta categoria? Todos os capítulos e artigos também serão removidos. Esta ação não pode ser desfeita."}
        confirmText={"Excluir"}
      />

      <ConfirmDeleteDialog
        open={deleteChapterDialogOpen}
        onOpenChange={setDeleteChapterDialogOpen}
        onConfirm={confirmDeleteChapter}
        title={"Confirmar exclusão"}
        description={"Tem certeza que deseja excluir este capítulo? Todos os artigos também serão removidos. Esta ação não pode ser desfeita."}
        confirmText={"Excluir"}
      />

      <ConfirmDeleteDialog
        open={deleteArticleDialogOpen}
        onOpenChange={setDeleteArticleDialogOpen}
        onConfirm={confirmDeleteArticle}
        title={"Confirmar exclusão"}
        description={"Tem certeza que deseja excluir este artigo? Esta ação não pode ser desfeita."}
        confirmText={"Excluir"}
      />
    </div>
  );
}
