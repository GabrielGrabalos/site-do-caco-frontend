import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNewsDetailVM } from './useNewsDetailVM';
import { MarkdownContent } from '@/shared/components/MarkdownContent';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/shared/utils/helpers';
import { Separator } from '@/components/ui/separator';

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
          <p className="text-muted-foreground mb-4">
            {error || 'Notícia não encontrada'}
          </p>
          <Button asChild>
            <Link to="/noticias">Voltar para notícias</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 py-8 max-w-3xl">
      <Button variant="ghost" asChild className="mb-8 -ml-3">
        <Link to="/noticias">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para notícias
        </Link>
      </Button>

      {article.imageUrl && (
        <div className="aspect-video w-full rounded-lg overflow-hidden mb-8 bg-muted">
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
        <Separator className="mb-4" />
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(article.publishedAt)}</span>
          </div>
          {article.authorName && (
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{article.authorName}</span>
            </div>
          )}
        </div>
      </header>

      {article.summary && (
        <div className="bg-muted/50 border-l-4 border-primary p-4 mb-8 rounded-r-lg">
          <p className="text-base text-muted-foreground italic">
            {article.summary}
          </p>
        </div>
      )}

      <div className="prose prose-sm dark:prose-invert max-w-none">
        <MarkdownContent content={article.content} />
      </div>

      {article.updatedAt && (
        <div className="mt-12 pt-8 border-t text-xs text-muted-foreground">
          <p>Última atualização: {formatDate(article.updatedAt)}</p>
        </div>
      )}
    </article>
  );
}

