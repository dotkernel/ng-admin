import { Pipe, PipeTransform } from '@angular/core';
import { apiFormatDate } from '../utils'

@Pipe({
  name: 'fullDate'
})
export class FullDatePipe implements PipeTransform {

  transform(date: string): string {
    const globalDate = new Date(date).toDateString();
    return apiFormatDate(globalDate);
  }
}
