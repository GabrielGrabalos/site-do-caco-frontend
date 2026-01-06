import { AlertCircle, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export function WarningAlert({ warning, onDismiss }) {
  if (!warning) return null;

  const getSeverityColor = () => {
    switch (warning.severityLevel) {
      case 'CRITICAL':
        return 'bg-red-50 border-red-300 text-red-900';
      case 'HIGH':
        return 'bg-orange-50 border-orange-300 text-orange-900';
      case 'MEDIUM':
        return 'bg-yellow-50 border-yellow-300 text-yellow-900';
      case 'LOW':
        return 'bg-blue-50 border-blue-300 text-blue-900';
      default:
        return 'bg-gray-50 border-gray-300 text-gray-900';
    }
  };

  const getIconColor = () => {
    switch (warning.severityLevel) {
      case 'CRITICAL':
        return 'text-red-600';
      case 'HIGH':
        return 'text-orange-600';
      case 'MEDIUM':
        return 'text-yellow-600';
      case 'LOW':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className={`rounded-lg border-2 p-6 shadow-sm ${getSeverityColor()}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-3 flex-1">
          <AlertCircle className={`h-6 w-6 flex-shrink-0 mt-1 ${getIconColor()}`} />
          <div className="flex-1">
            <div className="prose prose-sm max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
              <ReactMarkdown>{warning.markdownText}</ReactMarkdown>
            </div>
          </div>
        </div>
        <button
          onClick={() => onDismiss(warning.id)}
          className="p-1 hover:bg-black/10 rounded transition-colors flex-shrink-0"
          aria-label="Fechar aviso"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
