import { useState, useEffect } from 'react';
import { warningService } from '@/shared/services/warningService';
import { useToast } from '@/components/ui/use-toast.jsx';
import { SeverityLevel } from './Warning';

export function useAdminWarningsVM() {
  const [activeWarnings, setActiveWarnings] = useState([]);
  const [expiredWarnings, setExpiredWarnings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [expiredFilter, setExpiredFilter] = useState('ALL');
  const { toast } = useToast();

  useEffect(() => {
    loadWarnings();
  }, []);

  const loadWarnings = async () => {
    try {
      setLoading(true);
      const data = await warningService.getAllWarnings();
      
      const now = new Date();
      
      // Separa em ativos e expirados
      const active = [];
      const expired = [];
      
      data.forEach(warning => {
        const expiresAt = new Date(warning.expiresAt);
        if (expiresAt > now) {
          active.push(warning);
        } else {
          expired.push(warning);
        }
      });
      
      // Ordena ambos por data de criação (mais recentes primeiro)
      active.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      expired.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      
      setActiveWarnings(active);
      setExpiredWarnings(expired);
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Erro ao carregar avisos',
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const createWarning = async (createDTO) => {
    try {
      setCreating(true);
      const newWarning = await warningService.createWarning(createDTO);
      
      // Determina se é ativo ou expirado
      const now = new Date();
      const expiresAt = new Date(newWarning.expiresAt);
      
      if (expiresAt > now) {
        setActiveWarnings(prev => [newWarning, ...prev]);
      } else {
        setExpiredWarnings(prev => [newWarning, ...prev]);
      }
      
      toast({
        title: 'Aviso criado',
        description: 'O aviso foi criado com sucesso.',
      });
      
      return true;
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Erro ao criar aviso',
        description: error.message,
      });
      return false;
    } finally {
      setCreating(false);
    }
  };

  const updateWarning = async (id, updateDTO) => {
    try {
      setCreating(true);
      const updatedWarning = await warningService.updateWarning(id, updateDTO);
      
      const now = new Date();
      const expiresAt = new Date(updatedWarning.expiresAt);
      const isActive = expiresAt > now;
      
      // Remove das duas listas
      setActiveWarnings(prev => prev.filter(w => w.id !== id));
      setExpiredWarnings(prev => prev.filter(w => w.id !== id));
      
      // Adiciona na lista correta
      if (isActive) {
        setActiveWarnings(prev => {
          const updated = [updatedWarning, ...prev];
          return updated.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        });
      } else {
        setExpiredWarnings(prev => {
          const updated = [updatedWarning, ...prev];
          return updated.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        });
      }
      
      toast({
        title: 'Aviso atualizado',
        description: 'O aviso foi atualizado com sucesso.',
      });
      
      return true;
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Erro ao atualizar aviso',
        description: error.message,
      });
      return false;
    } finally {
      setCreating(false);
    }
  };

  const deleteWarning = async (id) => {
    try {
      await warningService.deleteWarning(id);
      
      // Remove de ambas as listas
      setActiveWarnings(prev => prev.filter(w => w.id !== id));
      setExpiredWarnings(prev => prev.filter(w => w.id !== id));
      
      toast({
        title: 'Aviso excluído',
        description: 'O aviso foi excluído com sucesso.',
      });
      
      return true;
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Erro ao excluir aviso',
        description: error.message,
      });
      return false;
    }
  };

  const expireWarning = async (id) => {
    try {
      // Encontra o aviso antes de expirar
      const warningToExpire = activeWarnings.find(w => w.id === id);
      if (!warningToExpire) return false;
      
      await warningService.expireWarning(id);
      
      // Atualiza a data de expiração para agora
      const expiredWarning = {
        ...warningToExpire,
        expiresAt: new Date().toISOString(),
      };
      
      // Remove dos avisos ativos e adiciona aos expirados
      setActiveWarnings(prev => prev.filter(w => w.id !== id));
      setExpiredWarnings(prev => {
        const updated = [expiredWarning, ...prev];
        return updated.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      });
      
      toast({
        title: 'Aviso expirado',
        description: 'O aviso foi marcado como expirado.',
      });
      
      return true;
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Erro ao expirar aviso',
        description: error.message,
      });
      return false;
    }
  };

  // Filtra warnings baseado no filtro selecionado
  const getFilteredWarnings = (warnings, filter) => {
    if (filter === 'ALL') return warnings;
    return warnings.filter(w => w.severityLevel === filter);
  };

  return {
    activeWarnings: getFilteredWarnings(activeWarnings, activeFilter),
    expiredWarnings: getFilteredWarnings(expiredWarnings, expiredFilter),
    allActiveWarnings: activeWarnings,
    allExpiredWarnings: expiredWarnings,
    loading,
    creating,
    activeFilter,
    expiredFilter,
    setActiveFilter,
    setExpiredFilter,
    createWarning,
    updateWarning,
    deleteWarning,
    expireWarning,
  };
}
