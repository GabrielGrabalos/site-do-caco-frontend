import { Link } from 'react-router-dom';
import { BookOpen, FileText, Calendar, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const links = [
  {
    title: 'Manual dê Ingressante',
    description: 'Guia completo para noves alunes',
    icon: BookOpen,
    href: '/manual',
    color: 'text-blue-600',
  },
  {
    title: 'Banco de Provas',
    description: 'Provas anteriores organizadas',
    icon: FileText,
    href: '/provas',
    color: 'text-green-600',
  },
  {
    title: 'Calendário',
    description: 'Eventos e datas importantes',
    icon: Calendar,
    href: '/calendario',
    color: 'text-purple-600',
  },
  {
    title: 'Ouvidoria',
    description: 'Entre em contato conosco',
    icon: MessageSquare,
    href: '/ouvidoria',
    color: 'text-orange-600',
  },
];

export function QuickLinks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Link key={link.href} to={link.href}>
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <Icon className={`h-10 w-10 mb-3 ${link.color}`} />
                <h3 className="font-semibold text-lg mb-1">{link.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {link.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
