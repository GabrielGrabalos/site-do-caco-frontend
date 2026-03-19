import { useState } from 'react';
import { ExamList } from './ExamList';
import { CreateExamModal } from './CreateExamModal';
import { SubjectTabs } from './SubjectTabs';
import { CreateSubjectModal } from './CreateSubjectModal';
import { ConfirmDeleteDialog } from '../../components/ConfirmDeleteDialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function ExamsSection({
  subjects,
  selectedSubject,
  onSelectSubject,
  exams,
  loading,
  loadingExams,
  creating,
  onCreateSubject,
  onDeleteSubject,
  onCreateExam,
  onUpdateExam,
  onDeleteExam,
  professors,
  onCreateProfessor,
  onUpdateProfessor,
  onDeleteProfessor,
  currentPage,
  totalPages,
  totalElements,
  onGoToPage,
}) {
  const [subjectModalOpen, setSubjectModalOpen] = useState(false);
  const [examModalOpen, setExamModalOpen] = useState(false);
  const [editingExam, setEditingExam] = useState(null);
  const [deleteExamDialogOpen, setDeleteExamDialogOpen] = useState(false);
  const [examToDelete, setExamToDelete] = useState(null);

  const handleEditExam = (exam) => {
    setEditingExam(exam);
    setExamModalOpen(true);
  };

  const handleCloseExamModal = () => {
    setExamModalOpen(false);
    setEditingExam(null);
  };

  const handleDeleteExam = (examId) => {
    setExamToDelete(examId);
    setDeleteExamDialogOpen(true);
  };

  const confirmDeleteExam = async () => {
    if (!examToDelete) return;
    await onDeleteExam(examToDelete);
    setDeleteExamDialogOpen(false);
    setExamToDelete(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg md:text-xl font-semibold tracking-tight">Banco de Provas</h2>
        <p className="text-sm text-muted-foreground">
          Gerencie as disciplinas e adicione provas por matéria.
        </p>
      </div>

      <SubjectTabs
        subjects={subjects}
        selectedSubject={selectedSubject}
        onSelectSubject={onSelectSubject}
        onAddSubject={() => setSubjectModalOpen(true)}
        onDeleteSubject={onDeleteSubject}
      />

      <div className="space-y-4">
        <ExamList
          exams={exams}
          loading={loadingExams}
          onAddExam={() => setExamModalOpen(true)}
          onDeleteExam={handleDeleteExam}
          onEditExam={handleEditExam}
          selectedSubject={selectedSubject}
        />

        {/* Paginação */}
        {totalPages && totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="text-sm text-muted-foreground">
              Página {(currentPage || 0) + 1} de {totalPages} ({totalElements} provas)
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onGoToPage((currentPage || 0) - 1)}
                disabled={(currentPage || 0) === 0 || loadingExams}
              >
                <ChevronLeft className="h-4 w-4" />
                Anterior
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onGoToPage((currentPage || 0) + 1)}
                disabled={(currentPage || 0) >= totalPages - 1 || loadingExams}
              >
                Próxima
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>

      <CreateSubjectModal
        open={subjectModalOpen}
        onClose={() => setSubjectModalOpen(false)}
        onCreate={onCreateSubject}
        loading={creating}
      />

      <CreateExamModal
        open={examModalOpen}
        onClose={handleCloseExamModal}
        onCreate={onCreateExam}
        onUpdate={onUpdateExam}
        loading={creating}
        selectedSubject={selectedSubject}
        editingExam={editingExam}
        professors={professors}
        onCreateProfessor={onCreateProfessor}
        onUpdateProfessor={onUpdateProfessor}
        onDeleteProfessor={onDeleteProfessor}
      />

      <ConfirmDeleteDialog
        open={deleteExamDialogOpen}
        onOpenChange={setDeleteExamDialogOpen}
        onConfirm={confirmDeleteExam}
        title="Confirmar exclusão"
        description="Tem certeza que deseja excluir esta prova? Esta ação não pode ser desfeita."
      />
    </div>
  );
}
