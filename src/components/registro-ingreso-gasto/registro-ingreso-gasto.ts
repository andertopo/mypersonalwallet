import { Component, Input, OnInit } from '@angular/core';
import { CategoriasProvider } from '../../providers/categorias/categorias-provider';
import { CategoriaTransaccion } from '../../objects/CategoriaTransaccion';
import { CuentaProvider } from '../../providers/cuenta/cuenta-provider';
import { CuentaTransaccion } from '../../objects/CuentaTransaccion';
import { PopoverController } from 'ionic-angular';
import { SimpleSelectCategoriaPopoverPage } from '../../pages/cofiguracion/categoria/simple-select-categoria-popover/simple-select-categoria-popover';
import { SimpleSelectCuentaPopoverPage } from '../../pages/cofiguracion/cuenta/simple-select-cuenta-popover/simple-select-cuenta-popover';
import { FormBuilder } from '@angular/forms';
import { CalendarioPage } from '../../pages/calendario/calendario';
import { CalculatorComponent } from '../calculator/calculator';
import { SimpleSelectEtiquetaPopoverPage } from '../../pages/cofiguracion/etiqueta/simple-select-etiqueta-popover/simple-select-etiqueta-popover';

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
  public valor: number;
  public categoriaSeleccionada: CategoriaTransaccion;
  public cuentaSeleccionada: CuentaTransaccion;
  public fechaSeleccionada: Date;
  public formTransaccion;

  constructor(public popoverCtrl: PopoverController, fb: FormBuilder, public categoriasProvider: CategoriasProvider, public cuentasProvider:CuentaProvider) {
    console.log('Hello RegistroIngresoGastoComponent Component');
    this.categoriaSeleccionada = this.categoriasProvider.categorias[0];
    this.cuentaSeleccionada = this.cuentasProvider.cuentas[0];
    this.fechaSeleccionada = new Date();
    this.valor = 0;

    this.formTransaccion = {
      valor: 0,
      categoriaSeleccionada: this.categoriasProvider.categorias[0],
      cuentaSeleccionada: this.cuentasProvider.cuentas[0],
      etiquetasSeleccionadas: [],
      fechaSeleccionada: new Date(),
      descripcion: '',
      pagoRegistrado: true,
      gastoFijo: false,
      repetir: false,
    }
  }

  ngOnInit() {
    
  }

  public openCategorias() {
    let popover = this.popoverCtrl.create(SimpleSelectCategoriaPopoverPage, {tipo: this.tipoTransaccion}, {cssClass: 'popover-date'});
    popover.present({ev: event});
    popover.onDidDismiss(data => {
      if (data) {
        console.log("cambiando categoría", data);
        this.formTransaccion.categoriaSeleccionada = data.categoriaSeleccionada;
      }
    });
  }

  openCuentas() {
    let popover = this.popoverCtrl.create(SimpleSelectCuentaPopoverPage, {});
    popover.present({ev: event});
    popover.onDidDismiss(data => {
      if (data) {
        console.log("cambiando categoría", data);
        this.formTransaccion.cuentaSeleccionada = data.cuentaSeleccionada;
      }
    });
  }

  openEtiquetas() {
    let popover = this.popoverCtrl.create(SimpleSelectEtiquetaPopoverPage, {color: this.tipoTransaccion}, {cssClass: 'popover-date'});
    popover.present({ev: event});
    popover.onDidDismiss(data => {
      if (data) {
        console.log("cambiando etiqueta", data);
        this.formTransaccion.etiquetasSeleccionadas = data.etiquetasSeleccionadas;
      }
    });
  }

  openCalculator() {
    let popover = this.popoverCtrl.create(CalculatorComponent, {color: this.tipoTransaccion}, {cssClass: 'popover-date'});
    popover.present({});
    popover.onDidDismiss(data => {
      if (data) {
        console.log("seleccionando valor", data);
        this.formTransaccion.valor = data.valor;
      }
    });
  }

  openCalendario() {
    let popover = this.popoverCtrl.create(CalendarioPage, {}, {cssClass: 'popover-date'});
    popover.present({});
    popover.onDidDismiss(data => {
      if (data) {
        console.log("seleccionando fecha", data);
        this.formTransaccion.fechaSeleccionada = data.fecha;
      }
    });
  }

  toggleRepetir() {
    this.formTransaccion.repetir = !this.formTransaccion.repetir;
  }

  limpiarCheckGroup(toCheck) {
    console.log("cambiando");
    //this.formTransaccion.gastoFijo = true;
    //this.formTransaccion.gastoFijo = false;
    //toCheck = true;
  }

  guardar() {

  }

}
