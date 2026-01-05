import { AlertCircle, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export function WarningAlert({ warning, onDismiss }) {
  if (!warning) return null;

  const getSeverityColor = () => {
    switch (warning.severity) {
      case 'HIGH':
        return 'bg-red-50 border-red-200 text-red-900';
      case 'MEDIUM':
        return 'bg-yellow-50 border-yellow-200 text-yellow-900';
      default:
        return 'bg-blue-50 border-blue-200 text-blue-900';
    }
  };

  return (
    <div className={`rounded-lg border-2 p-6 ${getSeverityColor()}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-3 flex-1">
          <AlertCircle className="h-6 w-6 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2">{warning.title}</h3>
            <div className="prose prose-sm max-w-none">
              <ReactMarkdown>{warning.content}</ReactMarkdown>
            </div>
          </div>
        </div>
        <button
          onClick={() => onDismiss(warning.id)}
          className="p-1 hover:bg-black/10 rounded transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
