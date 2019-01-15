import { Component, Input, OnInit } from '@angular/core';
import { CategoriasProvider } from '../../providers/categorias/categorias-provider';
import { CategoriaTransaccion } from '../../objects/CategoriaTransaccion';
import { CuentaProvider } from '../../providers/cuenta/cuenta-provider';
import { CuentaTransaccion } from '../../objects/CuentaTransaccion';
import { PopoverController } from 'ionic-angular';
import { SimpleSelectCategoriaPopoverPage } from '../../pages/cofiguracion/categoria/simple-select-categoria-popover/simple-select-categoria-popover';
import { SimpleSelectCuentaPopoverPage } from '../../pages/cofiguracion/cuenta/simple-select-cuenta-popover/simple-select-cuenta-popover';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CalendarioPage } from '../../pages/calendario/calendario';

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
  public fechaSeleccionada: Date;
  public formTransaccion: FormGroup;

  constructor(public popoverCtrl: PopoverController, fb: FormBuilder, public categoriasProvider: CategoriasProvider, public cuentasProvider:CuentaProvider) {
    console.log('Hello RegistroIngresoGastoComponent Component');
    this.categoriaSeleccionada = this.categoriasProvider.categorias[0];
    this.cuentaSeleccionada = this.cuentasProvider.cuentas[0];
    this.fechaSeleccionada = new Date();


    this.formTransaccion = fb.group({
      'valor': [''/*((this.categoria != null) ? this.categoria.itemGui.nombre : '')*/, Validators.required]
    });
  }

  ngOnInit() {
    
  }

  public openCategorias() {
    let popover = this.popoverCtrl.create(SimpleSelectCategoriaPopoverPage, {tipo: this.tipoTransaccion}, {cssClass: 'popover-date'});
    popover.present({ev: event});
    popover.onDidDismiss(data => {
      if (data) {
        console.log("cambiando categoría", data);
        this.categoriaSeleccionada = data.categoriaSeleccionada;
      }
    });
  }

  openCuentas() {
    let popover = this.popoverCtrl.create(SimpleSelectCuentaPopoverPage, {});
    popover.present({ev: event});
    popover.onDidDismiss(data => {
      if (data) {
        console.log("cambiando categoría", data);
        this.cuentaSeleccionada = data.cuentaSeleccionada;
      }
    });
  }

  openCalendario() {
    let popover = this.popoverCtrl.create(CalendarioPage, {}, {cssClass: 'popover-date'});
    popover.present({});
    popover.onDidDismiss(data => {
      if (data) {
        console.log("seleccionando fecha", data);
        this.fechaSeleccionada = data.fecha;
      }
    });
  }

}
