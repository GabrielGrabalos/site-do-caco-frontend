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
      'P1': 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
      'P2': 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
      'P3': 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
      'EXAME': 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
      'SUB': 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
      'TESTINHO': 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300',
      'OUTROS': 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
    };
    return colors[type] || 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
  };

  return (
    <div
      className="group relative border rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer bg-white dark:bg-gray-800 dark:border-gray-700"
      onClick={handleOpenLink}
    >
      {/* Header colorido baseado no tipo */}
      <div className={`h-2 ${getBadgeColor(exam.type).split(' ')[0]}`} />
      
      <div className="p-5">
        {/* Cabeçalho com ícone e badge */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl group-hover:scale-110 transition-transform">
              <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${getBadgeColor(exam.type)}`}>
              {exam.typeLabel}
            </span>
          </div>
        </div>
        
        {/* Código da disciplina */}
        <h3 className="font-bold text-lg mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {exam.subjectCode}
        </h3>
        
        {/* Nome da disciplina (se disponível) */}
        {exam.subjectName && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {exam.subjectName}
          </p>
        )}
        
        {/* Ano + Professor */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-600 dark:text-gray-400 mb-4">
          <div className="flex items-center gap-1.5">
            <Calendar size={15} />
            <span className="font-medium">{exam.year}</span>
          </div>
          {exam.professor?.name && (
            <span className="text-xs font-medium text-blue-600 dark:text-blue-400 truncate max-w-[140px]">
              {exam.professor.name}
            </span>
          )}
        </div>
        
        {/* Botão de ação */}
        <div className="flex items-center justify-between pt-3 border-t dark:border-gray-700">
          <span className="text-xs text-muted-foreground">Clique para visualizar</span>
          <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 font-semibold">
            <span>Abrir</span>
            <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-lg border-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
}
