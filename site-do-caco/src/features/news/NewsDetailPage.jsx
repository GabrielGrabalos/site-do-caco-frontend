import { Calendar } from 'lucide-react';
import { useNewsDetailVM } from './useNewsDetailVM';
import { MarkdownContent } from '@/shared/components/MarkdownContent';
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
          <p className="text-muted-foreground">
            {error || 'Notícia não encontrada'}
          </p>
        </div>
      </div>
    );
  }

  const publishDate = article.publishDate;

  return (
    <article className="container mx-auto px-4 py-8 max-w-3xl">
      <header className="mb-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {article.title}
        </h1>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Calendar className="h-4 w-4" />
          <span>{formatDate(publishDate)}</span>
        </div>

        <Separator className="mb-6" />
      </header>

      {article.summary && (
        <div className="bg-muted/50 border-l-4 border-primary p-4 mb-6 rounded-r-lg">
          <p className="text-base text-muted-foreground italic leading-relaxed">
            {article.summary}
          </p>
        </div>
      )}

      {article.coverImage && (
        <div className="w-full rounded-lg overflow-hidden my-16 bg-muted max-w-lg mx-auto">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-auto object-cover"
          />
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

