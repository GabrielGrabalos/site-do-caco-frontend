import { FileText, ExternalLink, Trash2, Edit } from 'lucide-react';

export function ExamItem({ exam, onDelete, onEdit }) {
  const handleOpenLink = () => {
    if (exam.pdfUrl) {
      // Garante que a URL tenha protocolo
      let url = exam.pdfUrl;
      
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
      }
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="relative border rounded-lg p-4 hover:shadow-md transition-all">
      <div className="flex items-start gap-3 mb-3">
        <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg">
          <FileText className="h-6 w-6 text-blue-600" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-sm">
            {exam.typeLabel} - {exam.year}
          </h4>
          <p className="text-xs text-gray-500 mt-1">
            {exam.createdAt 
              ? `Adicionado em ${exam.createdAt.toLocaleDateString('pt-BR')}`
              : 'Recém adicionado'
            }
          </p>
        </div>
      </div>
      
      <div className="flex gap-2 justify-between items-center border-t pt-2">
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(exam)}
            className="text-xs px-2 py-1 text-gray-600 hover:bg-gray-50 rounded transition-colors flex items-center gap-1"
            title="Editar prova"
          >
            <Edit size={14} />
            Editar
          </button>
          <button
            onClick={() => onDelete(exam.id)}
            className="text-xs px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors flex items-center gap-1"
            title="Excluir prova"
          >
            <Trash2 size={14} />
            Excluir
          </button>
        </div>
        
        <button
          onClick={handleOpenLink}
          className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition-colors"
          title="Abrir PDF"
        >
          <ExternalLink size={16} />
        </button>
      </div>
    </div>
  );
}
