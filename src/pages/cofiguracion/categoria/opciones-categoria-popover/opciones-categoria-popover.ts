import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, ViewController } from 'ionic-angular';
import { MoverTransaccionesPopoverPage } from '../mover-transacciones-popover/mover-transacciones-popover';
import { CategoriaTransaccion } from '../../../../objects/CategoriaTransaccion';

/**
 * Generated class for the OpcionesCategoriaPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-opciones-categoria-popover',
  templateUrl: 'opciones-categoria-popover.html',
})
export class OpcionesCategoriaPopoverPage {
  public categoria: CategoriaTransaccion;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    this.categoria = new CategoriaTransaccion();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpcionesCategoriaPopoverPage');
    this.categoria = this.navParams.get('categoria');
  }

  openMover() {
    this.viewCtrl.dismiss();
    let popover = this.popoverCtrl.create(MoverTransaccionesPopoverPage, {categoria: this.categoria}, {cssClass: 'popover-center'});
    popover.present();
  }

}
