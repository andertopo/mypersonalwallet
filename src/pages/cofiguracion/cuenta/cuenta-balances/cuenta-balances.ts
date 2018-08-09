import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CuentaTransaccion } from '../../../../objects/CuentaTransaccion';


@Component({
  selector: 'page-cuenta-balances',
  templateUrl: 'cuenta-balances.html',
})
export class CuentaBalancesPage {
  public currentYear:number;
  public cuenta:CuentaTransaccion;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currentYear = new Date().getFullYear();
    this.cuenta = new CuentaTransaccion();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CuentaBalancesPage');
    this.cuenta = this.navParams.get('cuenta');
  }

}
