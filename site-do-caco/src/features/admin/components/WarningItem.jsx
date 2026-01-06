import { Trash2, Edit2, Clock, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ReactMarkdown from 'react-markdown';
import { Warning } from '../models/Warning';

export function WarningItem({ warning, onEdit, onDelete }) {
  const warningObj = new Warning(warning);
  
  const formatDateTime = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getSeverityBadge = () => {
    const labels = {
      CRITICAL: 'Crítico',
      HIGH: 'Alto',
      MEDIUM: 'Médio',
      LOW: 'Baixo',
    };
    
    const colors = {
      CRITICAL: 'bg-red-100 text-red-800 border-red-300',
      HIGH: 'bg-orange-100 text-orange-800 border-orange-300',
      MEDIUM: 'bg-yellow-100 text-yellow-800 border-yellow-300',
      LOW: 'bg-blue-100 text-blue-800 border-blue-300',
    };

    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${colors[warning.severityLevel]}`}>
        {labels[warning.severityLevel]}
      </span>
    );
  };

  const isActive = warningObj.isActive();

  return (
    <Card className={`${!isActive ? 'opacity-60' : ''}`}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-3">
            {/* Cabeçalho com severidade e status */}
            <div className="flex items-center gap-3 flex-wrap">
              {getSeverityBadge()}
              {!isActive && (
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 border border-gray-300">
                  Inativo
                </span>
              )}
            </div>

            {/* Texto do aviso */}
            <div className="prose prose-sm max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
              <ReactMarkdown>{warning.markdownText}</ReactMarkdown>
            </div>

            {/* Data e hora */}
            <div className="flex items-start gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="font-medium">Início:</span>
                <span>{formatDateTime(warning.startsAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                <span className="font-medium">Término:</span>
                <span>{formatDateTime(warning.expiresAt)}</span>
              </div>
            </div>
          </div>

          {/* Ações */}
          <div className="flex gap-2 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onEdit(warning)}
              className="h-8 w-8 p-0"
            >
              <Edit2 className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onDelete(warning)}
              className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
