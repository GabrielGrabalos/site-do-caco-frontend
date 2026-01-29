import { useState, useEffect } from 'react';
import { apiClient } from '@/shared/services/apiClient';

export function useAdminEventsVM() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      setLoading(true);
      const [upcoming, past] = await Promise.all([
        apiClient.get('public/events/upcoming?size=100'),
        apiClient.get('public/events/past?size=100'),
      ]);
      const allEvents = [...(upcoming.content || []), ...(past.content || [])];
      setEvents(allEvents);
    } catch (err) {
      console.error('Erro ao carregar eventos:', err);
    } finally {
      setLoading(false);
    }
  };

  const createEvent = async (eventData) => {
    try {
      setCreating(true);
      const newEvent = await apiClient.postFormData('admin/events', eventData);
      setEvents([...events, newEvent]);
      return { success: true, data: newEvent };
    } catch (err) {
      return { success: false, error: err.message };
    } finally {
      setCreating(false);
    }
  };

  const updateEvent = async (id, eventData) => {
    try {
      const updated = await apiClient.putFormData(`admin/events/${id}`, eventData);
      setEvents(events.map(e => e.id === id ? updated : e));
      return { success: true, data: updated };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const deleteEvent = async (id) => {
    try {
      await apiClient.delete(`admin/events/${id}`);
      setEvents(events.filter(e => e.id !== id));
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  return {
    events,
    loading,
    creating,
    modalOpen,
    setModalOpen,
    loadEvents,
    createEvent,
    updateEvent,
    deleteEvent,
  };
}
