import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { eventService } from '@/shared/services/eventService';
import { useAuth } from '@/shared/contexts/AuthContext';
import { analyticsService } from '@/shared/services/analyticsService';

export function useEventVM() {
  const { slug } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isParticipating, setIsParticipating] = useState(false);
  const [participationLoading, setParticipationLoading] = useState(false);

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    loadEvent();
  }, [slug, isAuthenticated]);

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

  const handleParticipation = async (status) => {
    if (!isAuthenticated) return;

    const previousStatus = event.userParticipationStatus;
    setParticipationLoading(true);

    try {
      if (previousStatus === status) {
        // Se clicar no mesmo status, remove a participação
        await eventService.removeParticipation(event.id);
        
        // Atualiza estado local
        setEvent(prev => ({
          ...prev,
          userParticipationStatus: null
        }));
        setIsParticipating(false);
        
        analyticsService.track('CANCEL_EVENT_PARTICIPATION', { 
          eventId: event.id, 
          eventTitle: event.title 
        });
      } else {
        // Se for novo ou diferente, salva/atualiza
        await eventService.saveParticipation(event.id, status);
        
        // Atualiza estado local
        setEvent(prev => ({
          ...prev,
          userParticipationStatus: status
        }));
        setIsParticipating(true);
        
        analyticsService.track('PARTICIPATE_EVENT', { 
          eventId: event.id, 
          eventTitle: event.title,
          status: status
        });
      }
    } catch (err) {
      console.error('Erro ao gerenciar participação:', err);
      // O estado visual não mudou antes do fetch, então não precisa reverter nada complexo,
      // mas poderíamos disparar um toast de erro aqui se tivéssemos acesso ao toast no VM.
      // Vamos retornar o erro para a View tratar
      throw err;
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
