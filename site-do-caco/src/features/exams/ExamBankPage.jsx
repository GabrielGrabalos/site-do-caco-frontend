import { useExamBankVM } from './useExamBankVM';
import { ExamFilters } from './components/ExamFilters';
import { ExamCard } from './components/ExamCard';
import { FileQuestion, Plus } from 'lucide-react';

export function ExamBankPage() {
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
    availableYears,
    clearFilters,
    hasActiveFilters,
  } = useExamBankVM();

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
        selectedSubject={selectedSubject}
        setSelectedSubject={setSelectedSubject}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        availableYears={availableYears}
        clearFilters={clearFilters}
        hasActiveFilters={hasActiveFilters}
      />

      {exams.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <FileQuestion size={64} className="text-gray-300 mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            Nenhuma prova encontrada
          </h3>
          <p className="text-gray-500 mb-4">
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

      {/* Link para adicionar prova */}
      <div className="mt-12 pt-8 border-t border-gray-200 text-center">
        <a
          href="https://forms.gle/YOUR_GOOGLE_FORM_ID"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors"
        >
          Quer adicionar uma prova? Clique aqui
        </a>
      </div>
      </div>
    </div>
  );
}
