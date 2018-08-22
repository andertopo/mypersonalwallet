import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, ToastController } from 'ionic-angular';
import { TipoCuentaOpcionesPage } from './tipo-cuenta-opciones/tipo-cuenta-opciones';
import { CuentaTransaccion } from '../../../../objects/CuentaTransaccion';
import { ColoresCuentaPopoverPage } from './colores-cuenta-popover/colores-cuenta-popover';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CuentaProvider } from '../../../../providers/cuenta/cuenta-provider';

@Component({
  selector: 'page-cuenta-nueva',
  templateUrl: 'cuenta-nueva.html',
})
export class CuentaNuevaPage {
  public formCuenta: FormGroup;
  public cuenta: CuentaTransaccion;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, fb: FormBuilder, public cuentaProvider: CuentaProvider, public toastCtrl: ToastController) {
    this.cuenta = new CuentaTransaccion();
    this.cuenta.itemGui.setIcono('home');
    this.cuenta.itemGui.setColor('warning');
    this.cuenta.itemGui.setNombre('dinero');

    this.formCuenta = fb.group({
      'nombre': [null, Validators.required],
      'valorInicial': [null, Validators.compose([Validators.required, Validators.pattern('[0-9]*')])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CuentaNuevaPage');
  }

  public openOpciones() {
    let popover = this.popoverCtrl.create(TipoCuentaOpcionesPage, {}, {});
    popover.present({ ev: event });
    popover.onDidDismiss(data => {
      if (data) {
        this.cuenta.itemGui.setNombre(data.tipoCuenta);
      }
    });
  }

  public openColor() {
    let popover = this.popoverCtrl.create(ColoresCuentaPopoverPage, {}, {});
    popover.present({ ev: event });
    popover.onDidDismiss(data => {
      if (data) {
        this.cuenta.itemGui.setColor(data.color);
      }
    });
  }

  public crear() {
    if (this.formCuenta.valid) {
      this.cuenta.saldoTotal = this.formCuenta.value.valorInicial;
      this.cuenta.itemGui.getNombre = this.formCuenta.value.nombre;
      let cuentaCreada: boolean = this.cuentaProvider.crearCuenta(this.cuenta);
      let mensaje: string = 'La cuenta ha sido creada';
      if (!cuentaCreada) {
        mensaje = 'Ha ocurrido un error al crear la cuenta';
      }
      let toast = this.toastCtrl.create({
        message: mensaje,
        duration: 3000,
        position: 'middle'
      });
      toast.present();

      toast.onDidDismiss(() => {
        if(cuentaCreada) {
          this.navCtrl.pop();
        }
      });
    } else {
      console.log(this.formCuenta.hasError);
    }
  }

}
