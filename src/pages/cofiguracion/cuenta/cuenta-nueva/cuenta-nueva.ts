import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { TipoCuentaOpcionesPage } from './tipo-cuenta-opciones/tipo-cuenta-opciones';
import { CuentaTransaccion } from '../../../../objects/CuentaTransaccion';
import { ColoresCuentaPopoverPage } from './colores-cuenta-popover/colores-cuenta-popover';

@Component({
  selector: 'page-cuenta-nueva',
  templateUrl: 'cuenta-nueva.html',
})
export class CuentaNuevaPage {
  private tipoCuenta: string;
  public cuenta:CuentaTransaccion;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    this.tipoCuenta = "dinero";
    this.cuenta = new CuentaTransaccion();
    this.cuenta.itemGui.setIcono('home');
    this.cuenta.itemGui.setColor('warning');
    this.cuenta.itemGui.setNombre('dinero');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CuentaNuevaPage');
  }

  public openOpciones() {
    let popover = this.popoverCtrl.create(TipoCuentaOpcionesPage, {}, {});
    popover.present({ev: event});
    popover.onDidDismiss(data => {
      if(data) {
        this.tipoCuenta = data.tipoCuenta;
        this.cuenta.itemGui.setNombre(data.tipoCuenta);
      }
    });
  }

  public openColor() {
    let popover = this.popoverCtrl.create(ColoresCuentaPopoverPage, {}, {});
    popover.present({ev: event});
    popover.onDidDismiss(data => {
      if(data) {
        this.tipoCuenta = data.color;
        this.cuenta.itemGui.setColor(data.color);
      }
    });
  }

  public crear() {
    console.log("devolviendonos");
    this.navCtrl.pop();
  }
}
