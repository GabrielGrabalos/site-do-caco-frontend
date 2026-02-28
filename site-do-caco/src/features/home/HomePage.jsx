import { useHomeVM } from './useHomeVM';
import { usePageTitle } from '@/shared/hooks/usePageTitle';
import { BannerCarousel } from './components/BannerCarousel';
import { WarningAlert } from './components/WarningAlert';
import { LatestNews } from './components/LatestNews';
import { NavButtons } from './components/NavButtons';
import { HomeEventsSection } from './components/HomeEventsSection';

export function HomePage() {
  const { data, loading, error, dismissWarning, events } = useHomeVM();
  usePageTitle('Início');

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Erro</h2>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Banner Carousel - Sem padding lateral no mobile */}
      <div className="md:container md:mx-auto md:px-4 md:pt-8">
        <BannerCarousel banners={data?.banners || []} />
      </div>

      {/* Resto do conteúdo com container normal */}
      <div className="container mx-auto px-4 pb-8 space-y-8">
        {/* Warning Alerts */}
        {data?.warnings && data.warnings.length > 0 && (
          <div className="space-y-3">
            {data.warnings.map((warning) => (
              <WarningAlert
                key={warning.id}
                warning={warning}
                onDismiss={dismissWarning}
              />
            ))}
          </div>
        )}

        {/* Navigation Buttons */}
        <NavButtons />

        {/* Latest News */}
        {data?.latestNews && data.latestNews.length > 0 && (
          <LatestNews news={data.latestNews} />
        )}

        {/* Eventos */}
        <HomeEventsSection
          upcomingPage={events.upcomingPage}
          pastPage={events.pastPage}
          loading={events.loading}
          error={events.error}
          onChangeUpcomingPage={events.changeUpcomingPage}
          onChangePastPage={events.changePastPage}
          onRetryUpcoming={events.reloadUpcoming}
          onRetryPast={events.reloadPast}
        />

        {/* Arte Decorativa */}
        <div className="flex items-center justify-center py-12">
          <div className="w-full max-w-3xl aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-2 border-dashed border-primary/30">
            <div className="text-center text-muted-foreground">
              <p className="text-lg font-medium">Arte decorativa</p>
              <p className="text-sm mt-2">Espaço reservado para ilustração</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
