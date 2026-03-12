import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function ProfessorModal({ open, onClose, onSave, loading, editingProfessor }) {
  const [name, setName] = useState('');

  useEffect(() => {
    if (open) {
      setName(editingProfessor ? editingProfessor.name : '');
    }
  }, [open, editingProfessor]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation(); // Impede bubbling para forms externos (ex: CreateExamModal)
    if (!name.trim()) return;
    await onSave({ name: name.trim() });
  };

  const isEditing = Boolean(editingProfessor);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>{isEditing ? 'Editar Professor' : 'Adicionar Professor'}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div className="space-y-2">
            <label htmlFor="professor-name" className="text-sm font-medium">
              Nome *
            </label>
            <Input
              id="professor-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome do professor"
              required
              autoFocus
              disabled={loading}
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="outline" onClick={onClose} disabled={loading}>
              Cancelar
            </Button>
            <Button type="submit" disabled={loading || !name.trim()}>
              {loading ? 'Salvando...' : isEditing ? 'Salvar' : 'Adicionar'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
