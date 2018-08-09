import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CuentaBalancesPage } from '../cuenta-balances/cuenta-balances';
import { CuentaTransaccion } from '../../../../objects/CuentaTransaccion';


@Component({
  selector: 'page-cuenta-detalles',
  templateUrl: 'cuenta-detalles.html',
})
export class CuentaDetallesPage {
  public cuenta:CuentaTransaccion;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cuenta = new CuentaTransaccion();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CuentaDetallesPage');
    if(this.navParams.get('cuenta')) {
      this.cuenta = this.navParams.get('cuenta');
    }
  }

  goBalance() {
    this.navCtrl.push(CuentaBalancesPage, {cuenta: this.cuenta});
  }
}
