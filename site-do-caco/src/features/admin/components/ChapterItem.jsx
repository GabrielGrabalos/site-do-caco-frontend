import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Edit, Trash2, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ChapterItem({ chapter, onDelete, onEdit, onSelect, isSelected }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ 
    id: chapter.id,
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
      {...listeners}
      className="cursor-grab active:cursor-grabbing"
    >
      <div 
        className={`p-3 rounded-lg border-2 transition-all ${
          isSelected 
            ? 'border-primary bg-primary/5' 
            : 'border-gray-200 hover:border-gray-300 bg-white'
        } ${isDragging ? 'opacity-50' : ''}`}
      >
        <div className="flex items-start justify-between gap-3">
          <div 
            className="flex-1 cursor-pointer"
            onClick={() => onSelect(chapter)}
          >
            <div className="flex items-center gap-2 mb-1">
              <FileText className="h-4 w-4 text-primary" />
              <h4 className="font-semibold text-sm">{chapter.title}</h4>
            </div>
            <p className="text-xs text-muted-foreground">
              {chapter.articleCount} {chapter.articleCount === 1 ? 'artigo' : 'artigos'}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Slug: <span className="font-mono">{chapter.slug}</span>
            </p>
          </div>
          
          <div className="flex gap-1">
            <Button
              size="sm"
              variant="ghost"
              className="h-7 w-7 p-0"
              onClick={(e) => {
                e.stopPropagation();
                onEdit(chapter);
              }}
              title="Editar capítulo"
            >
              <Edit className="h-3.5 w-3.5" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-7 w-7 p-0 text-destructive hover:text-destructive"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(chapter);
              }}
              title="Deletar capítulo"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
