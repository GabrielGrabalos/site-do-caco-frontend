import { ArrowLeft, Calendar, MapPin, Users, CheckCircle2, ExternalLink, Heart, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEventVM } from './useEventVM';
import { EventGallery } from './components/EventGallery';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export function EventPage() {
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
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Erro</h2>
          <p className="text-muted-foreground">
            {error || 'Evento não encontrado'}
          </p>
          <Button asChild className="mt-4">
            <Link to="/calendario">Voltar para calendário</Link>
          </Button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getEventTypeLabel = (type) => {
    const types = {
      'ONLINE': 'Online',
      'PRESENCIAL': 'Presencial',
      'HIBRIDO': 'Híbrido'
    };
    return types[type] || type;
  };

  const getImportanceColor = (importance) => {
    const colors = {
      'ALTA': 'bg-red-500',
      'MEDIA': 'bg-yellow-500',
      'BAIXA': 'bg-green-500'
    };
    return colors[importance] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen">
      {/* Header com imagem de capa */}
      {event.coverImage && (
        <div className="relative w-full h-[400px] overflow-hidden">
          <img
            src={event.coverImage}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <Button 
                variant="ghost" 
                asChild 
                className="mb-4 text-white hover:text-white hover:bg-white/20"
              >
                <Link to="/calendario">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar para calendário
                </Link>
              </Button>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {event.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                <Badge className={getImportanceColor(event.importance)}>
                  {event.importance}
                </Badge>
                <Badge variant="secondary">
                  {getEventTypeLabel(event.type)}
                </Badge>
                <Badge variant="outline" className="text-white border-white">
                  {event.status}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Conteúdo Principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Descrição */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Sobre o Evento</h2>
              <div className="prose max-w-none">
                <p className="text-muted-foreground whitespace-pre-wrap">
                  {event.description}
                </p>
              </div>
            </Card>

            {/* Galeria */}
            {event.gallery && event.gallery.length > 0 && (
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">Galeria</h2>
                <EventGallery images={event.gallery} />
              </Card>
            )}
          </div>

          {/* Sidebar com informações */}
          <div className="space-y-6">
            {/* Card de Participação */}
            <Card className="p-6">
              <div className="space-y-4">
                {isAuthenticated && event.status === 'PUBLISHED' && (
                  <div className="space-y-2">
                    {!isParticipating ? (
                      <>
                        <p className="text-sm font-medium mb-2">Confirmar participação:</p>
                        <div className="grid grid-cols-1 gap-2">
                          <Button 
                            onClick={() => handleParticipation('GOING')}
                            disabled={participationLoading}
                            className="w-full justify-start"
                          >
                            <CheckCircle2 className="mr-2 h-4 w-4" />
                            Vou Participar
                          </Button>
                          <Button 
                            onClick={() => handleParticipation('INTERESTED')}
                            disabled={participationLoading}
                            variant="outline"
                            className="w-full justify-start"
                          >
                            <Heart className="mr-2 h-4 w-4" />
                            Tenho Interesse
                          </Button>
                          <Button 
                            onClick={() => handleParticipation('NOT_GOING')}
                            disabled={participationLoading}
                            variant="outline"
                            className="w-full justify-start"
                          >
                            <X className="mr-2 h-4 w-4" />
                            Não Vou
                          </Button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-center">
                          <div className="flex items-center justify-center gap-2 text-primary">
                            {event.userParticipationStatus === 'GOING' && (
                              <>
                                <CheckCircle2 className="h-5 w-5" />
                                <span className="font-medium">Vou Participar</span>
                              </>
                            )}
                            {event.userParticipationStatus === 'INTERESTED' && (
                              <>
                                <Heart className="h-5 w-5" />
                                <span className="font-medium">Interessado</span>
                              </>
                            )}
                            {event.userParticipationStatus === 'NOT_GOING' && (
                              <>
                                <X className="h-5 w-5" />
                                <span className="font-medium">Não Vou</span>
                              </>
                            )}
                            {!event.userParticipationStatus && (
                              <>
                                <CheckCircle2 className="h-5 w-5" />
                                <span className="font-medium">Participando</span>
                              </>
                            )}
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={handleParticipation}
                          disabled={participationLoading}
                          className="w-full"
                        >
                          {participationLoading ? 'Processando...' : 'Cancelar Participação'}
                        </Button>
                      </>
                    )}
                  </div>
                )}

                {!isAuthenticated && (
                  <Button asChild className="w-full">
                    <Link to="/login">
                      Faça login para participar
                    </Link>
                  </Button>
                )}
              </div>
            </Card>

            {/* Card de Informações */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Informações</h3>
              <div className="space-y-4">
                {/* Data de Início */}
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Início</p>
                    <p className="text-sm text-muted-foreground">
                      {formatDate(event.startDate)}
                    </p>
                  </div>
                </div>

                {/* Data de Término */}
                {event.endDate && (
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Término</p>
                      <p className="text-sm text-muted-foreground">
                        {formatDate(event.endDate)}
                      </p>
                    </div>
                  </div>
                )}

                {/* Localização */}
                {event.location && (
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Local</p>
                      <p className="text-sm text-muted-foreground">
                        {event.location}
                      </p>
                      {event.locationUrl && (
                        <a 
                          href={event.locationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline flex items-center gap-1 mt-1"
                        >
                          Ver no mapa
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
