import { useManualVM } from './useManualVM';
import { ManualSidebar } from './components/ManualSidebar';
import { Breadcrumb } from './components/Breadcrumb';
import { FeedbackWidget } from './components/FeedbackWidget';
import { MarkdownContent } from '@/shared/components/MarkdownContent';

export function ManualPage() {
  const { tree, article, loading, error, feedbackSubmitted, submitFeedback } =
    useManualVM();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar - 25% */}
        <aside className="lg:col-span-1">
          {loading && tree.length === 0 ? (
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-muted rounded" />
              <div className="h-6 bg-muted rounded" />
              <div className="h-6 bg-muted rounded" />
            </div>
          ) : (
            <ManualSidebar tree={tree} />
          )}
        </aside>

        {/* Content - 75% */}
        <main className="lg:col-span-3">
          {!article && !loading && (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
              <h2 className="text-2xl font-bold mb-4">
                Bem-vindo ao Manual do Calouro
              </h2>
              <p className="text-muted-foreground">
                Selecione um artigo no menu lateral para começar
              </p>
            </div>
          )}

          {loading && article === null && (
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
            </div>
          )}

          {error && (
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-red-600 mb-2">Erro</h2>
                <p className="text-muted-foreground">{error}</p>
              </div>
            </div>
          )}

          {article && !loading && (
            <article className="space-y-6">
              <Breadcrumb path={article.path} />

              <h1 className="text-4xl font-bold">{article.title}</h1>

              <div className="prose prose-lg max-w-none">
                <MarkdownContent content={article.content} />
              </div>

              <div className="pt-8 border-t">
                <FeedbackWidget
                  onSubmit={submitFeedback}
                  submitted={feedbackSubmitted}
                />
              </div>
            </article>
          )}
        </main>
      </div>
    </div>
  );
}
