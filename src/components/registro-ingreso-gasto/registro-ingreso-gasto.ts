import { Component, Input, OnInit } from '@angular/core';

/**
 * Generated class for the RegistroIngresoGastoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'registro-ingreso-gasto',
  templateUrl: 'registro-ingreso-gasto.html'
})
export class RegistroIngresoGastoComponent implements OnInit {
  @Input() tipoTransaccion: string;

  constructor() {
    console.log('Hello RegistroIngresoGastoComponent Component');
  }

  ngOnInit() {
    
  }

}
