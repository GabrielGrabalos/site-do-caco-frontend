import { useNewsListVM } from './useNewsListVM';
import { NewsCard } from './components/NewsCard';
import { Button } from '@/components/ui/button';
import { Newspaper } from 'lucide-react';

export function NewsListPage() {
  const { news, loading, error, hasMore, loadMore } = useNewsListVM();

  if (loading && news.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  if (error && news.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Erro ao carregar notícias</h2>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-3">
          <Newspaper className="h-10 w-10 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold">Notícias</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Fique por dentro das últimas novidades do CACO
        </p>
      </div>

      {/* Empty State */}
      {news.length === 0 && !loading ? (
        <div className="text-center py-16">
          <Newspaper className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Nenhuma notícia disponível</h2>
          <p className="text-muted-foreground">Em breve teremos novidades para você!</p>
        </div>
      ) : (
        <>
          {/* Grid de Notícias */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {news.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="flex justify-center">
              <Button
                onClick={loadMore}
                disabled={loading}
                size="lg"
                className="min-w-[200px]"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
                    Carregando...
                  </>
                ) : (
                  'Carregar mais notícias'
                )}
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
