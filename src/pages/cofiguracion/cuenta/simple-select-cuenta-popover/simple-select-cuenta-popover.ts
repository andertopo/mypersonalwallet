import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { CuentaTransaccion } from '../../../../objects/CuentaTransaccion';
import { CuentaProvider } from '../../../../providers/cuenta/cuenta-provider';

/**
 * Generated class for the OpcionesCategoriaPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'simple-select-cuenta-popover',
  templateUrl: 'simple-select-cuenta-popover.html',
})
export class SimpleSelectCuentaPopoverPage {
  public cuentas: Array<CuentaTransaccion>;
  
  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, public cuentaProvider: CuentaProvider) {
    this.cuentas = this.cuentaProvider.cuentas;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SimpleSelectCuentaPopoverPage');
  }

  public seleccionarCuenta(cuenta) {
    console.log("seleccionando")
    this.viewCtrl.dismiss({cuentaSeleccionada: cuenta});
  }
}
