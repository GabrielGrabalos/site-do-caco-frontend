import { useState } from 'react';
import { useSuperAdminVM } from './useSuperAdminVM';
import { UserCard } from './components/UserCard';
import { ChangeRoleDialog } from './components/ChangeRoleDialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
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
  Search,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Users,
  Loader2,
  X,
} from 'lucide-react';

const ROLE_FILTER_OPTIONS = [
  { value: 'ALL', label: 'Todos os roles' },
  { value: 'STUDENT', label: 'Estudante' },
  { value: 'EDITOR', label: 'Editor' },
  { value: 'ADMIN', label: 'Admin' },
  { value: 'SUPER_ADMIN', label: 'Super Admin' },
];

export function SuperAdminPage() {
  const vm = useSuperAdminVM();
  const { toast } = useToast();

  // Role change dialog state
  const [roleDialogOpen, setRoleDialogOpen] = useState(false);
  const [targetUser, setTargetUser] = useState(null);

  // Suspend confirm dialog state
  const [suspendDialogOpen, setSuspendDialogOpen] = useState(false);
  const [suspendTarget, setSuspendTarget] = useState(null);

  // ─── Handlers ────────────────────────────────────────────────────────────────

  const handleChangeRoleClick = (user) => {
    setTargetUser(user);
    setRoleDialogOpen(true);
  };

  const handleConfirmRoleChange = async (newRole) => {
    if (!targetUser) return;
    const result = await vm.changeUserRole(targetUser.id, newRole);
    if (result.success) {
      toast({ title: 'Role alterado com sucesso!' });
      setRoleDialogOpen(false);
    } else {
      toast({ variant: 'destructive', title: 'Erro ao alterar role', description: result.error });
    }
  };

  const handleToggleSuspendClick = (user) => {
    setSuspendTarget(user);
    setSuspendDialogOpen(true);
  };

  const handleConfirmSuspend = async () => {
    if (!suspendTarget) return;
    const isSuspended = suspendTarget.suspended;
    const result = isSuspended
      ? await vm.unsuspendUser(suspendTarget.id)
      : await vm.suspendUser(suspendTarget.id);

    if (result.success) {
      toast({
        title: isSuspended ? 'Conta reativada!' : 'Conta suspensa!',
        description: isSuspended
          ? `${suspendTarget.name} pode acessar o sistema novamente.`
          : `${suspendTarget.name} foi suspenso e não poderá acessar o sistema.`,
      });
    } else {
      toast({
        variant: 'destructive',
        title: isSuspended ? 'Erro ao reativar' : 'Erro ao suspender',
        description: result.error,
      });
    }
    setSuspendDialogOpen(false);
  };

  // ─── Render ──────────────────────────────────────────────────────────────────

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight flex items-center gap-2">
            <Users className="w-7 h-7 text-primary" />
            Gerenciar Usuários
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {vm.totalElements > 0
              ? `${vm.totalElements} usuário(s) cadastrado(s) no total`
              : 'Nenhum usuário encontrado'}
          </p>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={vm.refetch}
          disabled={vm.loading}
          className="gap-2 self-start sm:self-auto"
        >
          <RefreshCw className={`w-4 h-4 ${vm.loading ? 'animate-spin' : ''}`} />
          Atualizar
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por nome ou email…"
            value={vm.searchQuery}
            onChange={(e) => vm.setSearchQuery(e.target.value)}
            className="pl-9 pr-9"
          />
          {vm.searchQuery && (
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              onClick={() => vm.setSearchQuery('')}
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <Select value={vm.roleFilter} onValueChange={vm.setRoleFilter}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Filtrar por role" />
          </SelectTrigger>
          <SelectContent>
            {ROLE_FILTER_OPTIONS.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Count badges */}
      {(vm.searchQuery || vm.roleFilter !== 'ALL') && (
        <div className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground">Mostrando</span>
          <Badge variant="secondary">{vm.users.length}</Badge>
          <span className="text-muted-foreground">resultado(s) nesta página</span>
        </div>
      )}

      {/* Loading skeleton */}
      {vm.loading && (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
        </div>
      )}

      {/* Error state */}
      {!vm.loading && vm.error && (
        <div className="flex flex-col items-center justify-center py-20 gap-3 text-center">
          <p className="text-destructive font-medium">{vm.error}</p>
          <Button variant="outline" onClick={vm.refetch}>
            Tentar novamente
          </Button>
        </div>
      )}

      {/* Empty state */}
      {!vm.loading && !vm.error && vm.users.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 gap-2 text-center text-muted-foreground">
          <Users className="w-10 h-10 opacity-30" />
          <p className="font-medium">Nenhum usuário encontrado</p>
          {(vm.searchQuery || vm.roleFilter !== 'ALL') && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                vm.setSearchQuery('');
                vm.setRoleFilter('ALL');
              }}
            >
              Limpar filtros
            </Button>
          )}
        </div>
      )}

      {/* Users Grid */}
      {!vm.loading && !vm.error && vm.users.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {vm.users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              isPending={!!vm.pendingActions[user.id]}
              onChangeRole={handleChangeRoleClick}
              onToggleSuspend={handleToggleSuspendClick}
            />
          ))}
        </div>
      )}

      {/* Pagination */}
      {!vm.loading && vm.totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 pt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => vm.goToPage(vm.currentPage - 1)}
            disabled={vm.currentPage === 0 || vm.loading}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <span className="text-sm text-muted-foreground">
            Página {vm.currentPage + 1} de {vm.totalPages}
          </span>

          <Button
            variant="outline"
            size="sm"
            onClick={() => vm.goToPage(vm.currentPage + 1)}
            disabled={vm.currentPage >= vm.totalPages - 1 || vm.loading}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      )}

      {/* Change Role Dialog */}
      {targetUser && (
        <ChangeRoleDialog
          open={roleDialogOpen}
          onOpenChange={setRoleDialogOpen}
          user={targetUser}
          onConfirm={handleConfirmRoleChange}
          isPending={!!vm.pendingActions[targetUser?.id]}
        />
      )}

      {/* Suspend Confirm Dialog */}
      <AlertDialog open={suspendDialogOpen} onOpenChange={setSuspendDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {suspendTarget?.suspended ? 'Reativar conta?' : 'Suspender conta?'}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {suspendTarget?.suspended ? (
                <>
                  A conta de <span className="font-semibold">{suspendTarget?.name}</span> será
                  reativada e o usuário poderá acessar o sistema normalmente.
                </>
              ) : (
                <>
                  A conta de <span className="font-semibold">{suspendTarget?.name}</span> será
                  suspensa. O usuário não poderá acessar o sistema enquanto estiver suspenso.
                </>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmSuspend}
              className={
                suspendTarget?.suspended
                  ? ''
                  : 'bg-destructive hover:bg-destructive/90 text-destructive-foreground'
              }
            >
              {suspendTarget?.suspended ? 'Reativar' : 'Suspender'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
