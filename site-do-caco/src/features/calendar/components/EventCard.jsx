import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Video, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export function EventCard({ event, className }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const getStatusConfig = (status) => {
    switch (status) {
      case 'HAPPENING':
        return { label: 'Acontecendo Agora', color: 'bg-green-500 animate-pulse text-white' };
      case 'ENDED':
        return { label: 'Encerrado', color: 'bg-muted text-muted-foreground' };
      default:
        return null; 
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'ONLINE':
        return <Globe className="h-3 w-3" />;
      case 'HYBRID':
        return <Video className="h-3 w-3" />;
      default:
        return <MapPin className="h-3 w-3" />;
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'ONLINE': return 'Online';
      case 'IN_PERSON': return 'Presencial';
      case 'HYBRID': return 'Híbrido';
      default: return type;
    }
  };

  const statusConfig = getStatusConfig(event.status);

  return (
    <Link to={`/eventos/${event.slug}`}>
      <Card className={cn("overflow-hidden hover:shadow-lg transition-all duration-300 h-full group", className)}>
        {event.coverImage && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={event.coverImage}
              alt={event.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-2 right-2 flex gap-2">
               {statusConfig && (
                <Badge className={cn("text-xs font-medium border-0 shadow-sm", statusConfig.color)}>
                  {statusConfig.label}
                </Badge>
              )}
            </div>
          </div>
        )}
        
        <div className="p-4 space-y-3">
          <div className="space-y-1">
            <div className="flex items-center justify-between gap-2 mb-2">
                 <Badge variant="secondary" className="text-[10px] px-2 py-0 h-5 flex items-center gap-1 font-medium bg-secondary/50 text-secondary-foreground">
                    {getTypeIcon(event.type)}
                    {getTypeLabel(event.type)}
                 </Badge>
                 {!event.coverImage && statusConfig && (
                    <Badge className={cn("text-[10px] h-5 border-0", statusConfig.color)}>
                      {statusConfig.label}
                    </Badge>
                 )}
            </div>
            <h3 className="font-bold text-lg leading-tight line-clamp-2 text-foreground group-hover:text-primary transition-colors">
              {event.title}
            </h3>
          </div>

          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 shrink-0 text-primary/70" />
              <span>{formatDate(event.startDate)}</span>
            </div>
            
            {event.location && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-primary/70" />
                <span className="line-clamp-1">{event.location}</span>
              </div>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
}
