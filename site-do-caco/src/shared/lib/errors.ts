/**
 * Erro unificado para todas as chamadas à API.
 * Substitui os `Error` puros lançados pelo antigo apiClient, que não carregavam
 * `status`/`code`/`details` — por isso código como `error.response?.status === 401`
 * nunca funcionava (formato de axios sobre um cliente `fetch`).
 */

export interface ApiErrorDetail {
  field?: string;
  message: string;
}

interface SpringErrorBody {
  timestamp?: string;
  status?: number;
  error?: string;
  message?: string;
  path?: string;
  /** Presente quando o backend rejeita a requisição por @Valid (BindingResult) */
  errors?: Array<{ field?: string; defaultMessage?: string; message?: string }>;
}

export class ApiError extends Error {
  status: number;
  code?: string;
  details: ApiErrorDetail[];

  constructor(message: string, status: number, code?: string, details: ApiErrorDetail[] = []) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
    this.details = details;
  }

  static async fromResponse(response: Response): Promise<ApiError> {
    let body: SpringErrorBody | null = null;
    try {
      body = await response.json();
    } catch {
      // corpo vazio ou não-JSON
    }

    if (!body) {
      return new ApiError(`Erro HTTP ${response.status}: ${response.statusText}`, response.status);
    }

    const details: ApiErrorDetail[] = Array.isArray(body.errors)
      ? body.errors.map((e) => ({
          field: e.field,
          message: e.defaultMessage || e.message || 'Campo inválido',
        }))
      : [];

    const message =
      details.length > 0
        ? details.map((d) => d.message).join(' | ')
        : body.message || body.error || `Erro HTTP ${response.status}`;

    return new ApiError(message, response.status, body.error, details);
  }
}
