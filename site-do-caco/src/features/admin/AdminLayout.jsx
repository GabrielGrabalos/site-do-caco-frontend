import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, Calendar, BookOpen, Image, Menu, X, GraduationCap, Store, ShieldAlert, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { authService } from '@/shared/services/authService';

const baseNavItems = [
  { to: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/admin/noticias', label: 'Notícias', icon: FileText },
  { to: '/admin/eventos', label: 'Eventos', icon: Calendar },
  { to: '/admin/manual', label: 'Manual', icon: BookOpen },
  { to: '/admin/provas', label: 'Banco de Provas', icon: GraduationCap },
  { to: '/admin/grupos-whatsapp', label: 'Grupos de WhatsApp', icon: MessageCircle },
  { to: '/admin/figurinhas', label: 'Figurinhas', icon: Image },
  { to: '/admin/loja', label: 'Loja', icon: Store },
];

const superAdminNavItem = {
  to: '/admin/super-admin',
  label: 'Gerenciar Usuários',
  icon: ShieldAlert,
};

export function AdminLayout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isSuperAdmin = authService.isSuperAdmin();
  const navItems = isSuperAdmin ? [...baseNavItems, superAdminNavItem] : baseNavItems;

  return (
    <div className="flex min-h-screen bg-muted/20">
      {/* Sidebar Desktop */}
      <aside className="hidden md:block w-64 border-r bg-background">
        <div className="p-6">
          <h2 className="text-lg font-bold">Painel Admin</h2>
        </div>
        <nav className="space-y-1 px-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.to;
            const isSuperAdminItem = item.to === '/admin/super-admin';

            return (
              <div key={item.to}>
                {isSuperAdminItem && (
                  <div className="my-2 border-t border-dashed border-border/60" />
                )}
                <Link
                  to={item.to}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : isSuperAdminItem
                      ? 'text-destructive hover:bg-destructive/10'
                      : 'hover:bg-muted'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Mobile */}
      <aside
        className={cn(
          'fixed top-0 left-0 h-full w-64 bg-background z-50 transform transition-transform duration-300 md:hidden',
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-lg font-bold">Painel Admin</h2>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-1 hover:bg-muted rounded-lg"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="space-y-1 px-3 py-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.to;
            const isSuperAdminItem = item.to === '/admin/super-admin';

            return (
              <div key={item.to}>
                {isSuperAdminItem && (
                  <div className="my-2 border-t border-dashed border-border/60" />
                )}
                <Link
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : isSuperAdminItem
                      ? 'text-destructive hover:bg-destructive/10'
                      : 'hover:bg-muted'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full">
        {/* Mobile Header */}
        <div className="md:hidden sticky top-0 z-30 bg-background border-b px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 hover:bg-muted rounded-lg"
          >
            <Menu className="h-5 w-5" />
          </button>
          <h2 className="text-lg font-bold">Painel Admin</h2>
        </div>
        
        <div className="p-4 md:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
