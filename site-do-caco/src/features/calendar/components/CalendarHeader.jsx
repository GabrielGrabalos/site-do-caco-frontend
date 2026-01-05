import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MONTHS = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

export function CalendarHeader({ currentDate, onChangeMonth }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-3xl font-bold">
        {MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
      </h1>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => onChangeMonth(-1)}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          onClick={() => onChangeMonth(0, new Date())}
        >
          Hoje
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => onChangeMonth(1)}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
