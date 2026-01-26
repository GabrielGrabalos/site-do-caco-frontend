import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, Plus, Trash2, Save, X } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast.jsx';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useAdminEventsVM } from './useAdminEventsVM';
import { MDXEditor } from '@/shared/components/MDXEditor';
import { Badge } from '@/components/ui/badge';

const EVENT_TYPES = ['CACO', 'IC', 'FERIADO'];
const EVENT_IMPORTANCE = ['MAJOR', 'MINOR'];
const EVENT_STATUS = ['SCHEDULED', 'HAPPENING', 'ENDED'];

export function AdminEventsPage() {
  const { events, loading, creating, createEvent, updateEvent, deleteEvent } = useAdminEventsVM();
  const [editingEvent, setEditingEvent] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);
  const [editorResetKey, setEditorResetKey] = useState(0);
  const { toast } = useToast();

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    location: '',
    coverImage: '',
    type: 'CACO',
    importance: 'MINOR',
    status: 'SCHEDULED',
  });

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      startDate: '',
      endDate: '',
      location: '',
      coverImage: '',
      type: 'CACO',
      importance: 'MINOR',
      status: 'SCHEDULED',
    });
    setEditingEvent(null);
    setEditorResetKey(prev => prev + 1);
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
    setFormData({
      title: event.title || '',
      description: event.description || '',
      startDate: event.startDate?.substring(0, 16) || '',
      endDate: event.endDate?.substring(0, 16) || '',
      location: event.location || '',
      coverImage: event.coverImage || '',
      type: event.type || 'CACO',
      importance: event.importance || 'MINOR',
      status: event.status || 'SCHEDULED',
    });
    setEditorResetKey(prev => prev + 1);
  };

  const handleSave = async () => {
    if (!formData.title || !formData.description) {
      toast({
        title: 'Campos obrigatórios',
        description: 'Título e descrição são obrigatórios',
        variant: 'destructive',
      });
      return;
    }

    const eventData = {
      ...formData,
      startDate: formData.startDate || null,
      endDate: formData.endDate || null,
    };

    const result = editingEvent?.id
      ? await updateEvent(editingEvent.id, eventData)
      : await createEvent(eventData);

    if (result.success) {
      toast({
        title: editingEvent?.id ? 'Evento atualizado' : 'Evento criado',
        description: `${formData.title} foi ${editingEvent?.id ? 'atualizado' : 'criado'} com sucesso`,
      });
      resetForm();
    } else {
      toast({
        title: 'Erro',
        description: result.error || 'Erro ao salvar evento',
        variant: 'destructive',
      });
    }
  };

  const handleDelete = async () => {
    if (!eventToDelete) return;

    const result = await deleteEvent(eventToDelete.id);
    if (result.success) {
      toast({
        title: 'Evento excluído',
        description: `${eventToDelete.title} foi excluído com sucesso`,
      });
      if (editingEvent?.id === eventToDelete.id) {
        resetForm();
      }
    } else {
      toast({
        title: 'Erro',
        description: result.error || 'Erro ao excluir evento',
        variant: 'destructive',
      });
    }
    setDeleteDialogOpen(false);
    setEventToDelete(null);
  };

  const confirmDelete = (event) => {
    setEventToDelete(event);
    setDeleteDialogOpen(true);
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '-';
    return new Date(dateStr).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusBadge = (status) => {
    const variants = {
      SCHEDULED: 'default',
      HAPPENING: 'secondary',
      ENDED: 'outline',
    };
    return <Badge variant={variants[status] || 'default'}>{status}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Calendar className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold">Gerenciar Eventos</h1>
        </div>
        {!editingEvent && (
          <Button onClick={() => setEditingEvent({})}>
            <Plus className="h-4 w-4 mr-2" />
            Novo Evento
          </Button>
        )}
      </div>

      {editingEvent && (
        <Card>
          <CardHeader>
            <CardTitle>{editingEvent.id ? 'Editar Evento' : 'Novo Evento'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Título *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Nome do evento"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Local</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Local do evento"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="startDate">Data de Início</Label>
                <Input
                  id="startDate"
                  type="datetime-local"
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endDate">Data de Término</Label>
                <Input
                  id="endDate"
                  type="datetime-local"
                  value={formData.endDate}
                  onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Tipo</Label>
                <select
                  id="type"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                >
                  {EVENT_TYPES.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="importance">Importância</Label>
                <select
                  id="importance"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={formData.importance}
                  onChange={(e) => setFormData({ ...formData, importance: e.target.value })}
                >
                  {EVENT_IMPORTANCE.map((imp) => (
                    <option key={imp} value={imp}>{imp}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <select
                  id="status"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                >
                  {EVENT_STATUS.map((stat) => (
                    <option key={stat} value={stat}>{stat}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="coverImage">URL da Imagem de Capa</Label>
                <Input
                  id="coverImage"
                  value={formData.coverImage}
                  onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                  placeholder="https://..."
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Descrição *</Label>
              <MDXEditor
                key={editorResetKey}
                initialContent={formData.description}
                onChange={(content) => setFormData({ ...formData, description: content })}
              />
            </div>

            <div className="flex gap-2">
              <Button onClick={handleSave} disabled={creating}>
                <Save className="h-4 w-4 mr-2" />
                {creating ? 'Salvando...' : 'Salvar'}
              </Button>
              <Button variant="outline" onClick={resetForm}>
                <X className="h-4 w-4 mr-2" />
                Cancelar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Eventos Cadastrados</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="text-muted-foreground">Carregando...</p>
          ) : events.length === 0 ? (
            <p className="text-muted-foreground">Nenhum evento cadastrado</p>
          ) : (
            <div className="space-y-2">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{event.title}</h3>
                      {getStatusBadge(event.status)}
                      <Badge variant="outline">{event.type}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {formatDate(event.startDate)} - {formatDate(event.endDate)}
                    </p>
                    {event.location && (
                      <p className="text-sm text-muted-foreground">{event.location}</p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(event)}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => confirmDelete(event)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar Exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir "{eventToDelete?.title}"? Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Excluir</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
