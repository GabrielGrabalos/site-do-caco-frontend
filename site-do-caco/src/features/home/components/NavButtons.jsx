import { Link } from 'react-router-dom';
import { Newspaper, BookOpen, Calendar, GraduationCap } from 'lucide-react';

export function NavButtons() {
  const navItems = [
    {
      to: '/noticias',
      label: 'Notícias',
      icon: Newspaper,
      color: 'bg-red-300 hover:bg-red-400 text-red-900',
    },
    {
      to: '/manual',
      label: 'Manual',
      icon: BookOpen,
      color: 'bg-yellow-300 hover:bg-yellow-400 text-yellow-900',
    },
    {
      to: '/calendario',
      label: 'Calendário',
      icon: Calendar,
      color: 'bg-green-300 hover:bg-green-400 text-green-900',
    },
    {
      to: '/provas',
      label: 'Provas',
      icon: GraduationCap,
      color: 'bg-blue-300 hover:bg-blue-400 text-blue-900',
    },
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.to}
            to={item.to}
            className={`${item.color} rounded-full px-4 py-2 flex items-center gap-2 transition-all duration-200 hover:scale-105 hover:shadow-lg`}
          >
            <Icon className="h-4 w-4" />
            <span className="font-semibold text-sm">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
