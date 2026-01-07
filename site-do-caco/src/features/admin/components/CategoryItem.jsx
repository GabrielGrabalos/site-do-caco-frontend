import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Edit, Trash2, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CategoryItem({ category, onDelete, onEdit, onSelect, isSelected }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ 
    id: category.id,
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
        className={`p-4 rounded-lg border-2 transition-all ${
          isSelected 
            ? 'border-primary bg-primary/5' 
            : 'border-gray-200 hover:border-gray-300 bg-white'
        } ${isDragging ? 'opacity-50' : ''}`}
      >
        <div className="flex items-start justify-between gap-3">
          <div 
            className="flex-1 cursor-pointer"
            onClick={() => onSelect(category)}
          >
            <div className="flex items-center gap-2 mb-1">
              <Book className="h-4 w-4 text-primary" />
              <h3 className="font-semibold text-sm">{category.title}</h3>
            </div>
            <p className="text-xs text-muted-foreground">
              {category.chapterCount} {category.chapterCount === 1 ? 'capítulo' : 'capítulos'}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Slug: <span className="font-mono">{category.slug}</span>
            </p>
          </div>
          
          <div className="flex gap-1">
            <Button
              size="sm"
              variant="ghost"
              className="h-8 w-8 p-0"
              onClick={(e) => {
                e.stopPropagation();
                onEdit(category);
              }}
              title="Editar categoria"
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-8 w-8 p-0 text-destructive hover:text-destructive"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(category);
              }}
              title="Deletar categoria"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
