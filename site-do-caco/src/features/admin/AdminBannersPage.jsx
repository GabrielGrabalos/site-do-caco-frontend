import { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  horizontalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useAdminBannersVM } from './useAdminBannersVM';
import { CreateBannerModal } from './components/CreateBannerModal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, GripVertical, Trash2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast.jsx';

function SortableBannerItem({ banner, onDelete }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: banner.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="relative group"
    >
      <div className="w-48 aspect-[21/9] rounded-lg overflow-hidden border-2 border-border bg-muted hover:border-primary transition-colors">
        <img
          src={banner.imageUrl}
          alt={banner.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <button
            {...attributes}
            {...listeners}
            className="p-2 bg-white/90 hover:bg-white rounded-md cursor-grab active:cursor-grabbing"
          >
            <GripVertical className="h-4 w-4" />
          </button>
          <button
            onClick={() => onDelete(banner.id)}
            className="p-2 bg-red-500/90 hover:bg-red-500 text-white rounded-md"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
      <p className="text-xs text-center mt-1 truncate px-1">{banner.title}</p>
    </div>
  );
}

export function AdminBannersPage() {
  const { banners, loading, creating, createBanner, reorderBanners, deleteBanner } = useAdminBannersVM();
  const [modalOpen, setModalOpen] = useState(false);
  const { toast } = useToast();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = async (event) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = banners.findIndex((b) => b.id === active.id);
    const newIndex = banners.findIndex((b) => b.id === over.id);

    const newOrder = arrayMove(banners, oldIndex, newIndex);
    
    const result = await reorderBanners(newOrder);
    
    if (!result.success) {
      toast({
        variant: 'destructive',
        title: 'Erro ao reordenar',
        description: result.error,
      });
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Tem certeza que deseja excluir este banner?')) return;

    const result = await deleteBanner(id);
    
    if (result.success) {
      toast({
        title: 'Banner excluído',
        description: 'O banner foi removido com sucesso.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao excluir',
        description: result.error,
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Gerenciar Banners</CardTitle>
          <p className="text-sm text-muted-foreground">
            Arraste os banners para reordenar. A ordem aqui é a ordem que aparecerá no site.
          </p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto pb-4">
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <div className="flex gap-4 items-start min-w-min">
                <SortableContext
                  items={banners.map(b => b.id)}
                  strategy={horizontalListSortingStrategy}
                >
                  {banners.map((banner) => (
                    <SortableBannerItem
                      key={banner.id}
                      banner={banner}
                      onDelete={handleDelete}
                    />
                  ))}
                </SortableContext>

                {/* Botão de adicionar */}
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-48 aspect-[21/9] rounded-lg border-2 border-dashed border-primary/30 hover:border-primary hover:bg-primary/5 transition-colors flex items-center justify-center group"
                >
                  <Plus className="h-12 w-12 text-primary/50 group-hover:text-primary transition-colors" />
                </button>
              </div>
            </DndContext>
          </div>

          {banners.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">
                Nenhum banner cadastrado ainda.
              </p>
              <Button onClick={() => setModalOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Criar Primeiro Banner
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <CreateBannerModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onCreate={createBanner}
        loading={creating}
      />
    </div>
  );
}
