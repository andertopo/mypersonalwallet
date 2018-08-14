import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-tipo-cuenta-opciones',
  templateUrl: 'tipo-cuenta-opciones.html',
})
export class TipoCuentaOpcionesPage {

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TipoCuentaOpcionesPage');
  }

  public select(tipo:string) {
    this.viewCtrl.dismiss({tipoCuenta: tipo});
  }

}
