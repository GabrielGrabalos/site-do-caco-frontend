import { useState, useEffect } from 'react';
import { eventService } from '@/shared/services/eventService';
import { authService } from '@/shared/services/authService';

export function useCalendarVM() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [myParticipations, setMyParticipations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const isAuthenticated = authService.isAuthenticated();

  useEffect(() => {
    loadEvents();
    if (isAuthenticated) {
      loadMyParticipations();
    }
  }, [currentDate]); // Recarrega quando o mês muda

  const loadEvents = async () => {
    try {
      setLoading(true);
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1; // JavaScript months são 0-based
      
      const response = await eventService.getEventsByMonth({ year, month });
      const data = response.content || response || [];
      
      setEvents(data);
      setError(null);
    } catch (err) {
      setError(err.message || 'Erro ao carregar eventos');
    } finally {
      setLoading(false);
    }
  };

  const loadMyParticipations = async () => {
    try {
      const response = await eventService.getSavedEvents(0, 100);
      const data = response.content || response || [];
      setMyParticipations(data);
    } catch (err) {
      console.error('Erro ao carregar participações:', err);
    }
  };

  const changeMonth = (delta, specificDate = null) => {
    setCurrentDate((prev) => {
      if (specificDate) return specificDate;
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + delta);
      return newDate;
    });
  };

  const openEventModal = (event) => {
    setSelectedEvent(event);
  };

  const closeEventModal = () => {
    setSelectedEvent(null);
  };

  const isParticipating = (eventId) => {
    return myParticipations.some(event => event.id === eventId);
  };

  return {
    currentDate,
    events,
    loading,
    error,
    selectedEvent,
    isAuthenticated,
    myParticipations,
    changeMonth,
    openEventModal,
    closeEventModal,
    isParticipating,
    refreshEvents: loadEvents,
    refreshParticipations: loadMyParticipations,
  };
}
