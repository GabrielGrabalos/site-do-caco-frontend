import { useState } from 'react';
import { ThumbsUp, ThumbsDown, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

export function FeedbackSection({ onSubmit, submitted }) {
  const [helpful, setHelpful] = useState(null);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (helpful === null) {
      toast({
        variant: 'destructive',
        title: 'Selecione uma opção',
        description: 'Por favor, indique se o artigo foi útil ou não.',
      });
      return;
    }

    setSubmitting(true);
    try {
      await onSubmit(helpful, comment);
      toast({
        title: 'Feedback enviado!',
        description: 'Obrigado por ajudar a melhorar o manual.',
      });
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Erro ao enviar feedback',
        description: 'Tente novamente mais tarde.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
          <Check className="h-5 w-5 text-green-600" />
        </div>
        <div>
          <p className="font-medium text-green-900">Feedback enviado!</p>
          <p className="text-sm text-green-700">
            Obrigado por ajudar a melhorar o manual.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Este artigo foi útil?</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Seu feedback nos ajuda a melhorar o conteúdo do manual.
        </p>
      </div>

      <div className="flex gap-3">
        <Button
          variant={helpful === true ? 'default' : 'outline'}
          className={helpful === true ? 'bg-green-600 hover:bg-green-700' : ''}
          onClick={() => setHelpful(true)}
          disabled={submitting}
        >
          <ThumbsUp className="h-4 w-4 mr-2" />
          Sim, foi útil
        </Button>
        <Button
          variant={helpful === false ? 'default' : 'outline'}
          className={helpful === false ? 'bg-red-600 hover:bg-red-700' : ''}
          onClick={() => setHelpful(false)}
          disabled={submitting}
        >
          <ThumbsDown className="h-4 w-4 mr-2" />
          Não foi útil
        </Button>
      </div>

      {helpful !== null && (
        <div className="space-y-2">
          <Label htmlFor="feedback-comment">
            Comentário (opcional)
          </Label>
          <Textarea
            id="feedback-comment"
            placeholder="Conte-nos mais sobre sua experiência..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={3}
            disabled={submitting}
          />
        </div>
      )}

      {helpful !== null && (
        <Button
          onClick={handleSubmit}
          disabled={submitting}
          className="w-full sm:w-auto"
        >
          {submitting ? 'Enviando...' : 'Enviar Feedback'}
        </Button>
      )}
    </div>
  );
}
