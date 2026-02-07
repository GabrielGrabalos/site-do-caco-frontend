import { ExamItem } from './ExamItem';
import { Button } from '@/components/ui/button';
import { Plus, FileQuestion } from 'lucide-react';
import { AdminListTemplate } from '@/shared/components/templates/AdminListTemplate';

export function ExamList({ exams, loading, onAddExam, onDeleteExam, onEditExam, selectedSubject }) {
  if (!selectedSubject) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-gray-500 min-h-[300px]">
        <FileQuestion size={48} className="mb-4" />
        <p>Selecione uma disciplina para ver as provas</p>
      </div>
    );
  }

  const emptyState = (
    <div className="flex flex-col items-center">
      <FileQuestion size={48} className="mb-4" />
      <p>Nenhuma prova cadastrada para esta disciplina</p>
      <Button onClick={onAddExam} variant="outline" className="mt-4" size="sm">
        <Plus size={16} className="mr-1" />
        Adicionar primeira prova
      </Button>
    </div>
  );

  return (
    <AdminListTemplate
      title={`Provas - ${selectedSubject.subjectCode}`}
      description={selectedSubject.name}
      onCreate={onAddExam}
      createLabel="Adicionar Prova"
      loading={loading}
      isEmpty={exams.length === 0}
      emptyMessage={emptyState}
    >
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
    </AdminListTemplate>
  );
}
