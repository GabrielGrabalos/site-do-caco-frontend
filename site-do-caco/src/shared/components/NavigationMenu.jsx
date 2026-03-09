import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Newspaper, BookOpen, Calendar, GraduationCap, Home, ShoppingBag, MessageSquare, Archive } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';

const navigationItems = [
  { to: '/', label: 'Início', icon: Home, color: 'hover:bg-gray-100 dark:hover:bg-gray-800' },
  { to: '/noticias', label: 'Notícias', icon: Newspaper, color: 'hover:bg-red-100 hover:text-red-900 dark:hover:bg-red-900 dark:hover:text-red-100' },
  { to: '/manual', label: 'Manual dê Ingressante', icon: BookOpen, color: 'hover:bg-yellow-100 hover:text-yellow-900 dark:hover:bg-yellow-900 dark:hover:text-yellow-100', underConstruction: true },
  { to: '/calendario', label: 'Calendário', icon: Calendar, color: 'hover:bg-green-100 hover:text-green-900 dark:hover:bg-green-900 dark:hover:text-green-100' },
  { to: '/provas', label: 'Banco de Provas', icon: GraduationCap, color: 'hover:bg-blue-100 hover:text-blue-900 dark:hover:bg-blue-900 dark:hover:text-blue-100' },
  { to: '/loja', label: 'Loja', icon: ShoppingBag, color: 'hover:bg-purple-100 hover:text-purple-900 dark:hover:bg-purple-900 dark:hover:text-purple-100', underConstruction: true },
  { to: '/espaco-de-fala', label: 'Espaço de Fala', icon: MessageSquare, color: 'hover:bg-pink-100 hover:text-pink-900 dark:hover:bg-pink-900 dark:hover:text-pink-100', underConstruction: true },
  { to: '/gaveta', label: 'Gaveta do CACo', icon: Archive, color: 'hover:bg-orange-100 hover:text-orange-900 dark:hover:bg-orange-900 dark:hover:text-orange-100', underConstruction: true },
];

export function NavigationMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="shrink-0">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] sm:w-[320px]">
        <SheetHeader>
          <SheetTitle className="text-left">Navegação</SheetTitle>
        </SheetHeader>
        <nav className="mt-6 flex flex-col gap-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.to}
                variant="ghost"
                asChild
                className={`justify-start h-auto py-3 px-4 ${item.color}`}
                onClick={() => setOpen(false)}
              >
                <Link to={item.to} className="flex items-center gap-3 w-full">
                  <Icon className="h-5 w-5 shrink-0" />
                  <span className="text-base flex-1">{item.label}</span>
                  {item.underConstruction && (
                    <Badge variant="outline" className="text-xs shrink-0 border-orange-500 text-orange-500 dark:border-orange-400 dark:text-orange-400">
                      🚧
                    </Badge>
                  )}
                </Link>
              </Button>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
