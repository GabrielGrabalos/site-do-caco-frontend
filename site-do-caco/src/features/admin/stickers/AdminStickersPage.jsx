import { useState } from 'react';
import { useAdminStickersVM } from './useAdminStickersVM';
import { StickerForm } from './components/StickerForm';
import { StickersList } from './components/StickersList';
import { CodesGenerator } from './components/CodesGenerator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Plus, Search, X, PenTool, Trash2 } from 'lucide-react';

export function AdminStickersPage() {
  const vm = useAdminStickersVM();
  const [showCodesDialog, setShowCodesDialog] = useState(false);

  // Renderiza formulário de criação/edição
  if (vm.viewMode === 'FORM') {
    return (
      <StickerForm
        key={vm.selectedSticker?.id || 'new-sticker'}
        initialData={vm.selectedSticker}
        onSubmit={(formData, imageFile) => {
          if (vm.selectedSticker?.id) {
            return vm.updateSticker(vm.selectedSticker.id, formData, imageFile);
          } else {
            return vm.createSticker(formData, imageFile);
          }
        }}
        onCancel={vm.handleCancelForm}
        loading={vm.isSubmitting}
      />
    );
  }

  // Vista principal de lista
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Gerenciar Stickers</h1>
          <p className="text-muted-foreground mt-1">
            {vm.allStickers.length === 0
              ? 'Nenhum sticker cadastrado ainda'
              : `${vm.allStickers.length} sticker(s) cadastrado(s)`}
          </p>
        </div>
        <Button onClick={vm.handleCreateClick} className="gap-2">
          <Plus className="w-4 h-4" />
          Novo Sticker
        </Button>
      </div>

      {/* Alerta de Rascunho */}
      {vm.hasDraft && (
        <Alert className="border-orange-200 bg-orange-50 dark:bg-orange-950/20 text-orange-800 dark:text-orange-200">
          <PenTool className="h-4 w-4" />
          <AlertTitle>Rascunho encontrado!</AlertTitle>
          <AlertDescription className="flex items-center justify-between mt-2">
            <span>Você tem um sticker não finalizado salvo.</span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-orange-300 hover:bg-orange-100"
                onClick={vm.discardDraft}
              >
                <Trash2 className="w-3 h-3 mr-1" />
                Descartar
              </Button>
              <Button
                size="sm"
                className="bg-orange-600 hover:bg-orange-700 text-white"
                onClick={vm.handleCreateClick}
              >
                Continuar Editando
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {/* Busca e Filtros */}
      <div className="space-y-4">
        <div className="relative max-w-md">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por nome ou descrição..."
            className="pl-8"
            value={vm.searchTerm}
            onChange={(e) => vm.setSearchTerm(e.target.value)}
          />
          {vm.searchTerm && (
            <button
              onClick={() => vm.setSearchTerm('')}
              className="absolute right-2 top-2.5 text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Stats */}
        {vm.allStickers.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">
              Total: {vm.allStickers.length}
            </Badge>
            {vm.searchTerm && (
              <Badge variant="secondary">
                Encontrados: {vm.stickers.length}
              </Badge>
            )}
          </div>
        )}
      </div>

      {/* Lista de Stickers */}
      <StickersList
        stickers={vm.stickers}
        loading={vm.loading}
        onGenerateCodes={(sticker) => {
          vm.handleGenerateCodesClick(sticker);
          setShowCodesDialog(true);
        }}
        onEdit={vm.handleEditClick}
      />

      {/* Diálogo de Geração de Códigos */}
      <CodesGenerator
        sticker={vm.selectedSticker}
        open={showCodesDialog}
        onOpenChange={setShowCodesDialog}
        onGenerate={vm.generateRedemptionCodes}
        isSubmitting={vm.isSubmitting}
      />
    </div>
  );
}
