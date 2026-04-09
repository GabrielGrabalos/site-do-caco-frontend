import { BookOpen, ChevronRight } from 'lucide-react';

export function SubjectBlock({ subjectCode, examsCount, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group w-full rounded-lg border bg-white dark:bg-gray-800 dark:border-gray-700 text-left overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all"
    >
      <div className="h-2 bg-blue-500" />

      <div className="p-5">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl group-hover:scale-110 transition-transform">
              <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>

        <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {subjectCode}
        </h3>

        <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {examsCount} {examsCount === 1 ? 'prova' : 'provas'}
        </div>

        <div className="flex items-center justify-between pt-3 border-t dark:border-gray-700">
          <span className="text-xs text-muted-foreground">Clique para ver provas</span>
          <div className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 font-semibold">
            <span>Abrir</span>
            <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 rounded-lg border-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </button>
  );
}
