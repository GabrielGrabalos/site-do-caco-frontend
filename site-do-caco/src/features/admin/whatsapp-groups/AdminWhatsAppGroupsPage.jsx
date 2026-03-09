import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Loader2, MessageCircle, Pencil, Plus, RefreshCw, Trash2 } from 'lucide-react';
import { useAdminWhatsAppGroupsVM } from './useAdminWhatsAppGroupsVM';

const COURSE_LABELS = {
  CIENCIAS_DA_COMPUTACAO: 'Ciências da Computação',
  ENGENHARIA_DA_COMPUTACAO: 'Engenharia da Computação',
  OUTRO: 'Outro',
};

export function AdminWhatsAppGroupsPage() {
  const vm = useAdminWhatsAppGroupsVM();
  const { toast } = useToast();
  const [deleteLoadingId, setDeleteLoadingId] = useState(null);
  const [groupToDelete, setGroupToDelete] = useState(null);

  const handleSave = async (e) => {
    e.preventDefault();
    const result = await vm.saveGroup();

    if (result.success) {
      toast({
        title: vm.isEditing ? 'Grupo atualizado' : 'Grupo criado',
        description: vm.isEditing
          ? 'O grupo de WhatsApp foi atualizado com sucesso.'
          : 'O grupo de WhatsApp foi criado com sucesso.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao salvar',
        description: result.error,
      });
    }
  };

  const handleDelete = async (groupId) => {
    setDeleteLoadingId(groupId);
    const result = await vm.deleteGroup(groupId);
    setDeleteLoadingId(null);
    setGroupToDelete(null);

    if (result.success) {
      toast({
        title: 'Grupo removido',
        description: 'O grupo de WhatsApp foi removido com sucesso.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao remover',
        description: result.error,
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <MessageCircle className="h-7 w-7 text-green-600" />
            Grupos de WhatsApp
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Gerencie links por curso e ano de ingresso.
          </p>
        </div>

        <Button variant="outline" onClick={vm.reload} disabled={vm.loading} className="gap-2 w-full sm:w-auto">
          <RefreshCw className={`h-4 w-4 ${vm.loading ? 'animate-spin' : ''}`} />
          Atualizar
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{vm.isEditing ? 'Editar grupo' : 'Novo grupo'}</CardTitle>
          <CardDescription>
            Defina o curso, o ano de ingresso e o link do grupo de WhatsApp.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="space-y-2">
              <Label>Curso</Label>
              <Select value={vm.form.course} onValueChange={(value) => vm.setField('course', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  {vm.courseOptions.map((course) => (
                    <SelectItem key={course.value} value={course.value}>
                      {course.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="entry-year">Ano de ingresso</Label>
              <Input
                id="entry-year"
                type="number"
                min="2000"
                max="2100"
                value={vm.form.entryYear}
                onChange={(e) => vm.setField('entryYear', e.target.value)}
                required
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="group-link">Link do grupo</Label>
              <Input
                id="group-link"
                type="url"
                placeholder="https://chat.whatsapp.com/..."
                value={vm.form.whatsappLink}
                onChange={(e) => vm.setField('whatsappLink', e.target.value)}
                required
              />
            </div>

            <div className="md:col-span-4 flex flex-col sm:flex-row gap-2 justify-end pt-2">
              {vm.isEditing && (
                <Button type="button" variant="ghost" onClick={vm.resetForm}>
                  Cancelar edição
                </Button>
              )}
              <Button
                type="submit"
                disabled={
                  vm.submitting ||
                  !vm.form.course ||
                  !vm.form.entryYear ||
                  !vm.form.whatsappLink.trim()
                }
                className="gap-2"
              >
                {vm.submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Salvando...
                  </>
                ) : (
                  <>
                    <Plus className="h-4 w-4" />
                    {vm.isEditing ? 'Salvar alterações' : 'Criar grupo'}
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Grupos cadastrados</CardTitle>
          <CardDescription>
            {vm.groups.length > 0
              ? `${vm.groups.length} grupo(s) cadastrado(s)`
              : 'Nenhum grupo cadastrado ainda'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {vm.loading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          ) : vm.error ? (
            <div className="text-sm text-destructive">{vm.error}</div>
          ) : vm.groups.length === 0 ? (
            <div className="text-sm text-muted-foreground">
              Cadastre o primeiro grupo para que os usuários vejam o botão na página de perfil.
            </div>
          ) : (
            <div className="space-y-3">
              {vm.groups.map((group) => (
                <div
                  key={group.id}
                  className="rounded-lg border p-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="min-w-0">
                    <p className="font-medium">
                      {COURSE_LABELS[group.course] || group.course} · {group.entryYear}
                    </p>
                    <a
                      href={group.whatsappLink || group.groupLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline break-all"
                    >
                      {group.whatsappLink || group.groupLink}
                    </a>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <Button variant="outline" size="sm" onClick={() => vm.startEdit(group)} className="gap-1">
                      <Pencil className="h-4 w-4" />
                      Editar
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => setGroupToDelete(group)}
                      disabled={deleteLoadingId === group.id}
                      className="gap-1"
                    >
                      {deleteLoadingId === group.id ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Trash2 className="h-4 w-4" />
                      )}
                      Remover
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <AlertDialog open={!!groupToDelete} onOpenChange={(open) => !open && setGroupToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Remover grupo de WhatsApp?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta ação não pode ser desfeita. O grupo de{' '}
              {groupToDelete ? `${COURSE_LABELS[groupToDelete.course] || groupToDelete.course} (${groupToDelete.entryYear})` : ''}{' '}
              será removido permanentemente.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={!!deleteLoadingId}>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={(e) => {
                e.preventDefault();
                if (groupToDelete) {
                  handleDelete(groupToDelete.id);
                }
              }}
              disabled={!!deleteLoadingId}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {deleteLoadingId ? 'Removendo...' : 'Remover'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
