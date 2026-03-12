import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Plus, Pencil, Trash2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
import { ProfessorModal } from './ProfessorModal';
import { useToast } from '@/components/ui/use-toast.jsx';

/**
 * Combobox para selecionar professor.
 * Também permite criar, editar e deletar professores diretamente no dropdown.
 */
export function ProfessorCombobox({
  professors,
  selectedProfessorId,
  onSelect,           // (professorId | null) => void
  onCreateProfessor,  // async ({ name }) => { success, professor, error }
  onUpdateProfessor,  // async (id, { name }) => { success, professor, error }
  onDeleteProfessor,  // async (id) => { success, error }
  loading,
}) {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingProfessor, setEditingProfessor] = useState(null);
  const [saving, setSaving] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [professorToDelete, setProfessorToDelete] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState('bottom');
  const containerRef = useRef(null);

  const selectedProfessor = professors.find((p) => p.id === selectedProfessorId) || null;

  const filtered = professors.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Decide se o dropdown abre para cima ou para baixo
  useEffect(() => {
    if (!open || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    // estimativa de altura do dropdown (~280px)
    setDropdownPosition(spaceBelow < 280 ? 'top' : 'bottom');
  }, [open]);

  const handleSelect = (professor) => {
    onSelect(professor.id === selectedProfessorId ? null : professor.id);
    setOpen(false);
    setSearch('');
  };

  const handleClear = (e) => {
    e.stopPropagation();
    onSelect(null);
  };

  const handleOpenCreate = (e) => {
    e.stopPropagation();
    setEditingProfessor(null);
    setModalOpen(true);
    setOpen(false);
  };

  const handleOpenEdit = (e, professor) => {
    e.stopPropagation();
    setEditingProfessor(professor);
    setModalOpen(true);
    setOpen(false);
  };

  const handleAskDelete = (e, professor) => {
    e.stopPropagation();
    setProfessorToDelete(professor);
    setDeleteDialogOpen(true);
    setOpen(false);
  };

  const handleConfirmDelete = async () => {
    if (!professorToDelete) return;
    const result = await onDeleteProfessor(professorToDelete.id);
    setDeleteDialogOpen(false);
    if (!result.success) {
      toast({
        variant: 'destructive',
        title: 'Erro ao excluir professor',
        description: result.error,
      });
    } else {
      toast({ title: 'Professor excluído com sucesso.' });
      if (selectedProfessorId === professorToDelete.id) {
        onSelect(null);
      }
    }
    setProfessorToDelete(null);
  };

  const handleSave = async (data) => {
    setSaving(true);
    let result;
    if (editingProfessor) {
      result = await onUpdateProfessor(editingProfessor.id, data);
    } else {
      result = await onCreateProfessor(data);
    }
    setSaving(false);

    if (result.success) {
      toast({
        title: editingProfessor ? 'Professorie atualizade.' : 'Professorie adicionade.',
      });
      setModalOpen(false);
      if (!editingProfessor && result.professor) {
        onSelect(result.professor.id);
      }
    } else {
      toast({
        variant: 'destructive',
        title: editingProfessor ? 'Erro ao atualizar professorie' : 'Erro ao adicionar professorie',
        description: result.error,
      });
    }
  };

  return (
    <>
      <div ref={containerRef} className="relative">
        {/* Trigger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          disabled={loading}
          className="w-full flex items-center justify-between px-3 py-2 border border-input rounded-md text-sm bg-background hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 transition-colors"
        >
          <span className={selectedProfessor ? 'text-foreground' : 'text-muted-foreground'}>
            {selectedProfessor ? selectedProfessor.name : 'Nenhum professor'}
          </span>
          <div className="flex items-center gap-1">
            {selectedProfessor && (
              <span
                role="button"
                tabIndex={0}
                onClick={handleClear}
                onKeyDown={(e) => e.key === 'Enter' && handleClear(e)}
                className="p-0.5 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                title="Remover professorie"
              >
                <X size={14} />
              </span>
            )}
            <ChevronDown size={14} className="text-muted-foreground" />
          </div>
        </button>

        {/* Dropdown */}
        {open && (
          <div
            className={`absolute z-50 w-full bg-popover border border-border rounded-md shadow-md ${
              dropdownPosition === 'top' ? 'bottom-full mb-1' : 'top-full mt-1'
            }`}
          >
            {/* Search */}
            <div className="p-2 border-b border-border">
              <Input
                autoFocus
                placeholder="Buscar professorie..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-8 text-sm"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Add button — sempre visível no topo */}
            <div className="border-b border-border p-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="w-full gap-1.5"
                onClick={handleOpenCreate}
              >
                <Plus size={15} />
                Adicionar professorie
              </Button>
            </div>

            {/* List */}
            <ul className="max-h-40 overflow-y-auto py-1">
              {filtered.length === 0 && (
                <li className="px-3 py-2 text-sm text-muted-foreground text-center">
                  Nenhume professorie encontrado
                </li>
              )}
              {filtered.map((professor) => (
                <li
                  key={professor.id}
                  className={`flex items-center justify-between px-3 py-1.5 hover:bg-accent hover:text-accent-foreground transition-colors ${
                    selectedProfessorId === professor.id ? 'bg-accent font-medium' : ''
                  }`}
                >
                  <span
                    className="flex-1 text-sm truncate cursor-pointer"
                    onClick={() => handleSelect(professor)}
                  >
                    {professor.name}
                  </span>
                  <div className="flex items-center gap-0.5 ml-2 flex-shrink-0">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 text-muted-foreground hover:text-blue-600 hover:bg-blue-50"
                      onClick={(e) => handleOpenEdit(e, professor)}
                      title="Editar professorie"
                    >
                      <Pencil size={15} />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                      onClick={(e) => handleAskDelete(e, professor)}
                      title="Excluir professorie"
                    >
                      <Trash2 size={15} />
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <ProfessorModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        loading={saving}
        editingProfessor={editingProfessor}
      />

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Excluir professorie</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir{' '}
              <strong>{professorToDelete?.name}</strong>? Esta ação irá desassociar ê professorie
              de todos os exames em que ele esteja presente e não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
