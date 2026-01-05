import { useNewsListVM } from './useNewsListVM';
import { NewsCard } from './components/NewsCard';
import { Button } from '@/components/ui/button';

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
          <h2 className="text-2xl font-bold text-red-600 mb-2">Erro</h2>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Notícias</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {news.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center">
          <Button
            onClick={loadMore}
            disabled={loading}
            size="lg"
          >
            {loading ? 'Carregando...' : 'Carregar mais'}
          </Button>
        </div>
      )}
    </div>
  );
}
