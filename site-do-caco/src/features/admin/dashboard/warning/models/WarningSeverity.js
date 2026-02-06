export const WarningSeverity = {
    CRITICAL: 'CRITICAL',
    HIGH: 'HIGH',
    MEDIUM: 'MEDIUM',
    LOW: 'LOW',
    INFO: 'INFO',
};

export const SEVERITY_STYLES = {
    [WarningSeverity.CRITICAL]: 'bg-red-500 text-white hover:bg-red-600',
    [WarningSeverity.HIGH]: 'bg-orange-500 text-white hover:bg-orange-600',
    [WarningSeverity.MEDIUM]: 'bg-yellow-500 text-white hover:bg-yellow-600',
    [WarningSeverity.LOW]: 'bg-blue-500 text-white hover:bg-blue-600',
    [WarningSeverity.INFO]: 'bg-gray-500 text-white hover:bg-gray-600',
};

export const SEVERITY_LABELS = {
    [WarningSeverity.CRITICAL]: 'Crítico',
    [WarningSeverity.HIGH]: 'Alto',
    [WarningSeverity.MEDIUM]: 'Médio',
    [WarningSeverity.LOW]: 'Baixo',
    [WarningSeverity.INFO]: 'Info',
};
