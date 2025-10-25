/**
 * Format a number as currency
 * @param value - Number to format
 * @param currency - Currency code (default: 'USD')
 * @param locale - Locale for formatting (default: 'en-US')
 * @returns Formatted currency string
 */
export function formatCurrency(
  value: number,
  currency: string = 'USD',
  locale: string = 'en-US'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

/**
 * Format a date
 * @param date - Date to format (Date object or timestamp)
 * @param format - Format style (default: 'medium')
 * @param locale - Locale for formatting (default: 'en-US')
 * @returns Formatted date string
 */
export function formatDate(
  date: Date | number | string,
  format: 'short' | 'medium' | 'long' | 'full' = 'medium',
  locale: string = 'en-US'
): string {
  const dateObj = date instanceof Date ? date : new Date(date);
  
  return new Intl.DateTimeFormat(locale, {
    dateStyle: format,
  }).format(dateObj);
}

/**
 * Format a number with commas
 * @param value - Number to format
 * @param locale - Locale for formatting (default: 'en-US')
 * @returns Formatted number string
 */
export function formatNumber(
  value: number,
  locale: string = 'en-US'
): string {
  return new Intl.NumberFormat(locale).format(value);
}

/**
 * Format a file size in bytes to a human-readable string
 * @param bytes - Size in bytes
 * @param decimals - Number of decimal places (default: 2)
 * @returns Formatted file size string (e.g., "1.5 MB")
 */
export function formatFileSize(bytes: number, decimals: number = 2): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))} ${sizes[i]}`;
}

/**
 * Format a phone number to a standard format
 * @param phoneNumber - Phone number to format
 * @param format - Format pattern (default: '(XXX) XXX-XXXX')
 * @returns Formatted phone number
 */
export function formatPhoneNumber(
  phoneNumber: string,
  format: string = '(XXX) XXX-XXXX'
): string {
  // Remove all non-numeric characters
  const cleaned = phoneNumber.replace(/\D/g, '');
  
  // Return original if not enough digits
  if (cleaned.length < 10) return phoneNumber;
  
  // Replace X with digits
  let formatted = format;
  let digitIndex = 0;
  
  for (let i = 0; i < formatted.length; i++) {
    if (formatted[i] === 'X') {
      if (digitIndex < cleaned.length) {
        formatted = formatted.substring(0, i) + cleaned[digitIndex] + formatted.substring(i + 1);
        digitIndex++;
      }
    }
  }
  
  return formatted;
}