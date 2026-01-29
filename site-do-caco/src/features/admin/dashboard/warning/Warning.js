/**
 * Modelo de Warning (Aviso)
 * Baseado no CreateWarningDTO do backend
 */

export const SeverityLevel = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL',
};

export class Warning {
  constructor(data = {}) {
    this.id = data.id || null;
    this.markdownText = data.markdownText || '';
    this.severityLevel = data.severityLevel || SeverityLevel.LOW;
    this.startsAt = data.startsAt || null; // ISO string
    this.expiresAt = data.expiresAt || null; // ISO string
    this.createdAt = data.createdAt || null;
    this.updatedAt = data.updatedAt || null;
  }

  /**
   * Verifica se o aviso está ativo no momento
   */
  isActive() {
    const now = new Date();
    const start = new Date(this.startsAt);
    const end = new Date(this.expiresAt);
    return now >= start && now <= end;
  }

  /**
   * Converte para o DTO de criação
   */
  toCreateDTO() {
    return {
      markdownText: this.markdownText,
      severityLevel: this.severityLevel,
      startsAt: this.startsAt,
      expiresAt: this.expiresAt,
    };
  }

  /**
   * Retorna a cor correspondente ao nível de severidade
   */
  getSeverityColor() {
    switch (this.severityLevel) {
      case SeverityLevel.CRITICAL:
        return 'bg-red-50 border-red-300 text-red-900';
      case SeverityLevel.HIGH:
        return 'bg-orange-50 border-orange-300 text-orange-900';
      case SeverityLevel.MEDIUM:
        return 'bg-yellow-50 border-yellow-300 text-yellow-900';
      case SeverityLevel.LOW:
        return 'bg-blue-50 border-blue-300 text-blue-900';
      default:
        return 'bg-gray-50 border-gray-300 text-gray-900';
    }
  }

  /**
   * Retorna o label traduzido do nível de severidade
   */
  getSeverityLabel() {
    switch (this.severityLevel) {
      case SeverityLevel.CRITICAL:
        return 'Crítico';
      case SeverityLevel.HIGH:
        return 'Alto';
      case SeverityLevel.MEDIUM:
        return 'Médio';
      case SeverityLevel.LOW:
        return 'Baixo';
      default:
        return 'Desconhecido';
    }
  }
}
