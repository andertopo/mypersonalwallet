import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { CuentaBalancesPage } from '../cuenta-balances/cuenta-balances';
import { CuentaDetallesPage } from '../cuenta-detalles/cuenta-detalles';
import { CuentaTransaccion } from '../../../../objects/CuentaTransaccion';


@Component({
  selector: 'cuenta-popover-opciones',
  templateUrl: 'cuenta-popover-opciones.html',
})
export class CuentaPopoverOpciones {
  public cuenta:CuentaTransaccion;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CuentaDetallesPage');
    this.cuenta = this.navParams.get('cuenta');
  }

  goBalanceAnual() {
    console.log("cuenta", this.cuenta);
    this.navCtrl.push(CuentaBalancesPage, {cuenta: this.cuenta});
    this.events.publish('close-popover', true);
  }

  goDetalles() {
    this.navCtrl.push(CuentaDetallesPage, {cuenta: this.cuenta});
    this.events.publish('close-popover', true);
  }
}
