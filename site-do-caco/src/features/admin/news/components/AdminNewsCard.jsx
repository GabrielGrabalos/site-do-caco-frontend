import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/shared/utils/helpers';
import { Calendar, Edit, Trash2 } from 'lucide-react';

export function AdminNewsCard({ article, onEdit, onDelete, disabled }) {
  const rawSummary = article.summary || '';
  const contentFallback = typeof article.content === 'string'
    ? article.content
        .replace(/[#>*_`\[\]()!~-]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 180)
    : '';
  const summary = rawSummary.trim() || contentFallback;

  return (
    <Card className="overflow-hidden h-full border-border/60 hover:border-primary/30 hover:shadow-md transition-all duration-300 flex flex-col">
      {article.coverImage ? (
        <div className="aspect-video w-full overflow-hidden bg-muted">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="aspect-video w-full bg-muted/60 flex items-center justify-center text-muted-foreground text-sm">
          Sem imagem de capa
        </div>
      )}

      <CardContent className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold line-clamp-2 leading-tight h-14 mb-2">
          {article.title}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed flex-grow mb-3">
          {summary || 'Sem resumo disponível.'}
        </p>

        <div className="flex items-center gap-3 text-xs text-muted-foreground flex-wrap pt-3 border-t border-border/50">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            <span>{formatDate(article.publishDate) || 'Data não informada'}</span>
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onEdit(article)}
            disabled={disabled}
            className="flex-1"
          >
            <Edit className="h-4 w-4 mr-2" />
            Editar
          </Button>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => onDelete(article)}
            disabled={disabled}
            className="flex-1"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Excluir
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
