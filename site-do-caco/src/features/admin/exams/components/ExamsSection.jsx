import { useState } from 'react';
import { ExamList } from './ExamList';
import { CreateExamModal } from './CreateExamModal';
import { SubjectTabs } from './SubjectTabs';
import { CreateSubjectModal } from './CreateSubjectModal';
import { ConfirmDeleteDialog } from '../../components/ConfirmDeleteDialog';

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

      <ExamList
        exams={exams}
        loading={loadingExams}
        onAddExam={() => setExamModalOpen(true)}
        onDeleteExam={handleDeleteExam}
        onEditExam={handleEditExam}
        selectedSubject={selectedSubject}
      />

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
