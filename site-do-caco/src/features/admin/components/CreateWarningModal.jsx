import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar } from 'lucide-react';
import { SeverityLevel } from '../models/Warning';

export function CreateWarningModal({ open, onClose, onCreate, onUpdate, loading, editingWarning }) {
  const [formData, setFormData] = useState({
    markdownText: '',
    severityLevel: SeverityLevel.LOW,
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
  });

  const [errors, setErrors] = useState({});

  // Quando editar um aviso, preenche o formulário
  useEffect(() => {
    if (open && editingWarning) {
      const startDate = new Date(editingWarning.startsAt);
      const endDate = new Date(editingWarning.expiresAt);
      
      setFormData({
        markdownText: editingWarning.markdownText || '',
        severityLevel: editingWarning.severityLevel || SeverityLevel.LOW,
        startDate: startDate.toISOString().split('T')[0],
        startTime: startDate.toTimeString().slice(0, 5),
        endDate: endDate.toISOString().split('T')[0],
        endTime: endDate.toTimeString().slice(0, 5),
      });
    } else if (open && !editingWarning) {
      // Reset para novo aviso
      setFormData({
        markdownText: '',
        severityLevel: SeverityLevel.LOW,
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: '',
      });
      setErrors({});
    }
  }, [open, editingWarning]);

  const validate = () => {
    const newErrors = {};

    if (!formData.markdownText.trim()) {
      newErrors.markdownText = 'O texto do aviso é obrigatório';
    }

    if (!formData.startDate) {
      newErrors.startDate = 'A data de início é obrigatória';
    }

    if (!formData.endDate) {
      newErrors.endDate = 'A data de término é obrigatória';
    }

    if (formData.startDate && formData.endDate) {
      const start = new Date(formData.startDate + 'T' + (formData.startTime || '00:00'));
      const end = new Date(formData.endDate + 'T' + (formData.endTime || '23:59'));
      
      if (end <= start) {
        newErrors.endDate = 'A data de término deve ser posterior à data de início';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;

    // Monta as datas ISO
    const startsAt = new Date(
      formData.startDate + 'T' + (formData.startTime || '00:00') + ':00'
    ).toISOString();
    
    const expiresAt = new Date(
      formData.endDate + 'T' + (formData.endTime || '23:59') + ':59'
    ).toISOString();

    const dto = {
      markdownText: formData.markdownText,
      severityLevel: formData.severityLevel,
      startsAt,
      expiresAt,
    };

    if (editingWarning) {
      await onUpdate(editingWarning.id, dto);
    } else {
      await onCreate(dto);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {editingWarning ? 'Editar Aviso' : 'Criar Novo Aviso'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Texto do Aviso (Markdown) */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Texto do Aviso (Markdown)
            </label>
            <textarea
              value={formData.markdownText}
              onChange={(e) => setFormData({ ...formData, markdownText: e.target.value })}
              placeholder="**Atenção:** Este é um exemplo de aviso com *markdown*"
              rows={6}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.markdownText && (
              <p className="text-red-500 text-sm mt-1">{errors.markdownText}</p>
            )}
            <p className="text-sm text-gray-500 mt-1">
              Você pode usar negrito (**texto**), itálico (*texto*), links ([texto](url)), etc.
            </p>
          </div>

          {/* Nível de Severidade */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Nível de Severidade
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {Object.entries(SeverityLevel).map(([key, value]) => {
                const labels = {
                  LOW: 'Baixo',
                  MEDIUM: 'Médio',
                  HIGH: 'Alto',
                  CRITICAL: 'Crítico',
                };
                
                const colors = {
                  LOW: 'border-blue-300 bg-blue-50 hover:bg-blue-100 data-[selected=true]:bg-blue-200 data-[selected=true]:border-blue-500',
                  MEDIUM: 'border-yellow-300 bg-yellow-50 hover:bg-yellow-100 data-[selected=true]:bg-yellow-200 data-[selected=true]:border-yellow-500',
                  HIGH: 'border-orange-300 bg-orange-50 hover:bg-orange-100 data-[selected=true]:bg-orange-200 data-[selected=true]:border-orange-500',
                  CRITICAL: 'border-red-300 bg-red-50 hover:bg-red-100 data-[selected=true]:bg-red-200 data-[selected=true]:border-red-500',
                };

                return (
                  <button
                    key={value}
                    type="button"
                    data-selected={formData.severityLevel === value}
                    onClick={() => setFormData({ ...formData, severityLevel: value })}
                    className={`px-4 py-3 rounded-lg border-2 font-medium transition-colors ${colors[key]}`}
                  >
                    {labels[key]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Data e Hora de Início */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Data de Início
              </label>
              <Input
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                className={errors.startDate ? 'border-red-500' : ''}
              />
              {errors.startDate && (
                <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Hora de Início (opcional)
              </label>
              <Input
                type="time"
                value={formData.startTime}
                onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                placeholder="00:00"
              />
              <p className="text-xs text-gray-500 mt-1">
                Deixe vazio para 00:00
              </p>
            </div>
          </div>

          {/* Data e Hora de Término */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Data de Término
              </label>
              <Input
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                className={errors.endDate ? 'border-red-500' : ''}
              />
              {errors.endDate && (
                <p className="text-red-500 text-sm mt-1">{errors.endDate}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Hora de Término (opcional)
              </label>
              <Input
                type="time"
                value={formData.endTime}
                onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                placeholder="23:59"
              />
              <p className="text-xs text-gray-500 mt-1">
                Deixe vazio para 23:59
              </p>
            </div>
          </div>

          {/* Preview do Aviso */}
          {formData.markdownText && (
            <div>
              <label className="block text-sm font-medium mb-2">
                Preview
              </label>
              <div className={`rounded-lg border-2 p-4 ${
                formData.severityLevel === 'CRITICAL' ? 'bg-red-50 border-red-300' :
                formData.severityLevel === 'HIGH' ? 'bg-orange-50 border-orange-300' :
                formData.severityLevel === 'MEDIUM' ? 'bg-yellow-50 border-yellow-300' :
                'bg-blue-50 border-blue-300'
              }`}>
                <div className="prose prose-sm max-w-none">
                  <div dangerouslySetInnerHTML={{ 
                    __html: formData.markdownText
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em>$1</em>')
                      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
                  }} />
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={loading}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Salvando...' : editingWarning ? 'Atualizar' : 'Criar'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
