import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Newspaper, BookOpen, Calendar, GraduationCap, Home, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const navigationItems = [
  { to: '/', label: 'Início', icon: Home },
  { to: '/noticias', label: 'Notícias', icon: Newspaper },
  { to: '/manual', label: 'Manual do Calouro', icon: BookOpen },
  { to: '/calendario', label: 'Calendário', icon: Calendar },
  { to: '/provas', label: 'Banco de Provas', icon: GraduationCap },
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
                className="justify-start h-auto py-3 px-4"
                onClick={() => setOpen(false)}
              >
                <Link to={item.to} className="flex items-center gap-3">
                  <Icon className="h-5 w-5" />
                  <span className="text-base">{item.label}</span>
                </Link>
              </Button>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
