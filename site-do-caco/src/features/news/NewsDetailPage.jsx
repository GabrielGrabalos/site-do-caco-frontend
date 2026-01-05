import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNewsDetailVM } from './useNewsDetailVM';
import { MarkdownContent } from '@/shared/components/MarkdownContent';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/shared/utils/helpers';

export function NewsDetailPage() {
  const { article, loading, error } = useNewsDetailVM();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Erro</h2>
          <p className="text-muted-foreground">
            {error || 'Notícia não encontrada'}
          </p>
          <Button asChild className="mt-4">
            <Link to="/noticias">Voltar para notícias</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <Button variant="ghost" asChild className="mb-6">
        <Link to="/noticias">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para notícias
        </Link>
      </Button>

      {article.imageUrl && (
        <div className="aspect-video w-full rounded-lg overflow-hidden mb-8">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {article.title}
        </h1>
        <div className="flex items-center gap-3 text-muted-foreground">
          <span>{formatDate(article.publishedAt)}</span>
          {article.author && (
            <>
              <span>•</span>
              <span>Por {article.author}</span>
            </>
          )}
        </div>
      </header>

      <div className="mb-8">
        <MarkdownContent content={article.content} />
      </div>
    </article>
  );
}
