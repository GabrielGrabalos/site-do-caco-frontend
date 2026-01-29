import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Plus } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { WarningItem } from './WarningItem';
import { CreateWarningModal } from './CreateWarningModal';
import { ConfirmDeleteDialog } from '../../../components/ConfirmDeleteDialog';
import { FilterButtons } from './FilterButtons';

const WARNING_FILTERS = [
  { value: 'ALL', label: 'Todos' },
  { value: 'CRITICAL', label: 'Crítico' },
  { value: 'HIGH', label: 'Alto' },
  { value: 'MEDIUM', label: 'Médio' },
  { value: 'LOW', label: 'Baixo' },
];

export function WarningsSection({
  activeWarnings,
  expiredWarnings,
  allActiveWarnings,
  allExpiredWarnings,
  loading,
  creating,
  activeFilter,
  expiredFilter,
  onActiveFilterChange,
  onExpiredFilterChange,
  onCreate,
  onUpdate,
  onDelete,
  onExpire,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [editingWarning, setEditingWarning] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [warningToDelete, setWarningToDelete] = useState(null);

  const handleEdit = (warning) => {
    setEditingWarning(warning);
    setModalOpen(true);
  };

  const handleDelete = (warning) => {
    setWarningToDelete(warning.id);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!warningToDelete) return;
    await onDelete(warningToDelete);
    setDeleteDialogOpen(false);
    setWarningToDelete(null);
  };

  const handleCreateWarning = async (dto) => {
    const success = await onCreate(dto);
    if (success) {
      setModalOpen(false);
      setEditingWarning(null);
    }
  };

  const handleUpdateWarning = async (id, dto) => {
    const success = await onUpdate(id, dto);
    if (success) {
      setModalOpen(false);
      setEditingWarning(null);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setEditingWarning(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <>
      {/* Avisos Ativos */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg md:text-xl flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Avisos Ativos
              </CardTitle>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">
                Avisos que ainda não expiraram
              </p>
            </div>
            <Button onClick={() => setModalOpen(true)} size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Novo Aviso
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <FilterButtons
            filters={WARNING_FILTERS}
            currentFilter={activeFilter}
            onFilterChange={onActiveFilterChange}
            items={allActiveWarnings}
          />

          {allActiveWarnings.length === 0 ? (
            <div className="text-center py-8 md:py-12">
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Nenhum aviso ativo ainda.
              </p>
              <Button onClick={() => setModalOpen(true)} size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Criar Primeiro Aviso
              </Button>
            </div>
          ) : activeWarnings.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-sm text-muted-foreground">
                Nenhum aviso neste filtro.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {activeWarnings.map((warning) => (
                <WarningItem
                  key={warning.id}
                  warning={warning}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  onExpire={onExpire}
                />
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Avisos Expirados */}
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="expired-warnings" className="border-none">
          <Card>
            <CardHeader className="pb-3">
              <AccordionTrigger className="hover:no-underline [&[data-state=open]>div]:mb-2">
                <div className="flex-1">
                  <CardTitle className="text-lg md:text-xl flex items-center gap-2 text-left">
                    <AlertTriangle className="h-5 w-5 text-muted-foreground" />
                    Avisos Expirados ({allExpiredWarnings.length})
                  </CardTitle>
                  <p className="text-xs md:text-sm text-muted-foreground text-left">
                    Avisos que já passaram da data de término
                  </p>
                </div>
              </AccordionTrigger>
            </CardHeader>
            <AccordionContent>
              <CardContent>
                <FilterButtons
                  filters={WARNING_FILTERS}
                  currentFilter={expiredFilter}
                  onFilterChange={onExpiredFilterChange}
                  items={allExpiredWarnings}
                />

                {allExpiredWarnings.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-sm text-muted-foreground">
                      Nenhum aviso expirado.
                    </p>
                  </div>
                ) : expiredWarnings.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-sm text-muted-foreground">
                      Nenhum aviso neste filtro.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {expiredWarnings.map((warning) => (
                      <WarningItem
                        key={warning.id}
                        warning={warning}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                      />
                    ))}
                  </div>
                )}
              </CardContent>
            </AccordionContent>
          </Card>
        </AccordionItem>
      </Accordion>

      <ConfirmDeleteDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        onConfirm={confirmDelete}
        title="Confirmar exclusão"
        description="Tem certeza que deseja excluir este aviso? Esta ação não pode ser desfeita."
      />

      <CreateWarningModal
        open={modalOpen}
        onClose={handleCloseModal}
        onCreate={handleCreateWarning}
        onUpdate={handleUpdateWarning}
        loading={creating}
        editingWarning={editingWarning}
      />
    </>
  );
}
