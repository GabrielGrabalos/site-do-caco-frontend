import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ConfirmDeleteDialog } from "../../components/ConfirmDeleteDialog"; // Ajuste o caminho conforme necessário
import { CalendarIcon, MapPin, Image as ImageIcon, Edit2, Trash2, ExternalLink } from "lucide-react";

export function EventItem({ event, onUpdate, onDelete }) {
  // Estado local para controlar o Dialog de exclusão deste item específico
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  // Ação ao clicar no card (abrir evento)
  const handleCardClick = () => {
    if (event.slug) {
        window.open(`/eventos/${event.slug}`, '_blank');
    } else {
        // Fallback ou apenas ignorar se não tiver slug
        console.warn("Evento sem slug");
    }
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation(); // Impede que o clique no botão abra o card
    setIsDeleteDialogOpen(true); // Abre o dialog
  };

  // Cores e Labels
  const getStatusColor = () => {
      if (event.isHappening) return "default";
      if (event.isScheduled) return "secondary";
      return "outline";
  };

  const getStatusLabel = () => {
      if (event.isHappening) return "Acontecendo Agora";
      if (event.isScheduled) return "Agendado";
      return "Finalizado";
  };

  return (
    <>
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
            
            <div className="absolute top-2 right-2">
                <Badge variant={getStatusColor()} className="shadow-sm uppercase text-[10px] tracking-wider">
                    {getStatusLabel()}
                </Badge>
            </div>

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

        <CardFooter className="p-3 border-t bg-muted/5 gap-2">
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
                
                {/* Botão de Excluir que abre o Dialog */}
                <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-destructive hover:bg-destructive/10 hover:text-destructive" 
                    onClick={handleDeleteClick}
                >
                    <Trash2 className="w-4 h-4" />
                </Button>
            </div>
        </CardFooter>
        </Card>

        {/* DIALOG DE CONFIRMAÇÃO DENTRO DO ITEM */}
        <ConfirmDeleteDialog
            open={isDeleteDialogOpen}
            onOpenChange={setIsDeleteDialogOpen}
            title="Excluir Evento?"
            description={`Tem certeza que deseja excluir "${event.title}"? Essa ação não pode ser desfeita.`}
            onConfirm={(e) => {
                onDelete();
            }}
            confirmText="Excluir"
        />
    </>
  );
}