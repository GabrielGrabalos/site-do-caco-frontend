export function FilterButtons({ filters, currentFilter, onFilterChange, items, filterKey = 'severityLevel' }) {
  const getFilterCount = (filterValue) => {
    if (filterValue === 'ALL') return items.length;
    return items.filter(item => item[filterKey] === filterValue).length;
  };

  const getButtonStyles = (filter) => {
    const isActive = currentFilter === filter.value;
    
    if (filter.value === 'ALL') {
      return isActive
        ? 'bg-primary text-primary-foreground'
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200';
    }

    const colorClasses = {
      CRITICAL: {
        active: 'bg-gray-300 text-gray-900 border border-gray-900',
        inactive: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      },
      HIGH: {
        active: 'bg-red-500 text-white',
        inactive: 'bg-red-100 text-red-700 hover:bg-red-200'
      },
      MEDIUM: {
        active: 'bg-yellow-500 text-white',
        inactive: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
      },
      LOW: {
        active: 'bg-blue-500 text-white',
        inactive: 'bg-blue-100 text-blue-700 hover:bg-blue-200'
      }
    };

    const colors = colorClasses[filter.value] || colorClasses.LOW;
    return isActive ? colors.active : colors.inactive;
  };

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${getButtonStyles(filter)}`}
        >
          {filter.label} ({getFilterCount(filter.value)})
        </button>
      ))}
    </div>
  );
}
