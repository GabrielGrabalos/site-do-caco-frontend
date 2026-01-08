import React from 'react';
import { useToast } from '@/components/ui/use-toast.jsx';
import { useAdminExamsVM } from './useAdminExamsVM';
import { ExamsSection } from './components/ExamsSection';

export function AdminExamBankPage() {
  const { toast } = useToast();
  const examsVM = useAdminExamsVM();

  const handleDeleteExam = async (examId) => {
    const result = await examsVM.deleteExam(examId);
    if (result.success) {
      toast({
        title: 'Prova excluída',
        description: 'A prova foi removida com sucesso.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao excluir',
        description: result.error,
      });
    }
    return result.success;
  };

  const handleDeleteSubject = async (subjectCode) => {
    const result = await examsVM.deleteSubject(subjectCode);
    if (result.success) {
      toast({
        title: 'Disciplina excluída',
        description: 'A disciplina e todas as suas provas foram removidas.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao excluir',
        description: result.error,
      });
    }
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold">Banco de Provas</h1>

      <ExamsSection
        subjects={examsVM.subjects}
        selectedSubject={examsVM.selectedSubject}
        onSelectSubject={examsVM.setSelectedSubject}
        exams={examsVM.exams}
        loading={examsVM.loading}
        loadingExams={examsVM.loadingExams}
        creating={examsVM.creating}
        onCreateSubject={examsVM.createSubject}
        onDeleteSubject={handleDeleteSubject}
        onCreateExam={examsVM.createExam}
        onUpdateExam={examsVM.updateExam}
        onDeleteExam={handleDeleteExam}
      />
    </div>
  );
}
