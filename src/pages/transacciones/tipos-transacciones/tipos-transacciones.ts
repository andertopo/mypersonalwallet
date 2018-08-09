import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tipos-transacciones',
  templateUrl: 'tipos-transacciones.html',
})
export class TiposTransaccionesPage {

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TiposTransaccionesPage');
  }

  select(tipoTransaccion:string) {
    this.viewCtrl.dismiss({transaccion: tipoTransaccion});
  }
}
