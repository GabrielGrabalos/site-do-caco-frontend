import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export function EventFilters({ filters, onFilterChange, onClearFilters }) {
  const hasActiveFilters = filters.type || filters.importance || filters.status;

  const toggleFilter = (category, value) => {
    onFilterChange({
      ...filters,
      [category]: filters[category] === value ? null : value,
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Filtros</h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="h-8 px-2 text-xs"
          >
            <X className="h-3 w-3 mr-1" />
            Limpar
          </Button>
        )}
      </div>

      {/* Tipo de Evento */}
      <div>
        <label className="text-sm font-medium mb-2 block">Tipo</label>
        <div className="flex flex-wrap gap-2">
          {['ONLINE', 'PRESENCIAL', 'HIBRIDO'].map((type) => (
            <Badge
              key={type}
              variant={filters.type === type ? 'default' : 'outline'}
              className="cursor-pointer"
              onClick={() => toggleFilter('type', type)}
            >
              {type}
            </Badge>
          ))}
        </div>
      </div>

      {/* Importância */}
      <div>
        <label className="text-sm font-medium mb-2 block">Importância</label>
        <div className="flex flex-wrap gap-2">
          {['ALTA', 'MEDIA', 'BAIXA'].map((importance) => (
            <Badge
              key={importance}
              variant={filters.importance === importance ? 'default' : 'outline'}
              className="cursor-pointer"
              onClick={() => toggleFilter('importance', importance)}
            >
              {importance}
            </Badge>
          ))}
        </div>
      </div>

      {/* Status */}
      <div>
        <label className="text-sm font-medium mb-2 block">Status</label>
        <div className="flex flex-wrap gap-2">
          {['PUBLISHED', 'DRAFT'].map((status) => (
            <Badge
              key={status}
              variant={filters.status === status ? 'default' : 'outline'}
              className="cursor-pointer"
              onClick={() => toggleFilter('status', status)}
            >
              {status === 'PUBLISHED' ? 'Publicado' : 'Rascunho'}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
