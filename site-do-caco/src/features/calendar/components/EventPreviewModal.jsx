import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Clock, ExternalLink, GraduationCap, Landmark } from 'lucide-react';
import { cn } from '@/lib/utils';

export function EventPreviewModal({ event, open, onClose }) {
  const navigate = useNavigate();

  if (!event) return null;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleViewDetails = () => {
    navigate(`/eventos/${event.slug}`);
    onClose();
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'HAPPENING':
        return <Badge className="bg-green-600 animate-pulse border-0">Acontecendo Agora</Badge>;
      case 'ENDED':
        return <Badge variant="secondary">Encerrado</Badge>;
      default:
        return null;
    }
  };
  
  const getTypeLabel = (type) => {
    switch (type) {
      case 'CACO': return <span className="flex items-center gap-1"><GraduationCap className="w-3 h-3"/> CACo</span>;
      case 'IC': return <span className="flex items-center gap-1"><Landmark className="w-3 h-3"/> IC</span>;
      case 'FERIADO': return <span className="flex items-center gap-1"><Calendar className="w-3 h-3"/> Feriado</span>;
      default: return type?.replace('_', ' ');
    }
  };

  const isMultiDay = () => {
    const start = new Date(event.startDate);
    const end = new Date(event.endDate);
    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);
    return end > start;
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg p-0 overflow-hidden gap-0">
        {/* Imagem de capa */}
        {event.coverImage && (
          <div className="relative w-full h-56 overflow-hidden bg-muted">
            <img
              src={event.coverImage}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute top-4 right-4 flex gap-2">
                 {getStatusBadge(event.status)}
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
                 <div className="flex gap-2 mb-2">
                    <Badge variant="secondary" className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border-0">
                        {getTypeLabel(event.type)}
                    </Badge>
                 </div>
                 <h2 className="text-2xl font-bold leading-tight shadow-sm">
                    {event.title}
                 </h2>
            </div>
          </div>
        )}

        <div className="p-6 space-y-6">
            {!event.coverImage && (
                <div className="space-y-4">
                    <div className="flex gap-2 items-center">
                        <Badge variant="outline" className="gap-1">
                            {getTypeLabel(event.type)}
                        </Badge>
                        {getStatusBadge(event.status)}
                    </div>
                </div>
            )}
            
            {!event.coverImage && (
                 <DialogTitle className="text-2xl font-bold">{event.title}</DialogTitle>
            )}

            <div className="grid gap-4">
                 {/* Date & Time */}
                 <div className="flex items-start gap-3 text-sm">
                    <Calendar className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <div className="space-y-1">
                        <div className="font-medium">
                            {formatDate(event.startDate)}
                            {isMultiDay() && ` - ${formatDate(event.endDate)}`}
                        </div>
                        <div className="text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {formatTime(event.startDate)}
                            {!isMultiDay() && ` - ${formatTime(event.endDate)}`}
                        </div>
                    </div>
                 </div>
                 
                 {/* Location */}
                 {event.location && (
                    <div className="flex items-start gap-3 text-sm">
                        <MapPin className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                        <div>
                            <div className="font-medium">Localização</div>
                            <div className="text-muted-foreground">{event.location}</div>
                            {event.locationUrl && (
                                <a 
                                    href={event.locationUrl} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="text-primary hover:underline text-xs inline-flex items-center gap-1 mt-1"
                                >
                                    Ver no mapa <ExternalLink className="w-3 h-3" />
                                </a>
                            )}
                        </div>
                    </div>
                 )}
            </div>
            
            <DialogFooter className="gap-2 sm:gap-0 pt-2">
                <Button variant="outline" onClick={onClose}>Cancelar</Button>
                <Button onClick={handleViewDetails}>Ver Detalhes Completos</Button>
            </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
