import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ShieldCheck, ShieldOff, UserCheck, UserX, Loader2, CalendarDays, Mail } from 'lucide-react';

const ROLE_LABELS = {
  STUDENT: 'Estudante',
  EDITOR: 'Editor',
  ADMIN: 'Admin',
  SUPER_ADMIN: 'Super Admin',
};

const ROLE_COLORS = {
  STUDENT:    'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
  EDITOR:     'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  ADMIN:      'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
  SUPER_ADMIN:'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300',
};

function getInitials(name) {
  if (!name) return '?';
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0].toUpperCase())
    .join('');
}

function formatDate(dateStr) {
  if (!dateStr) return '—';
  return new Date(dateStr).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export function UserCard({ user, isPending, onChangeRole, onToggleSuspend }) {
  const initials = getInitials(user.name);
  const isSuperAdmin = user.role === 'SUPER_ADMIN';

  return (
    <Card
      className={`group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-200
        hover:shadow-lg hover:-translate-y-0.5
        ${user.suspended
          ? 'border-destructive/30 bg-destructive/[0.03]'
          : 'bg-card'
        }`}
    >
      {/* Colored top accent bar */}
      <div
        className={`h-1.5 w-full ${
          user.suspended
            ? 'bg-destructive/60'
            : isSuperAdmin
            ? 'bg-gradient-to-r from-rose-400 to-rose-600'
            : user.role === 'ADMIN'
            ? 'bg-gradient-to-r from-violet-400 to-violet-600'
            : user.role === 'EDITOR'
            ? 'bg-gradient-to-r from-blue-400 to-blue-500'
            : 'bg-gradient-to-r from-slate-300 to-slate-400'
        }`}
      />

      <div className="flex flex-col items-center gap-4 px-5 py-5">
        {/* Avatar + suspended badge */}
        <div className="relative">
          {user.avatarUrl ? (
            <img
              src={user.avatarUrl}
              alt={user.name}
              className={`w-20 h-20 rounded-full object-cover ring-4
                ${user.suspended ? 'ring-destructive/30' : 'ring-background'}
                shadow-md`}
            />
          ) : (
            <div
              className={`w-20 h-20 rounded-full ring-4 shadow-md flex items-center justify-center text-2xl font-bold
                ${user.suspended
                  ? 'ring-destructive/30 bg-destructive/10 text-destructive'
                  : 'ring-background bg-primary/10 text-primary'
                }`}
            >
              {initials}
            </div>
          )}

          {user.suspended && (
            <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-destructive px-2 py-0.5 text-[10px] font-semibold text-destructive-foreground shadow">
              Suspenso
            </span>
          )}
        </div>

        {/* Name + role badge */}
        <div className="flex flex-col items-center gap-1.5 w-full min-w-0">
          <p
            className="font-semibold text-base leading-tight text-center truncate w-full"
            title={user.name}
          >
            {user.name || 'Sem nome'}
          </p>

          <span
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
              ${ROLE_COLORS[user.role] ?? ROLE_COLORS.STUDENT}`}
          >
            {ROLE_LABELS[user.role] ?? user.role}
          </span>
        </div>

        {/* Meta info */}
        <div className="w-full space-y-1.5 text-xs text-muted-foreground">
          <div className="flex items-center gap-2 min-w-0">
            <Mail className="w-3.5 h-3.5 shrink-0 opacity-60" />
            <span className="truncate" title={user.email}>{user.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="w-3.5 h-3.5 shrink-0 opacity-60" />
            <span>Membro desde {formatDate(user.createdAt)}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t" />

        {/* Actions */}
        {!isSuperAdmin ? (
          <div className="flex flex-col gap-2 w-full">
            <Button
              variant="outline"
              className="w-full gap-1.5 text-sm h-9 rounded-lg"
              onClick={() => onChangeRole(user)}
              disabled={isPending}
            >
              {isPending ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <ShieldCheck className="w-4 h-4" />
              )}
              Alterar role
            </Button>

            <Button
              variant={user.suspended ? 'default' : 'destructive'}
              className="w-full gap-1.5 text-sm h-9 rounded-lg"
              onClick={() => onToggleSuspend(user)}
              disabled={isPending}
            >
              {isPending ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : user.suspended ? (
                <UserCheck className="w-4 h-4" />
              ) : (
                <UserX className="w-4 h-4" />
              )}
              {user.suspended ? 'Reativar' : 'Suspender'}
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <ShieldOff className="w-3.5 h-3.5 opacity-60" />
            Não gerenciável via painel
          </div>
        )}
      </div>
    </Card>
  );
}
