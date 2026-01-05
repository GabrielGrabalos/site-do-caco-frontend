import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/shared/utils/helpers';

export function LatestNews({ news = [] }) {
  if (news.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Últimas Notícias</h2>
        <Button variant="ghost" asChild>
          <Link to="/noticias">
            Ver todas <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-4">
        {news.map((article) => (
          <Link key={article.id} to={`/noticias/${article.slug}`}>
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row gap-4">
                  {article.imageUrl && (
                    <div className="md:w-64 h-48 md:h-auto flex-shrink-0">
                      <img
                        src={article.imageUrl}
                        alt={article.title}
                        className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                      />
                    </div>
                  )}
                  <div className="flex-1 p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span>{formatDate(article.publishedAt)}</span>
                      {article.author && (
                        <>
                          <span>•</span>
                          <span>{article.author}</span>
                        </>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2">
                      {article.summary}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
