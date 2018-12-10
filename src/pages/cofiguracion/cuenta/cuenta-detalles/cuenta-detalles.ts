import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { CuentaBalancesPage } from '../cuenta-balances/cuenta-balances';
import { CuentaTransaccion } from '../../../../objects/CuentaTransaccion';
import { CalendarioPage } from '../../../calendario/calendario';
import { CuentaNuevaPage } from '../cuenta-nueva/cuenta-nueva';


@Component({
  selector: 'page-cuenta-detalles',
  templateUrl: 'cuenta-detalles.html',
})
export class CuentaDetallesPage {
  public cuenta:CuentaTransaccion;
  public date:Date;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    this.cuenta = new CuentaTransaccion();
    this.date = new Date();
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

  goTransacciones() {
    let popover = this.popoverCtrl.create(CalendarioPage, {}, {cssClass: 'popover-date'});
    popover.present({});
  }

  goEdit() {
    let popover = this.popoverCtrl.create(CuentaNuevaPage, {cuenta: this.cuenta}, {cssClass: 'popover-center'});
    popover.present();
  }
}
