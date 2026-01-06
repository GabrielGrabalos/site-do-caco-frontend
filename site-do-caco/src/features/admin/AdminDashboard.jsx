import { useState } from 'react';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, FileText, Calendar, Image, Plus } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast.jsx';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
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
import { useAdminBannersVM } from './useAdminBannersVM';
import { CreateBannerModal } from './components/CreateBannerModal';
import { BannerItem } from './components/BannerItem';

export function AdminDashboard() {
  const stats = [
    { title: 'Usuários', value: '1,234', icon: Users, color: 'text-blue-600' },
    { title: 'Notícias', value: '45', icon: FileText, color: 'text-green-600' },
    { title: 'Eventos', value: '12', icon: Calendar, color: 'text-purple-600' },
    { title: 'Figurinhas', value: '28', icon: Image, color: 'text-orange-600' },
  ];

  const { 
    activeBanners, 
    inactiveBanners, 
    loading, 
    creating, 
    createBanner,
    updateBanner, 
    reorderActiveBanners, 
    toggleBannerStatus,
    deleteBanner 
  } = useAdminBannersVM();
  
  const [modalOpen, setModalOpen] = useState(false);
  const [preservedModalData, setPreservedModalData] = useState(null);
  const [editingBanner, setEditingBanner] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [bannerToDelete, setBannerToDelete] = useState(null);
  const { toast } = useToast();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // Precisa arrastar 8px antes de iniciar o drag
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
    
    const result = await reorderActiveBanners(newOrder);
    
    if (!result.success) {
      toast({
        variant: 'destructive',
        title: 'Erro ao reordenar',
        description: result.error,
      });
    }
  };

  const handleToggle = async (id, isCurrentlyActive) => {
    const result = await toggleBannerStatus(id, isCurrentlyActive);
    
    if (result.success) {
      toast({
        title: isCurrentlyActive ? 'Banner desativado' : 'Banner ativado',
        description: isCurrentlyActive 
          ? 'O banner foi desativado.' 
          : 'O banner foi ativado e adicionado ao final da lista.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao alterar status',
        description: result.error,
      });
    }
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

  const handleDelete = async (id) => {
    setBannerToDelete(id);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!bannerToDelete) return;

    const result = await deleteBanner(bannerToDelete);
    
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
    
    setDeleteDialogOpen(false);
    setBannerToDelete(null);
  };

  const handleCreateBanner = async (bannerData) => {
    // Fecha o modal imediatamente
    setModalOpen(false);
    
    // Preserva os dados em caso de erro
    setPreservedModalData(bannerData);
    
    // Cria ou atualiza o banner
    const result = editingBanner 
      ? await updateBanner(editingBanner.id, bannerData)
      : await createBanner(bannerData);
    
    if (result.success) {
      // Limpa os dados preservados
      setPreservedModalData(null);
      setEditingBanner(null);
      
      toast({
        title: editingBanner ? 'Banner atualizado!' : 'Banner criado!',
        description: editingBanner 
          ? 'O banner foi atualizado com sucesso.'
          : 'O banner foi adicionado com sucesso.',
      });
    } else {
      // Reabre o modal com os dados preservados
      setModalOpen(true);
      
      toast({
        variant: 'destructive',
        title: editingBanner ? 'Erro ao atualizar banner' : 'Erro ao criar banner',
        description: result.error,
      });
    }
    
    return result;
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setPreservedModalData(null);
    setEditingBanner(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-4 md:space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold">Dashboard Admin</h1>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Seções de Banners Ativos e Inativos */}
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
                    onToggle={handleToggle}
                    onEdit={handleEdit}
                    isActive={true}
                  />
                ))}

                {/* Botão de adicionar */}
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
        <Card>
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">Banners Inativos</CardTitle>
            <p className="text-xs md:text-sm text-muted-foreground">
              Use o botão para ativar. Banners ativados vão para o final da lista ativa.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 pb-4 min-h-[120px]">
              {inactiveBanners.map((banner) => (
                <BannerItem
                  key={banner.id}
                  banner={banner}
                  onDelete={handleDelete}
                  onToggle={handleToggle}
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
        </Card>
      </DndContext>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir este banner? Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setBannerToDelete(null)}>
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <CreateBannerModal
        open={modalOpen}
        onClose={handleCloseModal}
        onCreate={handleCreateBanner}
        loading={creating}
        preservedData={preservedModalData}
      />
    </div>
  );
}
