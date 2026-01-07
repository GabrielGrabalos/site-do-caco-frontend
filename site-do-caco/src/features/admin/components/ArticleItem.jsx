import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Edit, Trash2, FileText, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ArticleItem({ article, onDelete, onEdit, onSelect, isSelected = false }) {
  const isDraft = article.isDraft === true;
  
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ 
    id: article.id,
    disabled: isDraft, // Rascunho não pode ser arrastado
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...(!isDraft ? listeners : {})}
      className={isDraft ? '' : 'cursor-grab active:cursor-grabbing'}
    >
      <div 
        className={`p-3 rounded-lg border-2 transition-all ${
          isSelected 
            ? 'border-primary bg-primary/5' 
            : 'border-gray-200 hover:border-gray-300 bg-white'
        } ${isDragging ? 'opacity-50' : ''}`}
      >
        {isDraft && (
          <div className="mb-2">
            <span className="text-xs px-2 py-0.5 bg-amber-100 text-amber-800 rounded-md font-medium">
              Rascunho
            </span>
          </div>
        )}
        <div className="flex items-start justify-between gap-3">
          <div 
            className={`flex-1 ${!isDraft && onSelect ? 'cursor-pointer' : ''}`}
            onClick={() => !isDraft && onSelect && onSelect(article)}
          >
            <div className="flex items-center gap-2 mb-1">
              <FileText className="h-4 w-4 text-primary" />
              <h5 className="font-semibold text-sm">{article.title}</h5>
            </div>
            <p className="text-xs text-muted-foreground mb-2">
              Slug: <span className="font-mono">{article.slug}</span>
            </p>
            
            {!isDraft && article.totalFeedback > 0 && (
              <div className="flex items-center gap-3 text-xs">
                <div className="flex items-center gap-1 text-green-600">
                  <ThumbsUp className="h-3 w-3" />
                  <span>{article.helpfulCount}</span>
                </div>
                <div className="flex items-center gap-1 text-red-600">
                  <ThumbsDown className="h-3 w-3" />
                  <span>{article.unhelpfulCount}</span>
                </div>
                <span className="text-muted-foreground">
                  ({article.helpfulPercentage}% útil)
                </span>
              </div>
            )}
          </div>
          
          <div className="flex gap-1">
            <Button
              size="sm"
              variant="ghost"
              className="h-7 w-7 p-0"
              onClick={(e) => {
                e.stopPropagation();
                onEdit(article);
              }}
              title={isDraft ? "Editar rascunho" : "Editar artigo"}
            >
              <Edit className="h-3.5 w-3.5" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-7 w-7 p-0 text-destructive hover:text-destructive"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(article);
              }}
              title={isDraft ? "Excluir rascunho" : "Deletar artigo"}
            >
              <Trash2 className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
