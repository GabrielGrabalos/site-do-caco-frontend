import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Loader2, Edit, PowerOff, Power, Trash2 } from 'lucide-react';

export function BannerItem({ banner, onDelete, onToggle, onEdit, isActive }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ 
    id: banner.id,
    disabled: banner.isLoading || !isActive,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={isActive ? setNodeRef : null}
      style={isActive ? style : {}}
      {...(isActive ? attributes : {})}
      {...(isActive ? listeners : {})}
      className={`relative ${isActive ? 'cursor-grab active:cursor-grabbing' : ''}`}
    >
      <div className={`w-full aspect-[21/9] rounded-lg overflow-hidden border-2 ${
        isActive ? 'border-green-500' : 'border-gray-300'
      } bg-muted hover:border-primary transition-colors ${
        banner.isLoading ? 'opacity-60' : ''
      } ${
        isDragging ? 'opacity-50' : ''
      }`}>
        <img
          src={banner.imageUrl}
          alt={banner.title}
          className="w-full h-full object-cover"
        />
        
        {banner.isLoading && (
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center rounded-lg">
            <div className="bg-white/90 rounded-full p-3 mb-2">
              <Loader2 className="h-6 w-6 md:h-8 md:w-8 animate-spin text-primary" />
            </div>
            {banner.uploadProgress !== undefined && (
              <div className="bg-white/90 px-3 py-1 rounded-full">
                <span className="text-xs md:text-sm font-semibold text-primary">
                  {banner.uploadProgress}%
                </span>
              </div>
            )}
          </div>
        )}
        
        {!banner.isLoading && (
          <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-1 rounded-lg">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEdit(banner);
              }}
              className="p-1.5 md:p-2 bg-blue-500/90 hover:bg-blue-500 text-white rounded-md cursor-pointer"
              title="Editar"
            >
              <Edit className="h-3 w-3 md:h-4 md:w-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggle(banner.id, isActive);
              }}
              className={`p-1.5 md:p-2 ${
                isActive ? 'bg-orange-500/90 hover:bg-orange-500' : 'bg-green-500/90 hover:bg-green-500'
              } text-white rounded-md cursor-pointer`}
              title={isActive ? 'Desativar' : 'Ativar'}
            >
              {isActive ? (
                <PowerOff className="h-3 w-3 md:h-4 md:w-4" />
              ) : (
                <Power className="h-3 w-3 md:h-4 md:w-4" />
              )}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(banner.id);
              }}
              className="p-1.5 md:p-2 bg-red-500/90 hover:bg-red-500 text-white rounded-md cursor-pointer"
            >
              <Trash2 className="h-3 w-3 md:h-4 md:w-4" />
            </button>
          </div>
        )}
      </div>
      <p className="text-xs text-center mt-1 truncate px-1">{banner.title}</p>
    </div>
  );
}
