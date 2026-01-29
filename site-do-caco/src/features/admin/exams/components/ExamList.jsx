import { ExamItem } from './ExamItem';
import { Button } from '@/components/ui/button';
import { Plus, FileQuestion } from 'lucide-react';

export function ExamList({ exams, loading, onAddExam, onDeleteExam, onEditExam, selectedSubject }) {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-12 min-h-[300px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (!selectedSubject) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-gray-500 min-h-[300px]">
        <FileQuestion size={48} className="mb-4" />
        <p>Selecione uma disciplina para ver as provas</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">
            Provas - {selectedSubject.subjectCode}
          </h3>
          <p className="text-sm text-gray-500">{selectedSubject.name}</p>
        </div>
        <Button onClick={onAddExam} size="sm">
          <Plus size={16} className="mr-1" />
          Adicionar Prova
        </Button>
      </div>

      {exams.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-gray-500 border-2 border-dashed rounded-lg">
          <FileQuestion size={48} className="mb-4" />
          <p>Nenhuma prova cadastrada para esta disciplina</p>
          <Button onClick={onAddExam} variant="outline" className="mt-4" size="sm">
            <Plus size={16} className="mr-1" />
            Adicionar primeira prova
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {exams.map((exam) => (
            <ExamItem
              key={exam.id}
              exam={exam}
              onDelete={onDeleteExam}
              onEdit={onEditExam}
            />
          ))}
        </div>
      )}
    </div>
  );
}
