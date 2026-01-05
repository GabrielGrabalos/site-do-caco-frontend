import { useState } from 'react';
import { Gift } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast.jsx';

export function RedeemInput({ onRedeem }) {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!code.trim()) return;

    try {
      setLoading(true);
      const result = await onRedeem(code);
      
      toast({
        title: '🎉 Figurinha Desbloqueada!',
        description: `Você ganhou: ${result.sticker.name}`,
      });
      
      setCode('');
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: err.message || 'Código inválido ou já utilizado',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Gift className="h-5 w-5 text-primary" />
            Resgatar Código
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Digite o código que você ganhou em eventos para desbloquear figurinhas
          </p>
        </div>
        
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="XXXX-XXXX-XXXX"
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            className="flex-1 font-mono"
            disabled={loading}
          />
          <Button type="submit" disabled={loading || !code.trim()}>
            {loading ? 'Resgatando...' : 'Resgatar'}
          </Button>
        </div>
      </form>
    </Card>
  );
}
