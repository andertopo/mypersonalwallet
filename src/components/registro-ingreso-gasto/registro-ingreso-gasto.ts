import { TransaccionesProvider } from './../../providers/transacciones/transacciones-provider';
import { Transaccion } from './../../objects/Transaccion';
import { Component, Input, OnInit } from '@angular/core';
import { CategoriasProvider } from '../../providers/categorias/categorias-provider';
import { CategoriaTransaccion } from '../../objects/CategoriaTransaccion';
import { CuentaProvider } from '../../providers/cuenta/cuenta-provider';
import { CuentaTransaccion } from '../../objects/CuentaTransaccion';
import { PopoverController, ToastController } from 'ionic-angular';
import { SimpleSelectCategoriaPopoverPage } from '../../pages/cofiguracion/categoria/simple-select-categoria-popover/simple-select-categoria-popover';
import { SimpleSelectCuentaPopoverPage } from '../../pages/cofiguracion/cuenta/simple-select-cuenta-popover/simple-select-cuenta-popover';
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
  public formTransaccion: any;
  public selectOptions = {
    cssClass: 'remove-ok'
  };

  constructor(public popoverCtrl: PopoverController, public toastCtrl: ToastController, public categoriasProvider: CategoriasProvider, public cuentasProvider:CuentaProvider, public transaccionProvider: TransaccionesProvider) {
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
      cantidadRepeticiones: '',
      tipoRepeticion: 'm',
      repetirCadaX: '',
      tipoCadaX: 'Meses',
      recordatorio: false,
      observacion: ''
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

  toggleRecordatorio() {
    this.formTransaccion.recordatorio = !this.formTransaccion.recordatorio;
  }

  searchTransactions(evt) {
    
  }

  guardar() {
    if(this.formTransaccion.valor != '') {
      console.log(this.formTransaccion);
      if(this.formTransaccion.repetir == true && this.formTransaccion.cantidadRepeticiones == '') {
        this.mostrarAlerta("Se debe ingresar el número de veces que se debe repetir el " + this.tipoTransaccion);  
      } else {
        if(this.formTransaccion.repetir == true && this.formTransaccion.tipoRepeticion == 'p' && this.formTransaccion.repetirCadaX == '') {
          this.mostrarAlerta("Se debe ingresar cada cuantos " + this.formTransaccion.tipoCadaX + " se debe repetir el " + this.tipoTransaccion);  
        } else {
          this.guardarTransaccion();
        }
      }
    } else {
      this.mostrarAlerta("Se debe ingresar un valor");
    }    
  }

  guardarTransaccion() {
    let transaccion = Transaccion.crearTransaccion(this.tipoTransaccion, this.formTransaccion.descripcion, this.formTransaccion.valor, 
      this.formTransaccion.fechaSeleccionada, this.formTransaccion.pagoRegistrado, this.formTransaccion.gastoFijo, this.formTransaccion.repetir, this.formTransaccion.categoriaSeleccionada, this.formTransaccion.cuentaSeleccionada, 
      this.formTransaccion.etiquetaSeleccionada, this.formTransaccion.observacion, null
      );
    this.transaccionProvider.guardarTransaccion(transaccion, false).then(transaccion => {
      this.mostrarAlerta("Se ha creado la transacción");
    }).catch(err => {
      this.mostrarAlerta("NO se ha creado la transacción");
    });
  }

  mostrarAlerta(mensaje) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000,
      position: 'middle'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
