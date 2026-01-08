import { BookOpen, ChevronRight, ThumbsUp, ThumbsDown, Menu } from 'lucide-react';
import { useManualVM } from './useManualVM';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { MarkdownContent } from '@/shared/components/MarkdownContent';
import { ManualSidebar } from './components/ManualSidebar';
import { FeedbackSection } from './components/FeedbackSection';
import { useState } from 'react';

export function ManualPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const {
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
  } = useManualVM();

  // Fechar menu mobile ao selecionar artigo
  const handleSelectArticle = (article) => {
    selectArticle(article);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="border-b bg-transparent">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="flex flex-col items-center text-center gap-2 sm:gap-3">
            <BookOpen className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-primary" />
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">Manual do Calouro</h1>
              <p className="text-sm sm:text-base text-muted-foreground mt-1">
                Tudo que você precisa saber sobre a vida universitária
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 sm:py-6 lg:py-8">
        {/* Botão do menu mobile */}
        <div className="lg:hidden mb-4">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full">
                <Menu className="h-4 w-4 mr-2" />
                Navegar pelo Manual
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0 flex flex-col">
              <SheetHeader className="px-6 pt-6 pb-4 border-b">
                <SheetTitle>Manual do Calouro</SheetTitle>
              </SheetHeader>
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <ManualSidebar
                  categories={categories}
                  selectedCategory={selectedCategory}
                  chapters={chapters}
                  selectedChapter={selectedChapter}
                  articles={articles}
                  selectedArticle={selectedArticle}
                  loading={loading}
                  onSelectCategory={selectCategory}
                  onSelectChapter={selectChapter}
                  onSelectArticle={handleSelectArticle}
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar - Desktop only */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="lg:sticky lg:top-4">
              <Card className="p-4">
                <ManualSidebar
                  categories={categories}
                  selectedCategory={selectedCategory}
                  chapters={chapters}
                  selectedChapter={selectedChapter}
                  articles={articles}
                  selectedArticle={selectedArticle}
                  loading={loading}
                  onSelectCategory={selectCategory}
                  onSelectChapter={selectChapter}
                  onSelectArticle={selectArticle}
                />
              </Card>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9">
            {!selectedArticle && !loadingArticle && !error && (
              <Card className="p-6 sm:p-12">
                <div className="text-center max-w-2xl mx-auto">
                  {/* Espaço para imagem decorativa */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-lg bg-muted/30 flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                      <span className="text-muted-foreground/40 text-sm">Imagem decorativa</span>
                    </div>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-2">
                    Bem-vindo ao Manual do Calouro
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Selecione uma categoria e artigo no menu lateral para começar a leitura.
                    Aqui você encontrará informações essenciais sobre a vida universitária.
                  </p>
                </div>
              </Card>
            )}

            {loadingArticle && (
              <Card className="p-12">
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
                </div>
              </Card>
            )}

            {error && (
              <Card className="p-12">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-destructive mb-2">
                    Erro
                  </h2>
                  <p className="text-muted-foreground">{error}</p>
                </div>
              </Card>
            )}

            {selectedArticle && !loadingArticle && (
              <div className="space-y-6">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{selectedArticle.categoryTitle}</span>
                  <ChevronRight className="h-4 w-4" />
                  <span>{selectedArticle.chapterTitle}</span>
                  <ChevronRight className="h-4 w-4" />
                  <span className="text-foreground font-medium">
                    {selectedArticle.title}
                  </span>
                </div>

                {/* Article Content */}
                <Card className="p-4 sm:p-8">
                  <article>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                      {selectedArticle.title}
                    </h1>

                    {/* Feedback Stats */}
                    {(selectedArticle.helpfulCount > 0 ||
                      selectedArticle.unhelpfulCount > 0) && (
                      <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4 text-green-600" />
                          <span>{selectedArticle.helpfulCount}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ThumbsDown className="h-4 w-4 text-red-600" />
                          <span>{selectedArticle.unhelpfulCount}</span>
                        </div>
                      </div>
                    )}

                    <div className="prose prose-lg max-w-none">
                      <MarkdownContent content={selectedArticle.content} />
                    </div>
                  </article>
                </Card>

                {/* Feedback Section */}
                <Card className="p-6">
                  <FeedbackSection
                    onSubmit={submitFeedback}
                    submitted={feedbackSubmitted}
                    pendingFeedback={pendingFeedback}
                  />
                </Card>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
