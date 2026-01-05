import { Link } from 'react-router-dom';
import { Newspaper, BookOpen, Calendar, GraduationCap } from 'lucide-react';

export function NavButtons() {
  const navItems = [
    {
      to: '/noticias',
      label: 'Notícias',
      icon: Newspaper,
      color: 'bg-blue-600 hover:bg-blue-700 text-white',
    },
    {
      to: '/manual',
      label: 'Manual',
      icon: BookOpen,
      color: 'bg-green-600 hover:bg-green-700 text-white',
    },
    {
      to: '/calendario',
      label: 'Calendário',
      icon: Calendar,
      color: 'bg-purple-600 hover:bg-purple-700 text-white',
    },
    {
      to: '/provas',
      label: 'Provas',
      icon: GraduationCap,
      color: 'bg-orange-600 hover:bg-orange-700 text-white',
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
