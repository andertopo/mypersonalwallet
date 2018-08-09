import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { FiltroBusquedaPage } from '../filtro-busqueda/filtro-busqueda';

@IonicPage()
@Component({
  selector: 'page-search-transactions',
  templateUrl: 'search-transactions.html',
})
export class SearchTransactionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchTransactionsPage');
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(FiltroBusquedaPage, {}, {cssClass: 'popover-busqueda'});
    popover.present();
  }

}
