import { Users, Heart, CheckCircle2, X } from 'lucide-react';
import { Card } from '@/components/ui/card';

/**
 * Componente para exibir estatísticas de participação
 * Usado quando o evento inclui participationStats (geralmente em contextos admin)
 */
export function EventParticipationStats({ stats }) {
  if (!stats) return null;

  const total = stats.totalParticipants || 0;
  const going = stats.goingCount || 0;
  const interested = stats.interestedCount || 0;
  const notGoing = stats.notGoingCount || 0;

  return (
    <Card className="p-4">
      <h3 className="font-semibold mb-3 flex items-center gap-2">
        <Users className="h-4 w-4" />
        Estatísticas de Participação
      </h3>
      
      <div className="space-y-2 text-sm">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4" />
            Total
          </span>
          <span className="font-semibold">{total}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-green-600">
            <CheckCircle2 className="h-4 w-4" />
            Confirmados
          </span>
          <span className="font-semibold text-green-600">{going}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-blue-600">
            <Heart className="h-4 w-4" />
            Interessados
          </span>
          <span className="font-semibold text-blue-600">{interested}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-red-600">
            <X className="h-4 w-4" />
            Não Vão
          </span>
          <span className="font-semibold text-red-600">{notGoing}</span>
        </div>

        {/* Barra de progresso visual */}
        {total > 0 && (
          <div className="mt-3 pt-3 border-t">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden flex">
              {going > 0 && (
                <div 
                  className="bg-green-500 h-full"
                  style={{ width: `${(going / total) * 100}%` }}
                  title={`${going} confirmados`}
                />
              )}
              {interested > 0 && (
                <div 
                  className="bg-blue-500 h-full"
                  style={{ width: `${(interested / total) * 100}%` }}
                  title={`${interested} interessados`}
                />
              )}
              {notGoing > 0 && (
                <div 
                  className="bg-red-500 h-full"
                  style={{ width: `${(notGoing / total) * 100}%` }}
                  title={`${notGoing} não vão`}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
