import { Pipe, PipeTransform } from '@angular/core';
import { prettyDate } from '../utils/dateFormat';

@Pipe({
  name: 'prettyDate'
})
export class PrettyDatePipe implements PipeTransform {

  transform(date: string): string {
    const globalDate = new Date(date).toDateString();
    return prettyDate(globalDate);
  }
}
