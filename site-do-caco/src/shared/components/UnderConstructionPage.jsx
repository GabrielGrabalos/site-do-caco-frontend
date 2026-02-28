import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import emConstrucaoImg from '@/assets/em_construcao.png';

export function UnderConstructionPage() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-6">
      <div className="max-w-3xl mx-auto text-center space-y-12">
        <img 
          src={emConstrucaoImg} 
          alt="Em construção" 
          className="w-full max-w-xl mx-auto rounded-lg"
        />
        
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Em Construção 🚧
          </h1>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Aoba! Esta página ainda está em construção, mas estamos trabalhando bastante terminar ela o mais rápido possível.
            Volta já já para ver se tá pronto!
          </p>
        </div>

        <Button asChild size="lg" className="gap-2">
          <Link to="/">
            <Home className="h-5 w-5" />
            Voltar ao Início
          </Link>
        </Button>
      </div>
    </div>
  );
}
