import { FileText, ExternalLink, Calendar } from 'lucide-react';

export function ExamCard({ exam }) {
  const handleOpenLink = () => {
    if (exam.pdfUrl) {
      let url = exam.pdfUrl;
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
      }
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  // Determina a cor do badge baseado no tipo
  const getBadgeColor = (type) => {
    const colors = {
      'P1': 'bg-blue-100 text-blue-700',
      'P2': 'bg-green-100 text-green-700',
      'P3': 'bg-purple-100 text-purple-700',
      'EXAME': 'bg-red-100 text-red-700',
      'SUB': 'bg-orange-100 text-orange-700',
      'OUTROS': 'bg-gray-100 text-gray-700',
    };
    return colors[type] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div
      className="group relative border rounded-lg p-4 hover:shadow-lg transition-all cursor-pointer bg-white"
      onClick={handleOpenLink}
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="flex-shrink-0 p-2.5 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
          <FileText className="h-6 w-6 text-blue-600" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-semibold text-sm leading-tight">
              {exam.subjectCode}
            </h3>
            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getBadgeColor(exam.type)}`}>
              {exam.typeLabel}
            </span>
          </div>
          
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Calendar size={12} />
            <span>{exam.year}</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-end pt-2 border-t">
        <div className="flex items-center gap-1 text-xs text-blue-600 group-hover:text-blue-700 font-medium">
          <span>Abrir PDF</span>
          <ExternalLink size={14} />
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-lg border-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
}
