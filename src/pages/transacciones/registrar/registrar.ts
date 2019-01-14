import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegistrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {
  public tipoTransaccion: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tipoTransaccion = 'gasto';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPage');
    this.tipoTransaccion = this.navParams.get('tipoTransaccion');

  }

}
