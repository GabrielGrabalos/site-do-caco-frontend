import { useState, useEffect, useMemo } from 'react';
import { eventService } from '@/shared/services/eventService';
import { Event } from './Event';
import { useToast } from '@/components/ui/use-toast';

const DRAFT_KEY = 'event-draft';

export function useAdminEventsVM() {
  const { toast } = useToast();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Controle de Visualização
  const [viewMode, setViewMode] = useState('LIST');
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Controle de Rascunho
  const [hasDraft, setHasDraft] = useState(false);

  // Filtros
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    period: 'UPCOMING',
    type: 'ALL',
    importance: 'ALL'
  });

  useEffect(() => {
    loadEvents();
    checkForDraft();
  }, []);

  // Helper para extrair mensagem de erro do backend
  const getErrorMessage = (err) => {
    if (err.response?.data?.errors && Array.isArray(err.response.data.errors)) {
      // Formato comum de validação do Spring (BindingResult)
      return err.response.data.errors.map(e => e.defaultMessage || e.message).join(' | ');
    }
    return err.response?.data?.message || err.message || "Ocorreu um erro inesperado.";
  };

  const checkForDraft = () => {
    const draft = localStorage.getItem(DRAFT_KEY);
    setHasDraft(!!draft);
  };

  const discardDraft = () => {
    localStorage.removeItem(DRAFT_KEY);
    setHasDraft(false);
    toast({
      title: "Rascunho descartado",
      description: "As informações não salvas foram removidas.",
    });
  };

  const loadEvents = async () => {
    try {
      setLoading(true);
      const [upcoming, past] = await Promise.all([
        eventService.getUpcomingEvents(0, 100),
        eventService.getPastEvents(0, 100),
      ]);

      const allEvents = [
        ...Event.fromDTOArray(upcoming.content || []),
        ...Event.fromDTOArray(past.content || [])
      ];

      allEvents.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
      setEvents(allEvents);
    } catch (err) {
      console.error('Erro ao carregar eventos:', err);
      toast({
        variant: "destructive",
        title: "Erro ao carregar",
        description: "Não foi possível buscar a lista de eventos.",
      });
    } finally {
      setLoading(false);
    }
  };

  const createEvent = async (formData) => {
    try {
      setIsSubmitting(true);
      const newEvent = await eventService.createEvent(formData);
      const eventInstance = Event.fromDTO(newEvent);

      setEvents(prev => [eventInstance, ...prev]);
      setViewMode('LIST');

      localStorage.removeItem(DRAFT_KEY);
      setHasDraft(false);

      toast({
        title: "Evento criado!",
        description: `O evento "${eventInstance.title}" foi salvo com sucesso.`,
      });
      return { success: true };
    } catch (err) {
      console.error(err);
      toast({
        variant: "destructive",
        title: "Erro ao criar",
        description: getErrorMessage(err),
      });
      return { success: false, error: err.message };
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateEvent = async (id, formData) => {
    try {
      setIsSubmitting(true);
      const updated = await eventService.updateEvent(id, formData);
      const eventInstance = Event.fromDTO(updated);

      setEvents(prev => prev.map(e => e.id === id ? eventInstance : e));
      setViewMode('LIST');

      toast({
        title: "Evento atualizado!",
        description: "As alterações foram salvas com sucesso.",
      });
      return { success: true };
    } catch (err) {
      console.error(err);
      toast({
        variant: "destructive",
        title: "Erro ao atualizar",
        description: getErrorMessage(err),
      });
      return { success: false, error: err.message };
    } finally {
      setIsSubmitting(false);
    }
  };

  const deleteEvent = async (id) => {
    try {
      setLoading(true);
      await eventService.deleteEvent(id);
      setEvents(prev => prev.filter(e => e.id !== id));

      if (viewMode === 'FORM') {
        setViewMode('LIST');
        setSelectedEvent(null);
      }

      toast({
        title: "Evento excluído",
        description: "O evento foi removido permanentemente.",
      });
    } catch (err) {
      console.error(err);
      toast({
        variant: "destructive",
        title: "Erro ao excluir",
        description: getErrorMessage(err),
      });
    } finally {
      setLoading(false);
    }
  };

  // --- FILTRAGEM ---
  const setFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const filteredList = useMemo(() => {
    return events.filter(event => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch =
        event.title.toLowerCase().includes(searchLower) ||
        (event.location && event.location.toLowerCase().includes(searchLower));

      if (!matchesSearch) return false;
      if (filters.type !== 'ALL' && event.type !== filters.type) return false;
      if (filters.importance !== 'ALL' && event.importance !== filters.importance) return false;

      if (filters.period === 'UPCOMING') return event.isScheduled || event.isHappening;
      if (filters.period === 'PAST') return event.isEnded;

      return true;
    });
  }, [events, searchTerm, filters]);

  const handleCreateClick = () => { setSelectedEvent(null); setViewMode('FORM'); };
  
  const handleEditClick = async (eventSummary) => {
    try {
      setLoading(true);
      // Busca o DTO completo usando o ID do evento
      const fullEventData = await eventService.getEventById(eventSummary.id);

      // Transforma o DTO completo em uma instância da classe Event
      const eventInstance = Event.fromDTO(fullEventData);

      setSelectedEvent(eventInstance);
      setViewMode('FORM');
    } catch (err) {
      console.error('Erro ao buscar detalhes do evento:', err);
      toast({
        variant: "destructive",
        title: "Erro ao carregar detalhes",
        description: "Não foi possível recuperar todas as informações do evento.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCancelForm = () => {
    setSelectedEvent(null);
    setViewMode('LIST');
    checkForDraft();
  };
  const handleSubmit = async (data, id) => id ? await updateEvent(id, data) : await createEvent(data);

  return {
    loading: loading || isSubmitting,
    viewMode,
    selectedEvent,
    hasDraft,
    searchTerm, setSearchTerm,
    filters, setFilter, filteredList,
    loadEvents, deleteEvent, discardDraft, handleSubmit,
    handleCreateClick, handleEditClick, handleCancelForm,
  };
}