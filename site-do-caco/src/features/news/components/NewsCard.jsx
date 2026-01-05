import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { formatDate } from '@/shared/utils/helpers';

export function NewsCard({ article }) {
  return (
    <Link to={`/noticias/${article.slug}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
        {article.imageUrl && (
          <div className="aspect-video w-full overflow-hidden">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <CardContent className="p-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <span>{formatDate(article.publishedAt)}</span>
            {article.author && (
              <>
                <span>•</span>
                <span>{article.author}</span>
              </>
            )}
          </div>
          <h3 className="text-xl font-semibold mb-2 line-clamp-2 hover:text-primary transition-colors">
            {article.title}
          </h3>
          <p className="text-muted-foreground line-clamp-3">
            {article.summary}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
