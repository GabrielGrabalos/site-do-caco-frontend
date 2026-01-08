import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
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
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import { BannerItem } from './BannerItem';
import { CreateBannerModal } from './CreateBannerModal';
import { ConfirmDeleteDialog } from './ConfirmDeleteDialog';

export function BannersSection({ 
  activeBanners, 
  inactiveBanners, 
  loading, 
  creating,
  onReorder,
  onToggle,
  onCreate,
  onUpdate,
  onDelete
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [preservedModalData, setPreservedModalData] = useState(null);
  const [editingBanner, setEditingBanner] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [bannerToDelete, setBannerToDelete] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = async (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = activeBanners.findIndex((b) => b.id === active.id);
    const newIndex = activeBanners.findIndex((b) => b.id === over.id);
    if (oldIndex === -1 || newIndex === -1) return;

    const newOrder = arrayMove(activeBanners, oldIndex, newIndex);
    await onReorder(newOrder);
  };

  const handleEdit = (banner) => {
    setEditingBanner(banner);
    setPreservedModalData({
      title: banner.title,
      targetLink: banner.targetLink,
      imageUrl: banner.imageUrl,
    });
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    setBannerToDelete(id);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!bannerToDelete) return;
    await onDelete(bannerToDelete);
    setDeleteDialogOpen(false);
    setBannerToDelete(null);
  };

  const handleCreateBanner = async (bannerData) => {
    setModalOpen(false);
    setPreservedModalData(bannerData);
    
    const success = editingBanner 
      ? await onUpdate(editingBanner.id, bannerData)
      : await onCreate(bannerData);
    
    if (success) {
      setPreservedModalData(null);
      setEditingBanner(null);
    } else {
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setPreservedModalData(null);
    setEditingBanner(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        {/* Banners Ativos */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">Banners Ativos</CardTitle>
            <p className="text-xs md:text-sm text-muted-foreground">
              Arraste para reordenar. Use o botão para desativar.
            </p>
          </CardHeader>
          <CardContent>
            <SortableContext
              items={activeBanners.map(b => b.id)}
              strategy={rectSortingStrategy}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 pb-4">
                {activeBanners.map((banner) => (
                  <BannerItem
                    key={banner.id}
                    banner={banner}
                    onDelete={handleDelete}
                    onToggle={onToggle}
                    onEdit={handleEdit}
                    isActive={true}
                  />
                ))}

                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full aspect-[21/9] rounded-lg border-2 border-dashed border-primary/30 hover:border-primary hover:bg-primary/5 transition-colors flex items-center justify-center group"
                >
                  <Plus className="h-8 w-8 md:h-12 md:w-12 text-primary/50 group-hover:text-primary transition-colors" />
                </button>
              </div>
            </SortableContext>

            {activeBanners.length === 0 && (
              <div className="text-center py-8 md:py-12">
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  Nenhum banner ativo ainda.
                </p>
                <Button onClick={() => setModalOpen(true)} size="sm" className="md:h-10">
                  <Plus className="h-4 w-4 mr-2" />
                  Criar Primeiro Banner
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Banners Inativos */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="inactive-banners">
            <Card>
              <CardHeader className="pb-3">
                <AccordionTrigger className="hover:no-underline [&[data-state=open]>div]:mb-2">
                  <div className="flex-1">
                    <CardTitle className="text-lg md:text-xl text-left">
                      Banners Inativos ({inactiveBanners.length})
                    </CardTitle>
                    <p className="text-xs md:text-sm text-muted-foreground text-left">
                      Use o botão para ativar. Banners ativados vão para o final da lista ativa.
                    </p>
                  </div>
                </AccordionTrigger>
              </CardHeader>
              <AccordionContent>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 pb-4 min-h-[120px]">
                    {inactiveBanners.map((banner) => (
                      <BannerItem
                        key={banner.id}
                        banner={banner}
                        onDelete={handleDelete}
                        onToggle={onToggle}
                        onEdit={handleEdit}
                        isActive={false}
                      />
                    ))}
                  </div>

                  {inactiveBanners.length === 0 && (
                    <div className="text-center py-8 md:py-12">
                      <p className="text-sm md:text-base text-muted-foreground">
                        Nenhum banner inativo.
                      </p>
                    </div>
                  )}
                </CardContent>
              </AccordionContent>
            </Card>
          </AccordionItem>
        </Accordion>
      </DndContext>

      <ConfirmDeleteDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        onConfirm={confirmDelete}
        title="Confirmar exclusão"
        description="Tem certeza que deseja excluir este banner? Esta ação não pode ser desfeita."
      />

      <CreateBannerModal
        open={modalOpen}
        onClose={handleCloseModal}
        onCreate={handleCreateBanner}
        loading={creating}
        preservedData={preservedModalData}
      />
    </>
  );
}
