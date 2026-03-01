import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { formatDate } from '@/shared/utils/helpers';
import { Calendar, ArrowUpRight, User } from 'lucide-react';

export function NewsCard({ article }) {
  const coverImage = article.coverImage || article.imageUrl;
  const publishDate = article.publishDate || article.publishedAt;
  const rawSummary = article.summary || article.description || article.excerpt || '';
  const contentFallback = typeof article.content === 'string'
    ? article.content
        .replace(/[#>*_`\[\]()!~-]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 180)
    : '';
  const summary = (typeof rawSummary === 'string' ? rawSummary.trim() : '') || contentFallback;

  return (
    <Link to={`/noticias/${article.slug}`} className="group block h-full">
      <Card className="overflow-hidden h-full border-border/60 hover:border-primary/30 hover:shadow-md transition-all duration-300">
        {coverImage ? (
          <div className="aspect-video w-full overflow-hidden bg-muted relative">
            <img
              src={coverImage}
              alt={article.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          </div>
        ) : (
          <div className="aspect-video w-full bg-muted/60 flex items-center justify-center text-muted-foreground text-sm">
            Sem imagem de capa
          </div>
        )}

        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3 flex-wrap">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{formatDate(publishDate) || 'Data não informada'}</span>
            </div>
            {article.authorName && (
              <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                <span>{article.authorName}</span>
              </div>
            )}
          </div>

          <h3 className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors flex-1 leading-snug">
            {article.title}
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
            {summary || 'Sem resumo disponível.'}
          </p>

          <div className="pt-2 border-t border-border/60 flex items-center justify-between text-sm">
            <span className="text-primary font-medium">Ler notícia</span>
            <ArrowUpRight className="h-4 w-4 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

