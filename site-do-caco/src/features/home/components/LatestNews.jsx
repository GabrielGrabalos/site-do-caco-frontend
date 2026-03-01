import { Newspaper } from 'lucide-react';
import { NewsCard } from '@/features/news/components/NewsCard';
import { CarouselSection } from './CarouselSection';

export function LatestNews({ news = [], onEndReached, loading = false, error = null, onRetry }) {
  return (
    <CarouselSection
      items={news}
      renderItem={(article) => <NewsCard article={article} />}
      onEndReached={onEndReached}
      title="Últimas Notícias"
      icon={<Newspaper className="h-6 w-6" />}
      loading={loading}
      error={error}
      onRetry={onRetry}
    />
  );
}
