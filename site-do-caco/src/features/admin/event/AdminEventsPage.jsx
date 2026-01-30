import { useAdminEventsVM } from './useAdminEventsVM';
import { EventForm } from './components/EventForm'; 
import { EventItem } from './components/EventItem';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Plus, PenTool, Trash2, Search, X } from 'lucide-react';

export function AdminEventsPage() {
  const vm = useAdminEventsVM();

  if (vm.viewMode === 'FORM') {
    return (
      <EventForm 
        key={vm.selectedEvent ? vm.selectedEvent.id : 'new-event'}
        initialData={vm.selectedEvent}
        onSubmit={vm.handleSubmit}
        onCancel={vm.handleCancelForm}
        onDelete={vm.deleteEvent}
        loading={vm.loading}
      />
    );
  }

  // Componente Auxiliar para Tags de Filtro
  const FilterTag = ({ label, active, onClick }) => (
    <Badge 
      variant={active ? "default" : "outline"}
      className={`cursor-pointer px-4 py-1.5 text-sm hover:bg-primary/90 hover:text-primary-foreground transition-all ${
        !active && "hover:bg-muted text-muted-foreground"
      }`}
      onClick={onClick}
    >
      {label}
    </Badge>
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Gerenciar Eventos</h1>
        <Button onClick={vm.handleCreateClick}>
          <Plus className="w-4 h-4 mr-2" /> Novo Evento
        </Button>
      </div>

      {/* Alerta de Rascunho */}
      {vm.hasDraft && (
        <Alert className="border-orange-200 bg-orange-50 dark:bg-orange-950/20 text-orange-800 dark:text-orange-200">
          <PenTool className="h-4 w-4" />
          <AlertTitle>Rascunho encontrado!</AlertTitle>
          <AlertDescription className="flex items-center justify-between mt-2">
            <span>Você tem um evento não finalizado salvo.</span>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="bg-transparent border-orange-300 hover:bg-orange-100" onClick={vm.discardDraft}>
                <Trash2 className="w-3 h-3 mr-1" /> Descartar
              </Button>
              <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white" onClick={vm.handleCreateClick}>
                Continuar Editando
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {/* --- SISTEMA DE FILTROS POR TAGS --- */}
      <div className="space-y-4">
        {/* Busca e Limpar */}
        <div className="relative max-w-md">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
                placeholder="Buscar por título ou local..." 
                className="pl-8"
                value={vm.searchTerm}
                onChange={(e) => vm.setSearchTerm(e.target.value)}
            />
            {vm.searchTerm && (
                <button 
                    onClick={() => vm.setSearchTerm('')}
                    className="absolute right-2 top-2.5 text-muted-foreground hover:text-foreground"
                >
                    <X className="w-4 h-4" />
                </button>
            )}
        </div>

        {/* Grupos de Tags */}
        <div className="flex flex-col gap-3">
            {/* Status (Temporal) */}
            <div className="flex flex-wrap gap-2 items-center">
                <span className="text-xs font-semibold text-muted-foreground uppercase mr-2 w-20">Período:</span>
                <FilterTag label="Todos" active={vm.filters.period === 'ALL'} onClick={() => vm.setFilter('period', 'ALL')} />
                <FilterTag label="Próximos" active={vm.filters.period === 'UPCOMING'} onClick={() => vm.setFilter('period', 'UPCOMING')} />
                <FilterTag label="Passados" active={vm.filters.period === 'PAST'} onClick={() => vm.setFilter('period', 'PAST')} />
            </div>

            {/* Tipo */}
            <div className="flex flex-wrap gap-2 items-center">
                <span className="text-xs font-semibold text-muted-foreground uppercase mr-2 w-20">Tipo:</span>
                <FilterTag label="Todos" active={vm.filters.type === 'ALL'} onClick={() => vm.setFilter('type', 'ALL')} />
                <FilterTag label="CACo" active={vm.filters.type === 'CACO'} onClick={() => vm.setFilter('type', 'CACO')} />
                <FilterTag label="IC" active={vm.filters.type === 'IC'} onClick={() => vm.setFilter('type', 'IC')} />
                <FilterTag label="Feriado" active={vm.filters.type === 'FERIADO'} onClick={() => vm.setFilter('type', 'FERIADO')} />
            </div>

            {/* Importância */}
            <div className="flex flex-wrap gap-2 items-center">
                <span className="text-xs font-semibold text-muted-foreground uppercase mr-2 w-20">Destaque:</span>
                <FilterTag label="Todos" active={vm.filters.importance === 'ALL'} onClick={() => vm.setFilter('importance', 'ALL')} />
                <FilterTag label="Importante" active={vm.filters.importance === 'MAJOR'} onClick={() => vm.setFilter('importance', 'MAJOR')} />
                <FilterTag label="Comum" active={vm.filters.importance === 'MINOR'} onClick={() => vm.setFilter('importance', 'MINOR')} />
            </div>
        </div>
      </div>

      {/* Lista de Eventos (Unificada) */}
      {vm.loading ? (
        <div className="py-20 text-center text-muted-foreground">Carregando eventos...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
            {vm.filteredList.length === 0 ? (
                 <div className="col-span-full text-center py-12 border-2 border-dashed rounded-lg text-muted-foreground">
                    Nenhum evento encontrado com os filtros selecionados.
                 </div>
            ) : (
                vm.filteredList.map(event => (
                    <EventItem 
                        key={event.id} 
                        event={event} 
                        onUpdate={() => vm.handleEditClick(event)} 
                        onDelete={() => vm.deleteEvent(event.id)} 
                    />
                ))
            )}
        </div>
      )}
    </div>
  );
}