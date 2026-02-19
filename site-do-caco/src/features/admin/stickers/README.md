# Admin Stickers - Documentação

## 📁 Estrutura de Arquivos

```
src/features/admin/stickers/
├── AdminStickersPage.jsx        # Página principal (lista/form toggle)
├── useAdminStickersVM.js        # ViewModel (lógica de estado)
├── Sticker.js                   # Model class (abstração DTO)
└── components/
    ├── StickerForm.jsx          # Formulário criar/editar sticker
    ├── StickersList.jsx         # Grid de cards com stickers
    └── CodesGenerator.jsx       # Dialog para gerar códigos
```

## 🔌 API Endpoints Utilizados

### 1. **GET /api/public/stickers**
- Retorna lista de todos os stickers e stickers do usuário
- Requer autenticação (token Bearer)
- Retorna: `{ allStickers: [], myStickers: [] }`

### 2. **POST /api/admin/stickers**
- Cria novo sticker
- Payload: `{ name, description, imageUrl, originEventId }`
- Retorna: `StickerAdminDTO`
- Requer role `ADMIN`

### 3. **POST /api/admin/stickers/{stickerId}/codes**
- Gera códigos de resgate
- Payload: `{ quantity, oneTimeUse, expiresAt }`
- Retorna: `{ stickerId, codes[], ... }`
- ⚠️ **Códigos retornados apenas uma vez** (segurança)
- Requer role `ADMIN`

### ⚠️ Endpoints NÃO Disponíveis:
- ❌ `PUT /api/admin/stickers/{id}` - Atualização não suportada
- ❌ `DELETE /api/admin/stickers/{id}` - Exclusão não suportada
- ❌ `GET /api/admin/stickers` - Usa `/public/stickers` ao invés

## 🎨 Design & UX

### Padrões Aplicados:
- ✅ **Consistência visual**: Segue design system do admin (eventos, loja)
- ✅ **Draft management**: Salva formulários incompletos em `localStorage`
- ✅ **Toast notifications**: Feedback em todas as ações (sucesso/erro)
- ✅ **Confirmação de exclusão**: AlertDialog antes de deletar
- ✅ **Busca em tempo real**: Filtro por nome/descrição
- ✅ **Responsividade**: Grid adaptativo (1/2/3 colunas)

### Componentes Visuais:
- **StickersList**: Cards com imagem, hover effects, badges de "Novo"
- **StickerForm**: Layout 2 colunas (form + preview), validação inline
- **CodesGenerator**: Modal elegante, exibição de códigos em grid copiável

## 🔒 Segurança

1. **Códigos de resgate**:
   - Gerados apenas uma vez
   - Não há endpoint público para listar códigos
   - Alerta visual sobre unicidade da exibição

2. **Autenticação**:
   - Todas as rotas requerem token Bearer
   - Service layer adiciona automaticamente o header

3. **Validação**:
   - Frontend: Campos obrigatórios, limites (max 500 códigos)
   - Backend: Validação com `@NotBlank`, `@Size`, etc.

## 📝 Fluxo de Uso

### Criar Sticker:
1. Clicar em "Novo Sticker"
2. Preencher nome, descrição (opcional), URL da imagem
3. Preview automático da imagem
4. Salvar → Toast de sucesso
5. **Nota**: Stickers não podem ser editados ou deletados após criação

### Gerar Códigos:
1. Clicar em "Gerar Códigos" no card do sticker
2. Definir quantidade (1-500)
3. Configurar uso único (toggle)
4. Opcional: data de expiração
5. Gerar → Modal exibe códigos
6. Copiar individualmente ou exportar .txt
7. ⚠️ **IMPORTANTE**: Códigos nunca serão exibidos novamente!

## 🛠 Manutenção

### Adicionar validação:
- **Frontend**: Editar função `validateForm()` no `StickerForm.jsx`
- **Backend**: Adicionar annotations no DTO

### Customizar campos:
- Editar `Sticker.js` (model)
- Atualizar `toDTO()` e `fromDTO()`
- Adicionar inputs no `StickerForm.jsx`

### Novo filtro/busca:
- Adicionar estado no `useAdminStickersVM.js`
- Atualizar `useMemo` de `filteredList`

### ⚠️ Limitações Importantes:
- **Sem edição**: Stickers não podem ser editados após criação
- **Sem exclusão**: Stickers não podem ser deletados
- **Códigos únicos**: Códigos gerados são exibidos apenas uma vez
- **Sem histórico**: Não há endpoint para listar códigos gerados anteriormente

## 🐛 Troubleshooting

### Imagens não carregam:
- Verificar CORS do servidor de imagens
- Validar URL com regex ou `new URL()`

### Códigos não aparecem:
- Verificar resposta do endpoint `/codes`
- Conferir se `result.codes` é array válido
- Ver console do browser (logs de erro)

### Draft não funciona:
- Verificar `localStorage` não está bloqueado
- Limpar manualmente: `localStorage.removeItem('sticker-draft')`

## 📦 Dependências

- `react-router-dom`: Navegação
- `lucide-react`: Ícones
- `shadcn/ui`: Componentes base
- `@/shared/hooks/useFormDraft`: Gestão de rascunhos
- `@/shared/services/stickerService`: Chamadas API

## 🚀 Próximas Melhorias

- [ ] Upload de imagem direto (não apenas URL)
- [ ] Histórico de códigos gerados (se backend suportar)
- [ ] Paginação de stickers (quando houver muitos)
- [ ] Filtros avançados (por evento, data de criação)
- [ ] Bulk operations (deletar múltiplos)
