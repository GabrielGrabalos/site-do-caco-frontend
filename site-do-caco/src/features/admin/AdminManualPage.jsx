import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Plus } from 'lucide-react';
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
import { CreateArticleModal } from './components/CreateArticleModal';

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

  // Estados para artigos
  const [articleModalOpen, setArticleModalOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);
  const [deleteArticleDialogOpen, setDeleteArticleDialogOpen] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState(null);

  const { toast } = useToast();

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

  const handleCreateArticle = async (articleData) => {
    const result = editingArticle
      ? await updateArticle(editingArticle.id, articleData)
      : await createArticle(articleData);
    
    if (result.success) {
      setArticleModalOpen(false);
      setEditingArticle(null);
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

  const handleEditArticle = (article) => {
    setEditingArticle(article);
    setArticleModalOpen(true);
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
            Manual do Calouro
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
                  onClick={() => setArticleModalOpen(true)}
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
                        {articles.map((article) => (
                          <ArticleItem
                            key={article.id}
                            article={article}
                            onDelete={handleDeleteArticle}
                            onEdit={handleEditArticle}
                          />
                        ))}
                      </div>
                    </SortableContext>
                  </DndContext>

                  {articles.length === 0 && (
                    <div className="text-center py-8 border-2 border-dashed rounded-lg">
                      <p className="text-sm text-muted-foreground mb-3">
                        Nenhum artigo
                      </p>
                      <Button
                        size="sm"
                        onClick={() => setArticleModalOpen(true)}
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

      {/* Modais e Dialogs */}
      <CreateCategoryModal
        open={categoryModalOpen}
        onOpenChange={setCategoryModalOpen}
        onSubmit={handleCreateCategory}
        editingCategory={editingCategory}
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

      <CreateArticleModal
        open={articleModalOpen}
        onOpenChange={setArticleModalOpen}
        onSubmit={handleCreateArticle}
        editingArticle={editingArticle}
        loading={creating}
        chapterId={selectedChapter?.id}
      />

      <AlertDialog open={deleteCategoryDialogOpen} onOpenChange={setDeleteCategoryDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir esta categoria? Todos os capítulos e artigos também serão removidos. Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setCategoryToDelete(null)}>
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmDeleteCategory}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={deleteChapterDialogOpen} onOpenChange={setDeleteChapterDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir este capítulo? Todos os artigos também serão removidos. Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setChapterToDelete(null)}>
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmDeleteChapter}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={deleteArticleDialogOpen} onOpenChange={setDeleteArticleDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir este artigo? Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setArticleToDelete(null)}>
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmDeleteArticle}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
