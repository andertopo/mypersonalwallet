import { Component, Input, OnInit } from '@angular/core';
import { CategoriasProvider } from '../../providers/categorias/categorias-provider';
import { CategoriaTransaccion } from '../../objects/CategoriaTransaccion';
import { CuentaProvider } from '../../providers/cuenta/cuenta-provider';
import { CuentaTransaccion } from '../../objects/CuentaTransaccion';

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
  public categoriaSeleccionada: CategoriaTransaccion;
  public cuentaSeleccionada: CuentaTransaccion;

  constructor(public categoriasProvider: CategoriasProvider, public cuentasProvider:CuentaProvider) {
    console.log('Hello RegistroIngresoGastoComponent Component');
    this.categoriaSeleccionada = this.categoriasProvider.categorias[0];
    this.cuentaSeleccionada = this.cuentasProvider.cuentas[0];
  }

  ngOnInit() {
    
  }

}
