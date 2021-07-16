/**
 * Formats date in a frendly way eg.April 02, 2021
 * @param date
 * @returns 'dd/mm/yyy'
 */
 export function prettyDate(date: string = ''): string {
    return new Date(date !== '' && date).toLocaleDateString('en-Us', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    }).replace(/\//g, '-');
  }

/**
 * Formats date
 * @param date
 * @returns 'dd/mm/yyy'
 */
export function apiFormatDate(date: string = ''): string {
    let localDate = '';
    if (date) {
      localDate = new Date(date !== '' && date).toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }).replace(/\//g, '-');
    } 
  
    return localDate;
  }
  