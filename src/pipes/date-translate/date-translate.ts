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
    value = value.toLowerCase().replace("january", "Enero");
    value = value.toLowerCase().replace("february", "Febrero");
    value = value.toLowerCase().replace("march", "Marzo");
    value = value.toLowerCase().replace("april", "Abril");
    value = value.toLowerCase().replace("may", "Mayo");
    value = value.toLowerCase().replace("june", "Junio");
    value = value.toLowerCase().replace("july", "Julio");
    value = value.toLowerCase().replace("august", "Agosto");
    value = value.toLowerCase().replace("september", "Septiembre");
    value = value.toLowerCase().replace("october", "Octubre");
    value = value.toLowerCase().replace("november", "Noviembre");
    value = value.toLowerCase().replace("december", "Diciembre");
    return value;
  }
}
