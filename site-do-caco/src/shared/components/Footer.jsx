import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/40 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-3">CACo</h3>
            <p className="text-sm text-muted-foreground">
              Centro Acadêmico da Computação - Unicamp
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-3">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/manual" className="text-muted-foreground hover:text-primary">
                  Manual do Calouro
                </Link>
              </li>
              <li>
                <Link to="/noticias" className="text-muted-foreground hover:text-primary">
                  Notícias
                </Link>
              </li>
              <li>
                <Link to="/calendario" className="text-muted-foreground hover:text-primary">
                  Calendário
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Contato</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: contato@caco.ic.unicamp.br</li>
              <li>Instagram: @caco_unicamp</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          © {currentYear} CACo - Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
}
