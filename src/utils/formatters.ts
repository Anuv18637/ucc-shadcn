/**
 * Formats numbers according to European/German standard (e.g., 3760 -> 3.760)
 */
export function formatMetricNumber(value: number, locale = 'de-DE'): string {
  return new Intl.NumberFormat(locale).format(value)
}

/**
 * Format partner metadata for display
 */
export function formatPartnerSubtitle(partnerId: string, region: string): string {
  return `Partner ID: ${partnerId} | Region: ${region}`
}
