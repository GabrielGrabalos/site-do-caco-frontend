import { useState } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast.jsx';

export function FeedbackWidget({ onSubmit, submitted }) {
  const [selected, setSelected] = useState(null);
  const [comment, setComment] = useState('');
  const [showComment, setShowComment] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSelection = (helpful) => {
    setSelected(helpful);
    setShowComment(true);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await onSubmit(selected, comment);
      toast({
        title: 'Obrigade pelo feedback!',
        description: 'Sua opinião nos ajuda a melhorar o manual.',
      });
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Não foi possível enviar o feedback. Tente novamente.',
      });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Card className="p-6 bg-green-50 border-green-200">
        <p className="text-green-900 font-medium text-center">
          ✓ Obrigade pelo seu feedback!
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-4">Este artigo foi útil?</h3>

      <div className="flex gap-3 mb-4">
        <Button
          variant={selected === true ? 'default' : 'outline'}
          className="flex-1"
          onClick={() => handleSelection(true)}
        >
          <ThumbsUp className="mr-2 h-4 w-4" />
          Sim
        </Button>
        <Button
          variant={selected === false ? 'default' : 'outline'}
          className="flex-1"
          onClick={() => handleSelection(false)}
        >
          <ThumbsDown className="mr-2 h-4 w-4" />
          Não
        </Button>
      </div>

      {showComment && (
        <div
          className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300"
        >
          <textarea
            placeholder="Conte-nos mais sobre sua experiência (opcional)"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full min-h-[100px] p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <Button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full"
          >
            {loading ? 'Enviando...' : 'Enviar Feedback'}
          </Button>
        </div>
      )}
    </Card>
  );
}
