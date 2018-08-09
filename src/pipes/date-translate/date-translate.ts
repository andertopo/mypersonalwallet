import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'dateTranslate',
})
export class DateTranslatePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    if(value == 'Sun') {
      value = 'Domingo';
    } else if(value == 'Mon') {
      value = 'Lunes';
    } else if(value == 'Tue') {
      value = 'Martes';
    } else if(value == 'Wed') {
      value = 'Miércoles'
    } else if(value == 'Thu') {
      value = 'Jueves'
    } else if(value == 'Fri') {
      value = 'Viernes'
    } else if(value == 'Sat') {
      value = 'Sábado';
    }
    return value;
  }
}
