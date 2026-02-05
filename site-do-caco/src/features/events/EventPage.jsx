import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Clock, Share2, Globe, Video, Bookmark, Users, Check, X, Heart } from 'lucide-react';
import { useEventVM } from './useEventVM';
import { EventGallery } from './components/EventGallery';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MarkdownContent } from '@/shared/components/MarkdownContent';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

export function EventPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { 
    event, 
    loading, 
    error, 
    isAuthenticated,
    isParticipating,
    participationLoading,
    handleParticipation 
  } = useEventVM();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-3">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
          <p className="text-sm text-muted-foreground">Carregando evento...</p>
        </div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center max-w-md mx-auto px-4">
          <h2 className="text-2xl font-bold text-destructive mb-2">Evento não encontrado</h2>
          <p className="text-muted-foreground">
            {error || 'O evento que você procura não está disponível ou foi removido.'}
          </p>
        </div>
      </div>
    );
  }

  const handleParticipationSelect = async (status) => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    try {
      await handleParticipation(status);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao salvar",
        description: "Não foi possível atualizar sua participação. Tente novamente."
      });
    }
  };

  const formatDate = (dateString, full = false) => {
    if (!dateString) return null;
    return new Date(dateString).toLocaleDateString('pt-BR', {
      weekday: full ? 'long' : undefined,
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const formatTime = (dateString) => {
    if (!dateString) return null;
    return new Date(dateString).toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'HAPPENING':
        return <Badge variant="default" className="bg-green-600 hover:bg-green-700 animate-pulse">Acontecendo Agora</Badge>;
      case 'UPCOMING':
        return <Badge variant="outline" className="border-blue-500 text-blue-500">Em Breve</Badge>;
      case 'ENDED':
        return <Badge variant="secondary">Encerrado</Badge>;
      default:
        return null;
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'ONLINE': return <Globe className="w-4 h-4 mr-1" />;
      case 'HIBRIDO': return <Video className="w-4 h-4 mr-1" />;
      default: return <Users className="w-4 h-4 mr-1" />;
    }
  };

  const hasMultipleDays = event.endDate && new Date(event.startDate).toDateString() !== new Date(event.endDate).toDateString();
  const hasGallery = event.gallery && event.gallery.length > 0;

  return (
    <div className="min-h-screen pb-16 animate-in fade-in duration-500 container mx-auto px-4 py-8">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Coluna Principal: Conteúdo */}
        <div className="lg:col-span-8 space-y-8">

          {/* Capa */}
          {event.coverImage && (
            <div className="w-full aspect-video relative rounded-xl overflow-hidden bg-muted shadow-sm border">
              <img
                src={event.coverImage}
                alt={`Capa do evento ${event.title}`}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Cabeçalho do Evento */}
          <div className="bg-card rounded-xl p-6 shadow-sm border">
              <div className="flex flex-wrap gap-2 mb-3">
                {getStatusBadge(event.status)}
                <Badge variant="outline" className="capitalize flex items-center">
                  {getTypeIcon(event.type)}
                  {event.type?.toLowerCase() === 'presencial' ? 'Presencial' : event.type?.toLowerCase() || 'Evento'}
                </Badge>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 leading-tight">
                {event.title}
              </h1>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="capitalize">{formatDate(event.startDate, true)}</span>
                </div>
                {event.endDate && (
                  <>
                    <span className="hidden sm:inline text-muted-foreground/50">•</span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span>
                          {formatTime(event.startDate)}
                          {!hasMultipleDays && ` - ${formatTime(event.endDate)}`}
                      </span>
                    </div>
                  </>
                )}
              </div>
          </div>

          {/* Conteúdo em Abas */}
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent gap-6">
              <TabsTrigger 
                value="about" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 py-2 font-semibold text-muted-foreground data-[state=active]:text-foreground transition-all"
              >
                Sobre o Evento
              </TabsTrigger>
              {hasGallery && (
                <TabsTrigger 
                  value="gallery" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 py-2 font-semibold text-muted-foreground data-[state=active]:text-foreground transition-all"
                >
                  Galeria de Fotos e Vídeos
                </TabsTrigger>
              )}
            </TabsList>

            <TabsContent value="about" className="pt-6 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="prose prose-lg dark:prose-invert max-w-none bg-transparent">
                <MarkdownContent content={event.description} />
              </div>
            </TabsContent>

            {hasGallery && (
              <TabsContent value="gallery" className="pt-6 animate-in fade-in slide-in-from-top-2 duration-300">
                <EventGallery images={event.gallery} />
              </TabsContent>
            )}
          </Tabs>

        </div>

        {/* Coluna Lateral: Informações Extras (Cards) */}
        <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 space-y-6">
              
              {/* Card de Ações Rápidas */}
              <div className="flex items-center gap-3">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        size="lg"
                        className={cn(
                          "flex-1 gap-2 shadow-sm font-semibold transition-all",
                          isParticipating ? "bg-primary text-primary-foreground" : "bg-primary text-primary-foreground"
                        )}
                        disabled={participationLoading}
                      >
                         <Bookmark className={cn("w-5 h-5", isParticipating ? "fill-current" : "")} />
                         {event.userParticipationStatus === 'GOING' ? 'Vou participar' : 
                          event.userParticipationStatus === 'INTERESTED' ? 'Tenho interesse' : 
                          event.userParticipationStatus === 'NOT_GOING' ? 'Não vou participar' : 'Salvar evento'}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      <DropdownMenuItem 
                        onClick={() => handleParticipationSelect('GOING')}
                        className={cn(event.userParticipationStatus === 'GOING' && "bg-accent")}
                      >
                        <Check className={cn("mr-2 h-4 w-4 text-green-500", event.userParticipationStatus === 'GOING' ? "opacity-100" : "opacity-0")} />
                        <span>Vou participar</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={() => handleParticipationSelect('INTERESTED')}
                        className={cn(event.userParticipationStatus === 'INTERESTED' && "bg-accent")}
                      >
                        <Heart className={cn("mr-2 h-4 w-4 text-primary", event.userParticipationStatus === 'INTERESTED' ? "fill-current opacity-100" : "opacity-0")} />
                        <span>Tenho interesse</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={() => handleParticipationSelect('NOT_GOING')}
                        className={cn(event.userParticipationStatus === 'NOT_GOING' && "bg-accent")}
                      >
                        <X className={cn("mr-2 h-4 w-4 text-destructive", event.userParticipationStatus === 'NOT_GOING' ? "opacity-100" : "opacity-0")} />
                        <span>Não vou participar</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-11 w-11 shrink-0" 
                    onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: event.title,
                            text: event.description?.slice(0, 100),
                            url: window.location.href,
                          }).catch(() => {});
                        } else {
                          navigator.clipboard.writeText(window.location.href);
                          // Toast ideal here
                        }
                    }}
                    title="Compartilhar"
                  >
                    <Share2 className="w-5 h-5" />
                  </Button>
              </div>

              <Card className="overflow-hidden border-muted shadow-sm">
                <CardHeader className="bg-muted/30 pb-4">
                    <CardTitle className="text-lg flex items-center gap-2">
                      Detalhes
                    </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                    
                    {/* Localização */}
                    {event.location ? (
                      <div className="flex items-start gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                            <MapPin className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm mb-1">Localização</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {event.location}
                            </p>
                            {event.locationUrl && (
                                <Button variant="link" asChild className="p-0 h-auto mt-1 text-xs">
                                  <a href={event.locationUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                                      Ver no mapa <ExternalLink size={12} />
                                  </a>
                                </Button>
                            )}
                          </div>
                      </div>
                    ) : (
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-1">Local</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                              Informação de local indisponível
                          </p>
                        </div>
                    </div>
                    )}

                    {/* Informações detalhadas de data se forem múltiplos dias */}
                    {hasMultipleDays && (
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                            <Clock className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-sm mb-1">Duração</h4>
                            <div className="text-sm text-muted-foreground space-y-1">
                              <p>Início: {formatDate(event.startDate)} às {formatTime(event.startDate)}</p>
                              <p>Fim: {formatDate(event.endDate)} às {formatTime(event.endDate)}</p>
                            </div>
                        </div>
                      </div>
                    )}

                </CardContent>
              </Card>
            </div>
        </div>

      </div>
    </div>
  );
}

// Helper icon
function ExternalLink({ size, className }) {
   return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
   )
}