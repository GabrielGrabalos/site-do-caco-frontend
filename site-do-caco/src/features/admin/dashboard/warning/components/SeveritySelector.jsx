import { SeverityLevel } from '../Warning';
import { AlertCircle, AlertTriangle, Ban, Info } from 'lucide-react';

const SEVERITY_CONFIG = {
  LOW: {
    label: 'Baixo',
    icon: Info,
    color: 'border-blue-400 bg-blue-50 hover:bg-blue-100 text-blue-700 data-[selected=true]:bg-blue-500 data-[selected=true]:text-white data-[selected=true]:border-blue-600',
  },
  MEDIUM: {
    label: 'Médio',
    icon: AlertCircle,
    color: 'border-yellow-400 bg-yellow-50 hover:bg-yellow-100 text-yellow-700 data-[selected=true]:bg-yellow-500 data-[selected=true]:text-white data-[selected=true]:border-yellow-600',
  },
  HIGH: {
    label: 'Alto',
    icon: AlertTriangle,
    color: 'border-red-400 bg-red-50 hover:bg-red-100 text-red-700 data-[selected=true]:bg-red-500 data-[selected=true]:text-white data-[selected=true]:border-red-600',
  },
  CRITICAL: {
    label: 'Crítico',
    icon: Ban,
    color: 'border-gray-700 bg-gray-100 hover:bg-gray-200 text-gray-800 data-[selected=true]:bg-gray-800 data-[selected=true]:text-white data-[selected=true]:border-gray-900',
  },
};

export function SeveritySelector({ value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        Nível de Severidade
      </label>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {Object.entries(SeverityLevel).map(([key, level]) => {
          const config = SEVERITY_CONFIG[key];
          const Icon = config.icon;
          
          return (
            <button
              key={level}
              type="button"
              data-selected={value === level}
              onClick={() => onChange(level)}
              className={`flex flex-col items-center justify-center gap-1 px-3 py-2.5 rounded-lg border-2 font-medium transition-all ${config.color}`}
            >
              <Icon className="h-4 w-4" />
              <span className="text-xs">{config.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
