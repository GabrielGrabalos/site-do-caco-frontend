import { useState, useEffect } from 'react';
import { contentService } from '@/shared/services/contentService';
import { eventService } from '@/shared/services/eventService';

const EVENTS_PAGE_SIZE = 6;

export function useHomeVM() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [upcomingEventsPage, setUpcomingEventsPage] = useState(null);
  const [pastEventsPage, setPastEventsPage] = useState(null);
  const [eventsLoading, setEventsLoading] = useState({
    upcoming: true,
    past: true,
  });
  const [eventsError, setEventsError] = useState({
    upcoming: null,
    past: null,
  });

  useEffect(() => {
    loadDashboard();
    loadHomeEvents();
  }, []);

  const loadDashboard = async () => {
    try {
      setLoading(true);
      setError(null);
      const dashboardData = await contentService.getDashboard();
      
      // Não filtrar warnings dismissed - quando atualizar a página, voltam a aparecer
      setData(dashboardData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const loadUpcomingEvents = async (page = 0) => {
    try {
      setEventsLoading((prev) => ({ ...prev, upcoming: true }));
      const pageData = await eventService.getUpcomingEvents(page, EVENTS_PAGE_SIZE);
      setUpcomingEventsPage(pageData);
      setEventsError((prev) => ({ ...prev, upcoming: null }));
    } catch (err) {
      setEventsError((prev) => ({
        ...prev,
        upcoming: err.message || 'Erro ao carregar próximos eventos',
      }));
    } finally {
      setEventsLoading((prev) => ({ ...prev, upcoming: false }));
    }
  };

  const loadPastEvents = async (page = 0) => {
    try {
      setEventsLoading((prev) => ({ ...prev, past: true }));
      const pageData = await eventService.getPastEvents(page, EVENTS_PAGE_SIZE);
      setPastEventsPage(pageData);
      setEventsError((prev) => ({ ...prev, past: null }));
    } catch (err) {
      setEventsError((prev) => ({
        ...prev,
        past: err.message || 'Erro ao carregar eventos anteriores',
      }));
    } finally {
      setEventsLoading((prev) => ({ ...prev, past: false }));
    }
  };

  const loadHomeEvents = () => {
    loadUpcomingEvents(0);
    loadPastEvents(0);
  };

  const changeUpcomingPage = (page) => {
    if (page < 0) return;
    if (upcomingEventsPage && page >= upcomingEventsPage.totalPages) return;
    loadUpcomingEvents(page);
  };

  const changePastPage = (page) => {
    if (page < 0) return;
    if (pastEventsPage && page >= pastEventsPage.totalPages) return;
    loadPastEvents(page);
  };

  const dismissWarning = (id) => {
    // Apenas remove do estado local, sem salvar no localStorage
    setData(prev => ({
      ...prev,
      warnings: prev.warnings.filter(w => w.id !== id),
    }));
  };

  return {
    data,
    loading,
    error,
    dismissWarning,
    events: {
      upcomingPage: upcomingEventsPage,
      pastPage: pastEventsPage,
      loading: eventsLoading,
      error: eventsError,
      changeUpcomingPage,
      changePastPage,
      reloadUpcoming: () => loadUpcomingEvents(upcomingEventsPage?.number || 0),
      reloadPast: () => loadPastEvents(pastEventsPage?.number || 0),
    },
  };
}
