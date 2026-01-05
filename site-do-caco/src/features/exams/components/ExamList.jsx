import { Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ExamList({ exams }) {
  return (
    <div className="space-y-2">
      {exams.map((exam) => (
        <div
          key={exam.id}
          className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted transition-colors"
        >
          <div className="flex-1">
            <div className="font-medium">
              {exam.year}/{exam.semester}º Semestre
            </div>
            {exam.professor && (
              <div className="text-sm text-muted-foreground">
                Prof. {exam.professor}
              </div>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            asChild
          >
            <a
              href={exam.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Baixar
              <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
        </div>
      ))}
    </div>
  );
}
