import { Link, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, Calendar, BookOpen, Image } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { to: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/admin/noticias', label: 'Notícias', icon: FileText },
  { to: '/admin/eventos', label: 'Eventos', icon: Calendar },
  { to: '/admin/manual', label: 'Manual', icon: BookOpen },
  { to: '/admin/figurinhas', label: 'Figurinhas', icon: Image },
];

export function AdminLayout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-muted/20">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-background">
        <div className="p-6">
          <h2 className="text-lg font-bold">Painel Admin</h2>
        </div>
        <nav className="space-y-1 px-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.to;
            
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}
