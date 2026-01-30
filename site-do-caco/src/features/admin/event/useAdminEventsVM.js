import { useState, useEffect, useMemo } from 'react';
import { apiClient } from '@/shared/services/apiClient';
import { Event } from './Event';

const DRAFT_KEY = 'event-draft';

export function useAdminEventsVM() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Controle de Visualização
  const [viewMode, setViewMode] = useState('LIST'); // 'LIST' | 'FORM'
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  // Controle de Rascunho
  const [hasDraft, setHasDraft] = useState(false);

  // Filtros
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    period: 'UPCOMING', // 'ALL', 'UPCOMING', 'PAST'
    type: 'ALL',        // 'ALL', 'CACO', 'IC', 'FERIADO'
    importance: 'ALL'   // 'ALL', 'MAJOR', 'MINOR'
  });

  // --- INICIALIZAÇÃO ---
  useEffect(() => {
    loadEvents();
    checkForDraft();
  }, []);

  // --- LÓGICA DE RASCUNHO ---
  const checkForDraft = () => {
    const draft = localStorage.getItem(DRAFT_KEY);
    // Verifica se existe algo salvo
    setHasDraft(!!draft);
  };

  const discardDraft = () => {
    localStorage.removeItem(DRAFT_KEY);
    setHasDraft(false);
    // Se estiver no form, reseta ou volta
    if (viewMode === 'FORM' && !selectedEvent) {
       // Opcional: forçar reload do form ou sair
    }
  };

  // --- CARREGAMENTO DE DADOS ---
  const loadEvents = async () => {
    try {
      setLoading(true);
      const [upcoming, past] = await Promise.all([
        apiClient.get('public/events/upcoming?size=100'),
        apiClient.get('public/events/past?size=100'),
      ]);
      
      const allEvents = [
        ...Event.fromDTOArray(upcoming.content || []),
        ...Event.fromDTOArray(past.content || [])
      ];
      
      // Ordena por data mais recente primeiro
      allEvents.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
      
      setEvents(allEvents);
    } catch (err) {
      console.error('Erro ao carregar eventos:', err);
    } finally {
      setLoading(false);
    }
  };

  // --- CRUD OPERATIONS ---
  const createEvent = async (formData) => {
    try {
      setIsSubmitting(true);
      const newEvent = await apiClient.postFormData('admin/events', formData);
      const eventInstance = Event.fromDTO(newEvent);
      
      setEvents(prev => [eventInstance, ...prev]);
      setViewMode('LIST');
      discardDraft(); // Limpa rascunho após sucesso
      return { success: true };
    } catch (err) {
      console.error(err);
      alert('Erro ao criar evento: ' + (err.response?.data?.message || err.message));
      return { success: false, error: err.message };
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateEvent = async (id, formData) => {
    try {
      setIsSubmitting(true);
      const updated = await apiClient.putFormData(`admin/events/${id}`, formData);
      const eventInstance = Event.fromDTO(updated);
      
      setEvents(prev => prev.map(e => e.id === id ? eventInstance : e));
      setViewMode('LIST');
      return { success: true };
    } catch (err) {
      console.error(err);
      alert('Erro ao atualizar evento: ' + (err.response?.data?.message || err.message));
      return { success: false, error: err.message };
    } finally {
      setIsSubmitting(false);
    }
  };

  const deleteEvent = async (id) => {
    if (!confirm("Tem certeza que deseja excluir este evento?")) return;

    try {
      setLoading(true);
      await apiClient.delete(`admin/events/${id}`);
      setEvents(prev => prev.filter(e => e.id !== id));
      
      if (viewMode === 'FORM') {
        setViewMode('LIST');
        setSelectedEvent(null);
      }
    } catch (err) {
      console.error(err);
      alert('Erro ao deletar evento');
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
      // 1. Busca textual
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch = 
        event.title.toLowerCase().includes(searchLower) ||
        (event.location && event.location.toLowerCase().includes(searchLower));

      if (!matchesSearch) return false;

      // 2. Filtro de Tipo
      if (filters.type !== 'ALL' && event.type !== filters.type) return false;

      // 3. Filtro de Importância
      if (filters.importance !== 'ALL' && event.importance !== filters.importance) return false;

      // 4. Filtro de Período (Status calculado)
      if (filters.period === 'UPCOMING') {
        return event.isScheduled || event.isHappening;
      }
      if (filters.period === 'PAST') {
        return event.isEnded;
      }

      return true;
    });
  }, [events, searchTerm, filters]);

  // --- VIEW HANDLERS ---
  const handleCreateClick = () => {
    setSelectedEvent(null);
    setViewMode('FORM');
  };

  const handleEditClick = (event) => {
    setSelectedEvent(event);
    setViewMode('FORM');
  };

  const handleCancelForm = () => {
    setSelectedEvent(null);
    setViewMode('LIST');
    checkForDraft(); // Atualiza estado do botão de rascunho na lista
  };

  const handleSubmit = async (data, id) => {
    if (id) return await updateEvent(id, data);
    return await createEvent(data);
  };

  return {
    // Dados
    loading: loading || isSubmitting,
    viewMode,
    selectedEvent,
    hasDraft,
    
    // Filtros & Lista
    searchTerm,
    setSearchTerm,
    filters,
    setFilter,
    filteredList, // Use esta lista na UI

    // Ações
    loadEvents,
    deleteEvent,
    discardDraft,
    handleSubmit,
    handleCreateClick,
    handleEditClick,
    handleCancelForm,
  };
}