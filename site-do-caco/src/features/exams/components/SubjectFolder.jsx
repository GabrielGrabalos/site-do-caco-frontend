import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { ExamList } from './ExamList';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function SubjectFolder({ subject, exams }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Agrupar por tipo
  const examsByType = exams.reduce((acc, exam) => {
    if (!acc[exam.type]) {
      acc[exam.type] = [];
    }
    acc[exam.type].push(exam);
    return acc;
  }, {});

  const typeLabels = {
    P1: 'P1',
    P2: 'P2',
    P3: 'P3',
    FINAL: 'Final',
  };

  return (
    <Card className="overflow-hidden">
      <Button
        variant="ghost"
        className="w-full justify-between p-6 h-auto hover:bg-muted"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3">
          {isExpanded ? (
            <ChevronDown className="h-5 w-5" />
          ) : (
            <ChevronRight className="h-5 w-5" />
          )}
          <span className="text-lg font-semibold">{subject}</span>
          <span className="text-sm text-muted-foreground">
            ({exams.length} {exams.length === 1 ? 'prova' : 'provas'})
          </span>
        </div>
      </Button>

      {isExpanded && (
        <div className="border-t p-6 space-y-6">
          {Object.entries(examsByType).map(([type, typeExams]) => (
            <div key={type}>
              <h4 className="font-semibold mb-3">{typeLabels[type]}</h4>
              <ExamList exams={typeExams} />
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
