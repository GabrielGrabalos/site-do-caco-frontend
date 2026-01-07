import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast.jsx';

const EXAM_TYPES = [
  { value: 'P1', label: 'P1' },
  { value: 'P2', label: 'P2' },
  { value: 'P3', label: 'P3' },
  { value: 'EXAME', label: 'EXAME' },
  { value: 'SUB', label: 'SUB' },
  { value: 'OUTROS', label: 'OUTROS' },
];

export function CreateExamModal({ open, onClose, onCreate, onUpdate, loading, selectedSubject, editingExam }) {
  const [year, setYear] = useState(new Date().getFullYear());
  const [type, setType] = useState('P1');
  const [pdfUrl, setPdfUrl] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    if (open) {
      if (editingExam) {
        // Modo edição - preenche com dados existentes
        setYear(editingExam.year);
        setType(editingExam.type);
        setPdfUrl(editingExam.pdfUrl || '');
      } else {
        // Modo criação - limpa campos
        setYear(new Date().getFullYear());
        setType('P1');
        setPdfUrl('');
      }
    }
  }, [open, editingExam]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedSubject) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Nenhuma disciplina selecionada',
      });
      return;
    }

    if (!year) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Ano é obrigatório',
      });
      return;
    }

    if (!type) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Tipo de prova é obrigatório',
      });
      return;
    }

    if (!pdfUrl.trim()) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Por favor, informe o link do PDF',
      });
      return;
    }

    // Validação básica de URL
    try {
      new URL(pdfUrl);
    } catch {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Por favor, informe uma URL válida',
      });
      return;
    }

    const examData = {
      subjectCode: selectedSubject.subjectCode,
      year: parseInt(year),
      type,
      fileUrl: pdfUrl.trim(), // Backend espera fileUrl
    };

    let result;
    if (editingExam) {
      result = await onUpdate(editingExam.id, examData);
    } else {
      result = await onCreate(examData);
    }

    if (result.success) {
      toast({
        title: 'Sucesso',
        description: editingExam ? 'Prova atualizada com sucesso!' : 'Prova adicionada com sucesso!',
      });
      onClose();
    } else {
      toast({
        variant: 'destructive',
        title: editingExam ? 'Erro ao atualizar prova' : 'Erro ao adicionar prova',
        description: result.error,
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {editingExam ? 'Editar Prova' : 'Adicionar Prova'}
            {selectedSubject && (
              <span className="block text-sm text-gray-500 mt-1 font-normal">
                {selectedSubject.subjectCode} - {selectedSubject.name}
              </span>
            )}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="year" className="text-sm font-medium">
              Ano *
            </label>
            <Input
              id="year"
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              min="1900"
              max="2100"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="type" className="text-sm font-medium">
              Tipo de Prova *
            </label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              {EXAM_TYPES.map((examType) => (
                <option key={examType.value} value={examType.value}>
                  {examType.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="pdfUrl" className="text-sm font-medium">
              Link do PDF *
            </label>
            <Input
              id="pdfUrl"
              type="url"
              value={pdfUrl}
              onChange={(e) => setPdfUrl(e.target.value)}
              placeholder="https://drive.google.com/..."
              required
            />
            <p className="text-xs text-gray-500">
              Cole o link direto do PDF (Google Drive, Dropbox, etc.)
            </p>
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
              {loading 
                ? (editingExam ? 'Atualizando...' : 'Adicionando...') 
                : (editingExam ? 'Atualizar Prova' : 'Adicionar Prova')
              }
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
