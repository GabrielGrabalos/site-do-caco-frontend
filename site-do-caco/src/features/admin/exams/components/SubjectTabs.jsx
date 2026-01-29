import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export function SubjectTabs({ subjects, selectedSubject, onSelectSubject, onAddSubject, onDeleteSubject }) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [subjectToDelete, setSubjectToDelete] = useState(null);

  const handleDeleteClick = (subject, e) => {
    e.stopPropagation();
    setSubjectToDelete(subject);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    if (subjectToDelete) {
      onDeleteSubject(subjectToDelete.subjectCode);
      setDeleteDialogOpen(false);
      setSubjectToDelete(null);
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-6">
        {subjects.map((subject) => (
          <div
            key={subject.subjectCode}
            className={`
              relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full 
              cursor-pointer transition-all
              ${selectedSubject?.subjectCode === subject.subjectCode
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
            onClick={() => onSelectSubject(subject)}
          >
            <span className="text-sm font-semibold font-mono">
              {subject.subjectCode}
            </span>
            <button
              onClick={(e) => handleDeleteClick(subject, e)}
              className={`
                transition-colors
                ${selectedSubject?.subjectCode === subject.subjectCode
                  ? 'text-white hover:text-red-200'
                  : 'text-gray-400 hover:text-red-500'
                }
              `}
              title="Excluir disciplina"
            >
              <X size={14} />
            </button>
          </div>
        ))}
        
        <Button
          variant="outline"
          size="sm"
          onClick={onAddSubject}
          className="rounded-full px-4 py-2 border-2 border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50"
        >
          <Plus size={16} className="mr-1" />
          Adicionar Matéria
        </Button>
      </div>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Excluir disciplina?</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir a disciplina{' '}
              <strong>{subjectToDelete?.subjectCode} - {subjectToDelete?.name}</strong>?
              <br />
              <br />
              <span className="text-red-600 font-semibold">
                Todas as provas desta disciplina também serão excluídas!
              </span>
              <br />
              Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmDelete}
              className="bg-red-600 hover:bg-red-700"
            >
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
