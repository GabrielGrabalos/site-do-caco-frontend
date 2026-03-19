import { useExamBankVM } from './useExamBankVM';
import { usePageTitle } from '@/shared/hooks/usePageTitle';
import { ExamFilters } from './components/ExamFilters';
import { ExamCard } from './components/ExamCard';
import { FileQuestion, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ExamBankPage() {
  usePageTitle('Banco de Provas');
  const {
    subjects,
    exams,
    loading,
    error,
    selectedSubject,
    setSelectedSubject,
    selectedYear,
    setSelectedYear,
    selectedType,
    setSelectedType,
    professors,
    selectedProfessorId,
    setSelectedProfessorId,
    availableYears,
    clearFilters,
    hasActiveFilters,
    activeFilterCount,
    currentPage,
    totalPages,
    totalElements,
    goToPage,
    loadMoreProfessors,
    searchProfessors,
    loadingProfessors,
    hasMoreProfessors,
  } = useExamBankVM();

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
        onLoadMoreProfessors={loadMoreProfessors}
        hasMoreProfessors={hasMoreProfessors}
        loadingMoreProfessors={loadingProfessors}
        onSearchProfessors={searchProfessors}
      />

      {error && (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-300">
          {error}
        </div>
      )}

      {loading && (
        <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary/20 border-t-primary" />
          Carregando provas...
        </div>
      )}

      {loading && exams.length === 0 ? (
        <div className="flex items-center justify-center py-16">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary/20 border-t-primary" />
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
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
            {exams.map((exam) => (
              <ExamCard key={exam.id} exam={exam} />
            ))}
          </div>

          {/* Paginação */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="text-sm text-muted-foreground">
                Página {currentPage + 1} de {totalPages} ({totalElements} provas)
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 0 || loading}
                >
                  <ChevronLeft className="h-4 w-4" />
                  Anterior
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage >= totalPages - 1 || loading}
                >
                  Próxima
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </>
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
