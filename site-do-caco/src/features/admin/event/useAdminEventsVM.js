import { useState, useEffect } from 'react';
import { apiClient } from '@/shared/services/apiClient';
import { Event } from './Event';

export function useAdminEventsVM() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

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
      
      const allEvents = [
        ...Event.fromDTOArray(upcoming.content || []),
        ...Event.fromDTOArray(past.content || [])
      ];
      
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
      const eventInstance = Event.fromDTO(newEvent);
      setEvents([...events, eventInstance]);
      return { success: true, data: eventInstance };
    } catch (err) {
      return { success: false, error: err.message };
    } finally {
      setCreating(false);
    }
  };

  const updateEvent = async (id, eventData) => {
    try {
      const updated = await apiClient.putFormData(`admin/events/${id}`, eventData);
      const eventInstance = Event.fromDTO(updated);
      setEvents(events.map(e => e.id === id ? eventInstance : e));
      setSelectedEvent(eventInstance);
      return { success: true, data: eventInstance };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const deleteEvent = async (id) => {
    try {
      await apiClient.delete(`admin/events/${id}`);
      setEvents(events.filter(e => e.id !== id));
      setSelectedEvent(null);
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const selectEvent = (event) => {
    setSelectedEvent(event ? event.clone() : null);
  };

  const clearSelectedEvent = () => {
    setSelectedEvent(null);
  };

  // Filtros úteis
  const getMajorEvents = () => events.filter(e => e.isMajor);
  const getMinorEvents = () => events.filter(e => e.isMinor);
  const getUpcomingEvents = () => events.filter(e => e.isScheduled || e.isHappening);
  const getPastEvents = () => events.filter(e => e.isEnded);
  const getEventsByType = (type) => events.filter(e => e.type === type);

  return {
    events,
    loading,
    creating,
    modalOpen,
    setModalOpen,
    selectedEvent,
    setSelectedEvent: selectEvent,
    clearSelectedEvent,
    loadEvents,
    createEvent,
    updateEvent,
    deleteEvent,
    getMajorEvents,
    getMinorEvents,
    getUpcomingEvents,
    getPastEvents,
    getEventsByType,
  };
}