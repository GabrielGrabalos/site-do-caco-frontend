import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarIcon, MapPin, Image as ImageIcon, Edit2, Trash2, ExternalLink } from "lucide-react";

export function EventItem({ event, onUpdate, onDelete }) {
  
  // Ação ao clicar no card
  const handleCardClick = (e) => {
    // Se o slug existir, abre em nova aba
    if (event.slug) {
        window.open(`/eventos/${event.slug}`, '_blank');
    } else {
        // Fallback se não tiver slug (ex: eventos antigos sem migração)
        alert("Este evento não possui um slug configurado para visualização.");
    }
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  // Cores
  const getStatusColor = () => {
      if (event.isHappening) return "default"; // Preto/Primary (Destaque máximo)
      if (event.isScheduled) return "secondary"; // Cinza
      return "outline"; // Passado
  };

  const getStatusLabel = () => {
      if (event.isHappening) return "Acontecendo Agora";
      if (event.isScheduled) return "Agendado";
      return "Finalizado";
  };

  return (
    <Card 
        className="flex flex-col overflow-hidden hover:shadow-lg transition-all cursor-pointer group border-transparent hover:border-muted-foreground/20"
        onClick={handleCardClick}
    >
      {/* Imagem */}
      <div className="relative w-full aspect-video bg-muted overflow-hidden">
        {event.coverImage ? (
           <img
             src={event.coverImage}
             alt={event.title}
             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
           />
        ) : (
            <div className="w-full h-full flex items-center justify-center flex-col text-muted-foreground/40">
                <ImageIcon className="h-10 w-10 mb-2" />
                <span className="text-xs">Sem capa</span>
            </div>
        )}
        
        {/* Badge de Status (Topo Direito) */}
        <div className="absolute top-2 right-2">
            <Badge variant={getStatusColor()} className="shadow-sm uppercase text-[10px] tracking-wider">
                {getStatusLabel()}
            </Badge>
        </div>

        {/* Overlay Hover com instrução */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="bg-background/80 text-foreground text-xs px-2 py-1 rounded-full flex items-center shadow-sm">
                <ExternalLink className="w-3 h-3 mr-1" /> Ver no site
            </span>
        </div>
      </div>

      <CardHeader className="p-4 pb-2">
        <h3 className="font-bold text-lg leading-tight line-clamp-2 mb-2 group-hover:text-primary transition-colors" title={event.title}>
            {event.title}
        </h3>
        
        {/* Tags: Tipo e Importância Juntos */}
        <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-[10px] px-1.5 h-5 border-primary/20 text-primary/80">
                {event.type}
            </Badge>
            {event.importance === 'MAJOR' && (
                <Badge variant="destructive" className="text-[10px] px-1.5 h-5">
                    ★ Importante
                </Badge>
            )}
        </div>
      </CardHeader>

      <CardContent className="p-4 py-2 flex-1 space-y-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
            <CalendarIcon className="w-4 h-4 shrink-0" />
            <span>
                {new Date(event.startDate).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}
                 {' • '}
                {new Date(event.startDate).toLocaleTimeString('pt-BR', { hour: '2-digit', minute:'2-digit' })}
            </span>
        </div>
        {event.location && (
            <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" />
                <span className="line-clamp-1">{event.location}</span>
            </div>
        )}
      </CardContent>

      <CardFooter className="p-3 border-t bg-muted/5 gap-2" onClick={stopPropagation}>
        <div className="flex w-full gap-2 justify-end">
            <Button 
                variant="secondary" 
                size="sm" 
                className="h-8 px-3 text-xs"
                onClick={(e) => {
                    e.stopPropagation();
                    onUpdate();
                }}
            >
                <Edit2 className="w-3 h-3 mr-1.5" /> Editar
            </Button>
            
            <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 text-destructive hover:bg-destructive/10 hover:text-destructive" 
                onClick={(e) => {
                    e.stopPropagation();
                    onDelete();
                }}
            >
                <Trash2 className="w-4 h-4" />
            </Button>
        </div>
      </CardFooter>
    </Card>
  );
}