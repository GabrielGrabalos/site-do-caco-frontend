import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SubjectTabs } from './SubjectTabs';
import { ExamList } from './ExamList';
import { CreateSubjectModal } from './CreateSubjectModal';
import { CreateExamModal } from './CreateExamModal';
import { ConfirmDeleteDialog } from './ConfirmDeleteDialog';

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
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">Banco de Provas</CardTitle>
          <p className="text-xs md:text-sm text-muted-foreground">
            Gerencie as disciplinas e adicione provas por matéria.
          </p>
        </CardHeader>
        <CardContent>
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
        </CardContent>
      </Card>

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
    </>
  );
}
