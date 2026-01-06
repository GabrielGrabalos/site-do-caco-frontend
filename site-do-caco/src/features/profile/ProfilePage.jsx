import { useState } from 'react';
import { useProfileVM } from './useProfileVM';
import { useStickerAlbumVM } from '@/features/stickers/useStickerAlbumVM';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast.jsx';
import { User, Camera, Save } from 'lucide-react';
import { AlbumGrid } from '@/features/stickers/components/AlbumGrid';
import { RedeemInput } from '@/features/stickers/components/RedeemInput';
import { EditAvatarModal } from './components/EditAvatarModal';

export function ProfilePage() {
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
                {user?.role === 'ADMIN' && (
                  <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    Admin
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
        <CardHeader>
          <CardTitle>Meu Álbum de Figurinhas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Input de Resgate */}
          <RedeemInput
            onRedeem={stickerVM.redeemCode}
            loading={stickerVM.redeeming}
          />

          {/* Progresso */}
          {stickerVM.album && (
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-4">
                <div>
                  <p className="text-3xl font-bold text-primary">
                    {stickerVM.album.collectedCount}
                  </p>
                  <p className="text-sm text-muted-foreground">Coletadas</p>
                </div>
                <div className="text-2xl text-muted-foreground">/</div>
                <div>
                  <p className="text-3xl font-bold">
                    {stickerVM.album.totalCount}
                  </p>
                  <p className="text-sm text-muted-foreground">Total</p>
                </div>
              </div>
              
              <div className="w-full max-w-md mx-auto bg-muted rounded-full h-3 overflow-hidden">
                <div
                  className="bg-primary h-full transition-all duration-500"
                  style={{ width: `${(stickerVM.album.collectedCount / stickerVM.album.totalCount) * 100}%` }}
                />
              </div>
              
              <p className="text-sm text-muted-foreground">
                {Math.round((stickerVM.album.collectedCount / stickerVM.album.totalCount) * 100)}% completo
              </p>
            </div>
          )}

          {/* Grid de Figurinhas */}
          {stickerVM.loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
            </div>
          ) : stickerVM.error ? (
            <div className="text-center py-12 text-red-600">
              {stickerVM.error}
            </div>
          ) : (
            <AlbumGrid
              stickers={stickerVM.album?.stickers || []}
              onStickerClick={stickerVM.selectSticker}
            />
          )}
        </CardContent>
      </Card>

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
