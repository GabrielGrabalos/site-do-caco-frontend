import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { contentService } from '@/shared/services/contentService';
import { analyticsService } from '@/shared/services/analyticsService';

export function useEventVM() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadEvent();
  }, [id]);

  const loadEvent = async () => {
    try {
      setLoading(true);
      const data = await contentService.getEvent(id);
      setEvent(data);
      analyticsService.track('VIEW_EVENT', { eventId: id, eventTitle: data.title });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    event,
    loading,
    error,
  };
}
