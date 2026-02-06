import { Trash2, Edit2, Clock, AlertTriangle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ReactMarkdown from 'react-markdown';
import { Warning } from '../Warning';
import { SEVERITY_STYLES, SEVERITY_LABELS } from '../models/WarningSeverity';

export function WarningItem({ warning, onEdit, onDelete, onExpire }) {
  const warningObj = new Warning(warning);
  
  const formatDateTime = (isoString) => {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  const getSeverityBadge = () => {
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${SEVERITY_STYLES[warning.severityLevel] || 'bg-gray-100'}`}>
        {SEVERITY_LABELS[warning.severityLevel] || warning.severityLevel}
      </span>
    );
  };

  const isActive = warningObj.isActive();

  return (
    <Card className={`${!isActive ? 'opacity-60' : ''}`}>
      <CardContent className="p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
          <div className="flex-1 space-y-3">
            {/* Cabeçalho com severidade e status */}
            <div className="flex items-center gap-2 flex-wrap">
              {getSeverityBadge()}
              {!isActive && (
                <span className="px-2 sm:px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 border border-gray-300">
                  Inativo
                </span>
              )}
            </div>

            {/* Texto do aviso */}
            <div className="prose prose-sm max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 text-sm sm:text-base">
              <ReactMarkdown>{warning.markdownText}</ReactMarkdown>
            </div>

            {/* Data e hora */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="font-medium">Início:</span>
                <span className="break-all">{formatDateTime(warning.startsAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="font-medium">Término:</span>
                <span className="break-all">{formatDateTime(warning.expiresAt)}</span>
              </div>
            </div>
          </div>

          {/* Ações */}
          <div className="flex gap-2 justify-end sm:justify-start sm:flex-shrink-0">
            {isActive && onExpire && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => onExpire(warning)}
                className="h-8 w-8 p-0 text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                title="Forçar expiração"
              >
                <XCircle className="h-4 w-4" />
              </Button>
            )}
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
