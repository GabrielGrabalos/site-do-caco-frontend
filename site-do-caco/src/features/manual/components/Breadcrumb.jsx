import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Breadcrumb({ path = [] }) {
  if (path.length === 0) return null;

  return (
    <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
      <Link to="/manual" className="hover:text-foreground transition-colors">
        Manual
      </Link>
      {path.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="h-4 w-4" />
          {index === path.length - 1 ? (
            <span className="text-foreground font-medium">{item}</span>
          ) : (
            <span>{item}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
