import { useState, useEffect } from 'react';
import { apiClient } from '@/shared/services/apiClient';

export function useAdminEventsVM() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      setLoading(true);
      const data = await apiClient.get('admin/events');
      setEvents(data);
    } catch (err) {
      console.error('Erro ao carregar eventos:', err);
    } finally {
      setLoading(false);
    }
  };

  const createEvent = async (eventData) => {
    try {
      setCreating(true);
      const newEvent = await apiClient.post('admin/events', eventData);
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
      const updated = await apiClient.put(`admin/events/${id}`, eventData);
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
    loadEvents,
    createEvent,
    updateEvent,
    deleteEvent,
  };
}
