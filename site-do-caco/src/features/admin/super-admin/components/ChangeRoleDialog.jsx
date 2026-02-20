import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Loader2, ShieldCheck } from 'lucide-react';

const ASSIGNABLE_ROLES = [
  { value: 'STUDENT', label: 'Estudante' },
  { value: 'EDITOR', label: 'Editor' },
  { value: 'ADMIN', label: 'Admin' },
];

const ROLE_LABELS = {
  STUDENT: 'Estudante',
  EDITOR: 'Editor',
  ADMIN: 'Admin',
  SUPER_ADMIN: 'Super Admin',
};

export function ChangeRoleDialog({ open, onOpenChange, user, onConfirm, isPending }) {
  const [selectedRole, setSelectedRole] = useState(user?.role ?? 'STUDENT');

  // Reset when a new user is loaded
  const handleOpenChange = (val) => {
    if (val) setSelectedRole(user?.role ?? 'STUDENT');
    onOpenChange(val);
  };

  const handleConfirm = () => {
    onConfirm(selectedRole);
  };

  const isSameRole = selectedRole === user?.role;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-primary" />
            Alterar Role
          </DialogTitle>
          <DialogDescription>
            Altere o nível de acesso de{' '}
            <span className="font-semibold text-foreground">{user?.name}</span>.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Role atual:</span>
            <Badge variant="outline">{ROLE_LABELS[user?.role] ?? user?.role}</Badge>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium">Novo role</label>
            <Select value={selectedRole} onValueChange={setSelectedRole}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione um role" />
              </SelectTrigger>
              <SelectContent>
                {ASSIGNABLE_ROLES.map((r) => (
                  <SelectItem key={r.value} value={r.value}>
                    {r.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline" onClick={() => onOpenChange(false)} disabled={isPending}>
            Cancelar
          </Button>
          <Button onClick={handleConfirm} disabled={isPending || isSameRole}>
            {isPending ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Salvando…
              </>
            ) : (
              'Confirmar'
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
