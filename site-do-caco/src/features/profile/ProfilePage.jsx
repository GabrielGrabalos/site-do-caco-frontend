import { useState } from 'react';
import { useProfileVM } from './useProfileVM';
import { usePageTitle } from '@/shared/hooks/usePageTitle';
import { useStickerAlbumVM } from '@/features/stickers/useStickerAlbumVM';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast.jsx';
import { User, Camera, Save } from 'lucide-react';
import { StickerItem } from '@/features/stickers/components/StickerItem';
import { StickerModal } from '@/features/stickers/components/StickerModal';
import { Link } from 'react-router-dom';
import { EditAvatarModal } from './components/EditAvatarModal';

export function ProfilePage() {
  usePageTitle('Meu Perfil');
  const { user, loading, updating, uploadProgress, updateProfile } = useProfileVM();
  const stickerVM = useStickerAlbumVM();
  const { toast } = useToast();
  
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingAvatar, setIsEditingAvatar] = useState(false);
  const [selectedAvatarFile, setSelectedAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
  });

  const ownedStickers = stickerVM.myStickers
    .map((userSticker) => {
      const sticker = userSticker?.sticker
        || stickerVM.allStickers.find((s) => s.id === (userSticker?.stickerId || userSticker?.id));

      if (!sticker) return null;

      return { sticker, userSticker };
    })
    .filter(Boolean);

  const handleEdit = () => {
    setFormData({
      name: user.name || '',
    });
    setSelectedAvatarFile(null);
    setAvatarPreview(null);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData({ name: '' });
    setSelectedAvatarFile(null);
    setAvatarPreview(null);
  };

  const handleAvatarSelected = (avatarFile) => {
    setSelectedAvatarFile(avatarFile);
    
    // Cria preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatarPreview(reader.result);
    };
    reader.readAsDataURL(avatarFile);
    
    setIsEditingAvatar(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Se tem arquivo de avatar selecionado, envia com FormData
    const dataToSend = selectedAvatarFile 
      ? { name: formData.name, avatarFile: selectedAvatarFile }
      : formData;
    
    const result = await updateProfile(dataToSend);
    
    if (result.success) {
      toast({
        title: 'Perfil atualizado!',
        description: 'Suas informações foram atualizadas com sucesso.',
      });
      setIsEditing(false);
      setSelectedAvatarFile(null);
      setAvatarPreview(null);
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao atualizar',
        description: result.error || 'Não foi possível atualizar seu perfil.',
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
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Seção de Perfil */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Meu Perfil
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col items-center gap-4">
                {/* Avatar Preview com botão de edição */}
                <div className="relative">
                  {avatarPreview ? (
                    <img
                      src={avatarPreview}
                      alt="Avatar preview"
                      className="w-32 h-32 rounded-full object-cover border-4 border-primary"
                    />
                  ) : user?.avatarUrl ? (
                    <img
                      src={user.avatarUrl}
                      alt="Avatar"
                      className="w-32 h-32 rounded-full object-cover border-4 border-primary"
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center border-4 border-primary">
                      <User className="h-16 w-16 text-primary" />
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => setIsEditingAvatar(true)}
                    className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-2 hover:bg-primary/90 transition-colors"
                  >
                    <Camera className="h-5 w-5" />
                  </button>
                </div>

                {/* Form Fields */}
                <div className="w-full max-w-md space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nome</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Seu nome"
                      required
                    />
                  </div>

                  {/* Indicador de progresso */}
                  {updating && uploadProgress > 0 && (
                    <div className="space-y-2">
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-primary h-full transition-all duration-300"
                          style={{ width: `${uploadProgress}%` }}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground text-center">
                        Enviando: {uploadProgress}%
                      </p>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <Button type="submit" disabled={updating} className="flex-1">
                      <Save className="h-4 w-4 mr-2" />
                      {updating ? 'Salvando...' : 'Salvar'}
                    </Button>
                    <Button type="button" variant="outline" onClick={handleCancel} disabled={updating}>
                      Cancelar
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          ) : (
            <div className="flex flex-col items-center gap-4">
              {/* Avatar Display */}
              {user?.avatarUrl ? (
                <img
                  src={user.avatarUrl}
                  alt={user.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-primary"
                />
              ) : (
                <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center border-4 border-primary">
                  <User className="h-16 w-16 text-primary" />
                </div>
              )}

              {/* User Info */}
              <div className="text-center">
                <h2 className="text-2xl font-bold">{user?.name}</h2>
                <p className="text-muted-foreground">{user?.email}</p>
                {(user?.role === 'ADMIN' || user?.role === 'SUPER_ADMIN') && (
                  <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {user.role === 'SUPER_ADMIN' ? 'Super Admin' : 'Admin'}
                  </span>
                )}
              </div>

              <Button onClick={handleEdit}>
                Editar Perfil
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Seção de Figurinhas */}
      <Card>
        <CardHeader className="pb-4">
          <div className="flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <CardTitle className="w-full text-xl sm:text-2xl">Meu Álbum de Figurinhas</CardTitle>
            <Button asChild className="w-full sm:w-auto">
              <Link to="/figurinhas/resgatar">
                Adicionar figurinha
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 p-4 sm:space-y-6 sm:p-6">
          {/* Grid de Figurinhas */}
          {stickerVM.loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
            </div>
          ) : stickerVM.error ? (
            <div className="text-center py-12 text-red-600">
              {stickerVM.error}
            </div>
          ) : ownedStickers.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              Você ainda não tem figurinhas. Participe dos eventos para conseguir suas primeiras!
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
              {ownedStickers.map(({ sticker, userSticker }) => (
                <div
                  key={userSticker.id || `${sticker.id}-${userSticker.obtainedAt || ''}`}
                  className="relative aspect-square rounded-lg border-2 border-primary/30 transition-all hover:shadow-lg"
                >
                  <button
                    onClick={() => stickerVM.openStickerModal(sticker, userSticker)}
                    className="w-full h-full focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <StickerItem sticker={sticker} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <StickerModal
        sticker={stickerVM.selectedSticker}
        open={!!stickerVM.selectedSticker}
        onClose={stickerVM.closeStickerModal}
      />

      {/* Modal de Edição de Avatar */}
      <EditAvatarModal
        open={isEditingAvatar}
        onClose={() => setIsEditingAvatar(false)}
        onSave={handleAvatarSelected}
        currentAvatarUrl={avatarPreview || user?.avatarUrl}
      />
    </div>
  );
}
