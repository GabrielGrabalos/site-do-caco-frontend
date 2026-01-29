import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { SeverityLevel } from '../Warning';
import { DatePicker } from '../../../components/DatePicker';
import { TimeInput } from '../../../components/TimeInput';
import { SeveritySelector } from './SeveritySelector';
import { WarningPreview } from './WarningPreview';

export function CreateWarningModal({ open, onClose, onCreate, onUpdate, loading, editingWarning }) {
  const [formData, setFormData] = useState({
    markdownText: '',
    severityLevel: SeverityLevel.LOW,
    startDate: null,
    startTime: '',
    endDate: null,
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
        startDate: startDate,
        startTime: startDate.toTimeString().slice(0, 5),
        endDate: endDate,
        endTime: endDate.toTimeString().slice(0, 5),
      });
    } else if (open && !editingWarning) {
      // Reset para novo aviso
      setFormData({
        markdownText: '',
        severityLevel: SeverityLevel.LOW,
        startDate: null,
        startTime: '',
        endDate: null,
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
      const start = new Date(formData.startDate);
      start.setHours(...(formData.startTime || '00:00').split(':').map(Number), 0);
      
      const end = new Date(formData.endDate);
      end.setHours(...(formData.endTime || '23:59').split(':').map(Number), 59);
      
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
    const startsAt = new Date(formData.startDate);
    startsAt.setHours(...(formData.startTime || '00:00').split(':').map(Number), 0);
    
    const expiresAt = new Date(formData.endDate);
    expiresAt.setHours(...(formData.endTime || '23:59').split(':').map(Number), 59);

    const dto = {
      markdownText: formData.markdownText,
      severityLevel: formData.severityLevel,
      startsAt: startsAt.toISOString(),
      expiresAt: expiresAt.toISOString(),
    };

    if (editingWarning) {
      await onUpdate(editingWarning.id, dto);
    } else {
      await onCreate(dto);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto w-[95vw] sm:w-full">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl">
            {editingWarning ? 'Editar Aviso' : 'Criar Novo Aviso'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
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
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
            />
            {errors.markdownText && (
              <p className="text-red-500 text-sm mt-1">{errors.markdownText}</p>
            )}
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Você pode usar negrito (**texto**), itálico (*texto*), links ([texto](url)), etc.
            </p>
          </div>

          {/* Nível de Severidade */}
          <SeveritySelector
            value={formData.severityLevel}
            onChange={(level) => setFormData({ ...formData, severityLevel: level })}
          />

          {/* Data e Hora de Início */}
          <div className="grid md:grid-cols-2 gap-4">
            <DatePicker
              value={formData.startDate}
              onChange={(date) => setFormData({ ...formData, startDate: date })}
              error={errors.startDate}
              label="Data de Início"
            />
            
            <TimeInput
              value={formData.startTime}
              onChange={(time) => setFormData({ ...formData, startTime: time })}
              onError={(error) => {
                if (error) {
                  setErrors({ ...errors, startTime: error });
                } else {
                  const newErrors = { ...errors };
                  delete newErrors.startTime;
                  setErrors(newErrors);
                }
              }}
              error={errors.startTime}
              label="Hora de Início (opcional)"
              placeholder="00:00"
            />
          </div>

          {/* Data e Hora de Término */}
          <div className="grid md:grid-cols-2 gap-4">
            <DatePicker
              value={formData.endDate}
              onChange={(date) => setFormData({ ...formData, endDate: date })}
              error={errors.endDate}
              label="Data de Término"
            />
            
            <TimeInput
              value={formData.endTime}
              onChange={(time) => setFormData({ ...formData, endTime: time })}
              onError={(error) => {
                if (error) {
                  setErrors({ ...errors, endTime: error });
                } else {
                  const newErrors = { ...errors };
                  delete newErrors.endTime;
                  setErrors(newErrors);
                }
              }}
              error={errors.endTime}
              label="Hora de Término (opcional)"
              placeholder="23:59"
            />
          </div>

          {/* Preview do Aviso */}
          <WarningPreview
            markdownText={formData.markdownText}
            severityLevel={formData.severityLevel}
          />

          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={loading}
              className="w-full sm:w-auto"
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={loading} className="w-full sm:w-auto">
              {loading ? 'Salvando...' : editingWarning ? 'Atualizar' : 'Criar'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
