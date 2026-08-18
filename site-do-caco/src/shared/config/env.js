/**
 * Lê e valida as variáveis de ambiente VITE_* usadas pela aplicação.
 * Falha alto (throw) no boot se alguma variável obrigatória estiver ausente,
 * em vez de deixar a página renderizar hrefs/links quebrados em silêncio.
 */

const REQUIRED_ENV_VARS = [
  'VITE_EMAIL',
  'VITE_INSTAGRAM_URL',
  'VITE_WHATSAPP_COMMUNITY_URL',
  'VITE_TERMS_OF_SERVICE_URL',
  'VITE_PRIVACY_POLICY_URL',
  'VITE_ADICIONAR_PROVA_URL',
];

const missing = REQUIRED_ENV_VARS.filter((key) => !import.meta.env[key]);

if (missing.length > 0) {
  throw new Error(
    `Variáveis de ambiente obrigatórias ausentes: ${missing.join(', ')}. Verifique o arquivo .env (veja .env.example).`
  );
}

export const env = {
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:8080',
  email: import.meta.env.VITE_EMAIL,
  instagramUrl: import.meta.env.VITE_INSTAGRAM_URL,
  whatsappCommunityUrl: import.meta.env.VITE_WHATSAPP_COMMUNITY_URL,
  termsOfServiceUrl: import.meta.env.VITE_TERMS_OF_SERVICE_URL,
  privacyPolicyUrl: import.meta.env.VITE_PRIVACY_POLICY_URL,
  adicionarProvaUrl: import.meta.env.VITE_ADICIONAR_PROVA_URL,
};
