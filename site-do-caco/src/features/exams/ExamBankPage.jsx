import { useEffect, useRef } from 'react';
import { useExamBankVM } from './useExamBankVM';
import { usePageTitle } from '@/shared/hooks/usePageTitle';
import { ExamFilters } from './components/ExamFilters';
import { ExamCard } from './components/ExamCard';
import { FileQuestion } from 'lucide-react';

export function ExamBankPage() {
  usePageTitle('Banco de Provas');
  const {
    subjects,
    exams,
    loading,
    loadingExams,
    loadingMoreExams,
    hasMoreExams,
    loadMoreExams,
    hasLoadedExamsOnce,
    error,
    selectedSubject,
    setSelectedSubject,
    selectedYear,
    setSelectedYear,
    selectedType,
    setSelectedType,
    professors,
    professorSearchSettledTerm,
    loadingProfessors,
    loadingMoreProfessors,
    hasMoreProfessors,
    loadMoreProfessors,
    setProfessorSearch,
    selectedProfessorId,
    setSelectedProfessorId,
    availableYears,
    clearFilters,
    hasActiveFilters,
    activeFilterCount,
  } = useExamBankVM();

  const loadMoreTriggerRef = useRef(null);

  useEffect(() => {
    if (!loadMoreTriggerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          loadMoreExams();
        }
      },
      { rootMargin: '200px 0px' }
    );

    observer.observe(loadMoreTriggerRef.current);

    return () => observer.disconnect();
  }, [loadMoreExams]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Erro</h2>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Banco de Provas</h1>
          <p className="text-muted-foreground">
            Acesse provas anteriores organizadas por disciplina, ano e tipo
          </p>
        </div>

      <ExamFilters
        subjects={subjects}
        professors={professors}
        professorSearchSettledTerm={professorSearchSettledTerm}
        loadingProfessors={loadingProfessors}
        loadingMoreProfessors={loadingMoreProfessors}
        hasMoreProfessors={hasMoreProfessors}
        loadMoreProfessors={loadMoreProfessors}
        setProfessorSearch={setProfessorSearch}
        selectedSubject={selectedSubject}
        setSelectedSubject={setSelectedSubject}
        selectedProfessorId={selectedProfessorId}
        setSelectedProfessorId={setSelectedProfessorId}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        availableYears={availableYears}
        clearFilters={clearFilters}
        hasActiveFilters={hasActiveFilters}
        activeFilterCount={activeFilterCount}
      />

      {loadingExams && (
        <div className="mb-4 text-sm text-muted-foreground">Atualizando resultados...</div>
      )}

      {!hasLoadedExamsOnce || (loadingExams && exams.length === 0) ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        </div>
      ) : exams.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <FileQuestion size={64} className="text-gray-300 dark:text-gray-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
            Nenhuma prova encontrada
          </h3>
          <p className="text-gray-500 dark:text-gray-500 mb-4">
            {hasActiveFilters
              ? 'Tente ajustar os filtros para ver mais resultados'
              : 'Ainda não há provas cadastradas'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {exams.map((exam) => (
            <ExamCard key={exam.id} exam={exam} />
          ))}
        </div>
      )}

      <div ref={loadMoreTriggerRef} className="h-8" aria-hidden />

      {loadingMoreExams && (
        <div className="text-center text-sm text-muted-foreground mt-2">Carregando mais provas...</div>
      )}

      {!hasMoreExams && exams.length > 0 && (
        <div className="text-center text-xs text-muted-foreground mt-3">Você chegou ao fim da lista.</div>
      )}

      {/* Link para adicionar prova */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
        <a
          href={import.meta.env.VITE_ADICIONAR_PROVA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors"
        >
          Quer adicionar uma prova? Clique aqui
        </a>
      </div>
      </div>
    </div>
  );
}
