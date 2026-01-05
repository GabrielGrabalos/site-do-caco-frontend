import { Search } from 'lucide-react';
import { useExamBankVM } from './useExamBankVM';
import { SubjectFolder } from './components/SubjectFolder';
import { Input } from '@/components/ui/input';

export function ExamBankPage() {
  const { examsBySubject, loading, error, searchQuery, setSearchQuery } =
    useExamBankVM();

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

  const subjects = Object.keys(examsBySubject).sort();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Banco de Provas</h1>
        <p className="text-muted-foreground mb-6">
          Acesse provas anteriores organizadas por disciplina
        </p>

        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Buscar disciplina..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {subjects.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            {searchQuery
              ? 'Nenhuma disciplina encontrada com esse nome'
              : 'Nenhuma prova disponível no momento'}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {subjects.map((subject) => (
            <SubjectFolder
              key={subject}
              subject={subject}
              exams={examsBySubject[subject]}
            />
          ))}
        </div>
      )}
    </div>
  );
}
