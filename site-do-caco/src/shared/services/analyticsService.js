class AnalyticsService {
  track(event, data = {}) {
    // Implementação básica de analytics
    console.log('[Analytics]', event, data);
    
    // Aqui você pode integrar com Google Analytics, Mixpanel, etc.
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, data);
    }
  }

  trackPageView(path) {
    this.track('page_view', { page_path: path });
  }

  trackEvent(name, category, label, value) {
    this.track(name, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

export const analyticsService = new AnalyticsService();
