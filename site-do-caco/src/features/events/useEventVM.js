import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { eventService } from '@/shared/services/eventService';
import { authService } from '@/shared/services/authService';
import { analyticsService } from '@/shared/services/analyticsService';

export function useEventVM() {
  const { slug } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isParticipating, setIsParticipating] = useState(false);
  const [participationLoading, setParticipationLoading] = useState(false);

  const isAuthenticated = authService.isAuthenticated();

  useEffect(() => {
    loadEvent();
  }, [slug]);

  const loadEvent = async () => {
    try {
      setLoading(true);
      const data = await eventService.getEventBySlug(slug);
      setEvent(data);
      
      // Verifica se o usuário está participando através do userParticipationStatus
      if (isAuthenticated && data.userParticipationStatus) {
        setIsParticipating(true);
      } else {
        setIsParticipating(false);
      }
      
      analyticsService.track('VIEW_EVENT', { 
        eventId: data.id, 
        eventTitle: data.title,
        slug: slug
      });
      
      setError(null);
    } catch (err) {
      setError(err.message || 'Erro ao carregar evento');
    } finally {
      setLoading(false);
    }
  };

  const handleParticipation = async (status = 'GOING') => {
    if (!isAuthenticated) {
      // Poderia redirecionar para login aqui
      return;
    }

    try {
      setParticipationLoading(true);
      
      if (isParticipating) {
        // Remove participação
        await eventService.removeParticipation(event.id);
        setIsParticipating(false);
        analyticsService.track('CANCEL_EVENT_PARTICIPATION', { 
          eventId: event.id, 
          eventTitle: event.title 
        });
      } else {
        // Salva participação com status (INTERESTED, GOING, NOT_GOING)
        await eventService.saveParticipation(event.id, status);
        setIsParticipating(true);
        analyticsService.track('PARTICIPATE_EVENT', { 
          eventId: event.id, 
          eventTitle: event.title,
          status: status
        });
      }
      
      // Recarrega o evento para atualizar informações
      await loadEvent();
    } catch (err) {
      console.error('Erro ao gerenciar participação:', err);
      setError(err.message || 'Erro ao processar participação');
    } finally {
      setParticipationLoading(false);
    }
  };

  return {
    event,
    loading,
    error,
    isAuthenticated,
    isParticipating,
    participationLoading,
    handleParticipation,
    refreshEvent: loadEvent,
  };
}
