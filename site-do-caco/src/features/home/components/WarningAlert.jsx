import { AlertCircle, AlertTriangle, Ban, Info, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export function WarningAlert({ warning, onDismiss }) {
  if (!warning) return null;

  const getSeverityColor = () => {
    switch (warning.severityLevel) {
      case 'CRITICAL':
        return 'bg-gray-200 border-gray-900 text-gray-950';
      case 'HIGH':
        return 'bg-red-100 border-red-400 text-red-950';
      case 'MEDIUM':
        return 'bg-yellow-100 border-yellow-400 text-yellow-950';
      case 'LOW':
        return 'bg-blue-100 border-blue-400 text-blue-950';
      default:
        return 'bg-gray-100 border-gray-400 text-gray-950';
    }
  };

  const getSeverityIcon = () => {
    switch (warning.severityLevel) {
      case 'CRITICAL':
        return { Icon: Ban, color: 'text-gray-900' };
      case 'HIGH':
        return { Icon: AlertTriangle, color: 'text-red-700' };
      case 'MEDIUM':
        return { Icon: AlertCircle, color: 'text-yellow-700' };
      case 'LOW':
        return { Icon: Info, color: 'text-blue-700' };
      default:
        return { Icon: AlertCircle, color: 'text-gray-700' };
    }
  };

  const { Icon, color } = getSeverityIcon();

  return (
    <div className={`rounded-lg border-2 p-3 shadow-sm ${getSeverityColor()}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex gap-2 flex-1">
          <Icon className={`h-4 w-4 flex-shrink-0 mt-0.5 ${color}`} />
          <div className="flex-1 min-w-0">
            <div className="prose prose-sm max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 [&>p]:leading-tight text-sm">
              <ReactMarkdown>{warning.markdownText}</ReactMarkdown>
            </div>
          </div>
        </div>
        <button
          onClick={() => onDismiss(warning.id)}
          className="p-0.5 hover:bg-black/10 rounded transition-colors flex-shrink-0"
          aria-label="Fechar aviso"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
