import React from 'react';
import { useToast } from '@/components/ui/use-toast.jsx';
import { useAdminBannersVM } from './banner/useAdminBannersVM';
import { useAdminWarningsVM } from './warning/useAdminWarningsVM';
import { BannersSection } from './banner/components/BannersSection';
import { WarningsSection } from './warning/components/WarningsSection';

export function AdminDashboard() {
  const { toast } = useToast();

  // ViewModels para cada seção
  const bannersVM = useAdminBannersVM();
  const warningsVM = useAdminWarningsVM();
  
  // Handlers para Banners com feedback de toast
  const handleReorderBanners = async (newOrder) => {
    const result = await bannersVM.reorderActiveBanners(newOrder);
    if (!result.success) {
      toast({
        variant: 'destructive',
        title: 'Erro ao reordenar',
        description: result.error,
      });
    }
    return result.success;
  };

  const handleToggleBanner = async (id, isCurrentlyActive) => {
    const result = await bannersVM.toggleBannerStatus(id, isCurrentlyActive);
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

  const handleCreateBanner = async (bannerData) => {
    const result = await bannersVM.createBanner(bannerData);
    if (result.success) {
      toast({
        title: 'Banner criado!',
        description: 'O banner foi adicionado com sucesso.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao criar banner',
        description: result.error,
      });
    }
    return result.success;
  };

  const handleUpdateBanner = async (id, bannerData) => {
    const result = await bannersVM.updateBanner(id, bannerData);
    if (result.success) {
      toast({
        title: 'Banner atualizado!',
        description: 'O banner foi atualizado com sucesso.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao atualizar banner',
        description: result.error,
      });
    }
    return result.success;
  };

  const handleDeleteBanner = async (id) => {
    const result = await bannersVM.deleteBanner(id);
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

  if (bannersVM.loading || warningsVM.loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-4 md:space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold">Dashboard Admin</h1>

      <BannersSection
        activeBanners={bannersVM.activeBanners}
        inactiveBanners={bannersVM.inactiveBanners}
        loading={bannersVM.loading}
        creating={bannersVM.creating}
        onReorder={handleReorderBanners}
        onToggle={handleToggleBanner}
        onCreate={handleCreateBanner}
        onUpdate={handleUpdateBanner}
        onDelete={handleDeleteBanner}
      />

      <WarningsSection
        activeWarnings={warningsVM.activeWarnings}
        expiredWarnings={warningsVM.expiredWarnings}
        allActiveWarnings={warningsVM.allActiveWarnings}
        allExpiredWarnings={warningsVM.allExpiredWarnings}
        loading={warningsVM.loading}
        creating={warningsVM.creating}
        activeFilter={warningsVM.activeFilter}
        expiredFilter={warningsVM.expiredFilter}
        onActiveFilterChange={warningsVM.setActiveFilter}
        onExpiredFilterChange={warningsVM.setExpiredFilter}
        onCreate={warningsVM.createWarning}
        onUpdate={warningsVM.updateWarning}
        onDelete={warningsVM.deleteWarning}
        onExpire={warningsVM.expireWarning}
      />
    </div>
  );
}