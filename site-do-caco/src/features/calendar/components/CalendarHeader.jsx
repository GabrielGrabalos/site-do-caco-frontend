import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MONTHS = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

export function CalendarHeader({ currentDate, onChangeMonth }) {
  const handleTodayClick = () => {
    onChangeMonth(0, new Date());
  };

  return (
    <div className="flex flex-col sm:grid sm:grid-cols-3 items-center gap-4 mb-6 w-full">
      <div className="hidden sm:block"></div>
      
      <h2 className="text-2xl sm:text-3xl font-bold capitalize text-nowrap text-center order-1 sm:order-none">
        {MONTHS[currentDate.getMonth()]} <span className="text-muted-foreground ml-1">{currentDate.getFullYear()}</span>
      </h2>
      
      <div className="flex items-center justify-center sm:justify-end gap-2 w-full order-2 sm:order-none">
        <Button
          variant="outline"
          size="icon"
          onClick={() => onChangeMonth(-1)}
          title="Mês anterior"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="px-6"
          onClick={handleTodayClick}
          title="Ir para o mês atual"
        >
          Hoje
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => onChangeMonth(1)}
          title="Próximo mês"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
