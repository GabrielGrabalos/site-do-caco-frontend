# Site do CACo - Frontend

Frontend do site do CACo (Centro Acadêmico da Computação - Unicamp) desenvolvido com React, Vite e arquitetura MVVM.

## 🚀 Tecnologias

- **React 19** - Biblioteca para interfaces
- **Vite** - Build tool e dev server
- **React Router** - Roteamento
- **Tailwind CSS** - Estilização
- **shadcn/ui** - Componentes UI
- **React Markdown** - Renderização de Markdown
- **Recharts** - Gráficos (Admin)
- **React Hook Form** - Formulários
- **Lucide React** - Ícones

## 📁 Estrutura do Projeto

```
src/
├── features/              # Features organizadas por domínio
│   ├── home/             # Página inicial
│   ├── news/             # Notícias (lista e detalhe)
│   ├── manual/           # Manual do calouro
│   ├── calendar/         # Calendário de eventos
│   ├── events/           # Página de evento
│   ├── exams/            # Banco de provas
│   ├── stickers/         # Álbum de figurinhas
│   ├── admin/            # Painel administrativo
│   └── auth/             # Autenticação
├── shared/               # Código compartilhado
│   ├── components/       # Componentes reutilizáveis
│   ├── services/         # Serviços (API, analytics)
│   ├── hooks/            # Hooks customizados
│   ├── utils/            # Funções utilitárias
│   └── types/            # Tipos/interfaces
├── components/           # Componentes UI base (shadcn)
│   └── ui/
└── lib/                  # Configurações e utils
```

## 🎨 Features Implementadas

### Páginas Públicas

- **Home**: Busca, banners rotativos, avisos, links rápidos, últimas notícias
- **Notícias**: Lista com paginação/infinite scroll e página de detalhe com Markdown
- **Manual**: Layout 2 colunas, sidebar com acordeão, breadcrumb, feedback widget
- **Calendário**: Grid mensal, navegação, modal para eventos menores
- **Evento**: Countdown, informações, mapa do Google, galeria (eventos finalizados)
- **Banco de Provas**: Filtro instantâneo em memória, organizado por disciplina e tipo

### Páginas Protegidas

- **Álbum de Figurinhas**: Resgate de códigos, progresso, modal de detalhes
- **Admin**: Dashboard, sidebar de navegação (CRUD básico implementável)

## ⚙️ Instalação e Execução

```bash
# Instalar dependências
npm install

# Copiar arquivo de configuração
cp .env.example .env

# Editar .env com suas configurações
# VITE_API_URL=http://localhost:8080

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 🏗️ Arquitetura MVVM

Cada feature segue o padrão MVVM:

- **View**: Componentes React (`.jsx`)
- **ViewModel**: Hooks customizados (`use*VM.js`) que gerenciam estado e lógica
- **Model**: Serviços que fazem chamadas à API

Exemplo:
```javascript
// useHomeVM.js (ViewModel)
export function useHomeVM() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    contentService.getDashboard().then(setData);
  }, []);
  
  return { data, loading };
}

// HomePage.jsx (View)
export function HomePage() {
  const { data, loading } = useHomeVM();
  return <div>{/* UI */}</div>;
}
```

## 🎨 Tema

O projeto usa um tema customizado com **verde escuro** como cor primária:
- Primary: `hsl(142, 76%, 36%)` - Verde escuro
- Suporte a modo escuro configurado
- Cores semânticas para diferentes estados

## 📝 Variáveis de Ambiente

- `VITE_API_URL`: URL base da API backend
- `VITE_GOOGLE_MAPS_API_KEY`: Chave da API do Google Maps (para localização de eventos)

## 🔒 Autenticação

- Sistema de login com OAuth2/Google (contas @dac.unicamp.br)
- Sistema robusto de redirecionamento para usuários não autenticados
- Rotas protegidas com `<ProtectedRoute>`
- Formulário de perfil obrigatório no primeiro login
- Níveis de permissão (usuário comum, editor, admin e super-admin)
- Token JWT armazenado em cookies com expiração
- Sincronização de sessão entre abas

### Sistema de Redirecionamento

O projeto possui um sistema modularizado de redirecionamento que:
- Salva automaticamente a página original quando usuário não autenticado tenta acessar conteúdo protegido
- Redireciona para login mantendo contexto
- Suporta formulário obrigatório de perfil no primeiro acesso
- Retorna o usuário à página original após autenticação completa
- Permite passar metadados entre páginas para ações específicas

**Documentação completa:** [docs/REDIRECT_QUICK_START.md](docs/REDIRECT_QUICK_START.md)

## 📦 Scripts Disponíveis

```bash
npm run dev      # Desenvolvimento
npm run build    # Build de produção
npm run preview  # Preview da build
npm run lint     # Linting com ESLint
```

## 🔗 Integração com Backend

O frontend espera uma API REST com os seguintes endpoints:

- `GET /api/content/dashboard` - Dados da home
- `GET /api/news` - Lista de notícias
- `GET /api/news/:slug` - Detalhes de notícia
- `GET /api/manual/tree` - Árvore do manual
- `GET /api/manual/articles/:id` - Artigo do manual
- `GET /api/events/calendar` - Eventos do calendário
- `GET /api/events/:id` - Detalhes do evento
- `GET /api/exams` - Banco de provas
- `POST /api/auth/login` - Login
- `GET /api/stickers` - Figurinhas do usuário
- `POST /api/stickers/redeem` - Resgatar código

## 📄 Licença

Este projeto é open source e está disponível para o CACo - Unicamp.

