import { useEffect } from 'react';

export function usePageTitle(title) {
  useEffect(() => {
    const fullTitle = title ? `${title} | Site do CACo` : 'Site do CACo';
    document.title = fullTitle;
    
    return () => {
      document.title = 'Site do CACo';
    };
  }, [title]);
}
