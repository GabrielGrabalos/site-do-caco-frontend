# Site do CACo - Frontend

Frontend do Site do CACo em React + Vite, com rotas publicas, area autenticada (perfil/album) e painel administrativo/editor.

## Estrutura do Repositorio

Este repositorio tem dois niveis:

```text
site-do-caco-frontend/
├── package.json            # Dependencias compartilhadas/apoio
└── site-do-caco/           # Aplicacao principal (Vite)
    ├── package.json
    ├── .env.example
    ├── src/
    │   ├── features/
    │   ├── components/ui/
    │   ├── shared/
    │   ├── lib/
    │   ├── App.jsx
    │   └── main.jsx
    └── vite.config.js
```

## Stack

- React 19
- Vite 7
- React Router 7
- Tailwind CSS
- Radix UI + componentes base em `src/components/ui`
- React Hook Form
- Recharts
- React Markdown (com `remark-gfm` e `rehype-raw`)

## Arquitetura do Front

A aplicacao segue uma organizacao por feature e responsabilidades:

- `src/features`: modulos de dominio (home, news, manual, calendar, exams, admin etc.)
- `src/shared`: servicos, contexts, hooks e componentes compartilhados
- `src/components/ui`: biblioteca de componentes reutilizaveis
- `src/lib`: utilitarios e helpers

As rotas estao centralizadas em `src/App.jsx`, com:

- Layout principal para paginas publicas
- `ProtectedRoute` para paginas autenticadas
- Areas segregadas para `admin` e `editor`
- Fluxo de redirecionamento para formulario obrigatorio de perfil

## Fluxos de Navegacao (alto nivel)

- Publico: home, noticias, manual, calendario, eventos, provas
- Autenticado: perfil, album de figurinhas
- Admin: dashboard, noticias, eventos, manual, provas, loja, grupos de WhatsApp, figurinhas
- Editor: gestao de conteudo de noticias

## Configuracao de Ambiente

No diretorio da aplicacao (`site-do-caco/`):

```bash
cp .env.example .env
```

Variaveis principais:

- `VITE_API_URL=http://localhost:8080`
- `VITE_EMAIL`
- `VITE_INSTAGRAM_URL`
- `VITE_WHATSAPP_COMMUNITY_URL`

Importante:

- Nao incluir `/api` no `VITE_API_URL`; o cliente adiciona automaticamente quando necessario.

## Como Rodar

### 1) Entrar na aplicacao

```bash
cd site-do-caco
```

### 2) Instalar dependencias

```bash
npm install
```

### 3) Executar em desenvolvimento

```bash
npm run dev
```

### 4) Build de producao

```bash
npm run build
```

### 5) Preview da build

```bash
npm run preview
```

## Scripts (app Vite)

- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run lint`

## Integracao com Backend

O frontend espera backend Spring na porta 8080 com contexto `/api`, incluindo rotas publicas e protegidas por JWT/OAuth2.

Exemplo local:

- API host: `http://localhost:8080`
- Endpoints efetivos: `http://localhost:8080/api/...`
