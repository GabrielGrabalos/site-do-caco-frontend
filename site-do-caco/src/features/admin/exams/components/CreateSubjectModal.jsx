import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast.jsx';

export function CreateSubjectModal({ open, onClose, onCreate, loading }) {
  const [subjectCode, setSubjectCode] = useState('');
  const [name, setName] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    if (open) {
      setSubjectCode('');
      setName('');
    }
  }, [open]);

  const handleSubjectCodeChange = (e) => {
    // Converte automaticamente para maiúsculas
    const value = e.target.value.toUpperCase();
    // Remove caracteres que não sejam letras ou números
    const sanitized = value.replace(/[^A-Z0-9]/g, '');
    setSubjectCode(sanitized);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!subjectCode.trim()) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Código da disciplina é obrigatório',
      });
      return;
    }

    if (!name.trim()) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Nome da disciplina é obrigatório',
      });
      return;
    }

    const result = await onCreate({
      subjectCode: subjectCode.trim(),
      name: name.trim(),
    });

    if (result.success) {
      toast({
        title: 'Sucesso',
        description: 'Disciplina criada com sucesso!',
      });
      onClose();
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao criar disciplina',
        description: result.error,
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Adicionar Nova Disciplina</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="subjectCode" className="text-sm font-medium">
              Código da Disciplina *
            </label>
            <Input
              id="subjectCode"
              value={subjectCode}
              onChange={handleSubjectCodeChange}
              placeholder="Ex: MAC0338"
              maxLength={20}
              required
              className="font-mono"
            />
            <p className="text-xs text-gray-500">
              Apenas letras maiúsculas e números
            </p>
          </div>

          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Nome da Disciplina *
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Análise de Algoritmos"
              maxLength={100}
              required
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={loading}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Criando...' : 'Criar Disciplina'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
