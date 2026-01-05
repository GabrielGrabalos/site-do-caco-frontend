import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, FileText, Calendar, Image } from 'lucide-react';

export function AdminDashboard() {
  const stats = [
    { title: 'Usuários', value: '1,234', icon: Users, color: 'text-blue-600' },
    { title: 'Notícias', value: '45', icon: FileText, color: 'text-green-600' },
    { title: 'Eventos', value: '12', icon: Calendar, color: 'text-purple-600' },
    { title: 'Figurinhas', value: '28', icon: Image, color: 'text-orange-600' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Bem-vindo ao Painel Admin</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Use o menu lateral para gerenciar o conteúdo do site.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
