import { Transaccion } from './../../objects/Transaccion';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TransaccionesProvider } from '../../providers/transacciones/transacciones-provider';

/**
 * Generated class for the OtherTransactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-other-transactions',
  templateUrl: 'other-transactions.html',
})
export class OtherTransactionsPage {
  public transacciones: Array<{
    fecha: string,
    menuIcon: string,
    open: boolean,
    submenu: boolean,
    total: number,
    valorColor: string,
    arrayTransacciones: Array<Transaccion>
  }>;
  public currentDate: Date;
  public tipoTransaccion: string;
  public colorHeader: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public transaccionProvider:TransaccionesProvider) {
    this.colorHeader = 'azulPrimario';
    this.tipoTransaccion = 'Transacciones';
    this.currentDate = new Date();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtherTransactionsPage');
    this.transacciones = this.transaccionProvider.obtenerTransacciones();
    this.transacciones.forEach(transaccion => {
      transaccion['open'] = false;
      transaccion['menuIcon'] = "arrow-dropdown";
      
      let total = 0;
      for(let i=0; i<transaccion['arrayTransacciones'].length; i++) {
        total += ((transaccion['arrayTransacciones'][i]['tipo'] == 'gasto') ? (transaccion['arrayTransacciones'][i]['valor'] * -1) : transaccion['arrayTransacciones'][i]['valor']);
      }
      transaccion['total'] = total;
      transaccion['valorColor'] = (transaccion['total'] < 0) ? 'danger' : 'secondary';
      transaccion['submenuOpen'] = true;

    });
    this.transacciones[0]["open"] = true;
    this.transacciones[0]['menuIcon'] = "arrow-dropup";

    console.log(this.transacciones);
  }

  showContentAction(transaccion) {
    this.transacciones.forEach(transaccionItem => {
      if(transaccionItem != transaccion) { 
        transaccionItem['open'] = false;
        transaccionItem['menuIcon'] = "arrow-dropdown";
      }
    });
    if(transaccion['open']) {
      transaccion['submenuOpen'] = !transaccion['submenuOpen'];
    }
    transaccion['open'] = !transaccion['open'];
    transaccion['menuIcon'] = (transaccion['open']) ? "arrow-dropup" : "arrow-dropdown"
  }

  closeCard(transaccion) {
    transaccion['submenuOpen'] = true;
    transaccion['open'] = !transaccion['open'];
    transaccion['menuIcon'] = (transaccion['open']) ? "arrow-dropup" : "arrow-dropdown"
  }

  toggleOption() {
    console.log("cambiando", document.getElementsByClassName('background-1'));
    document.getElementsByClassName('parent')[1].classList.toggle('close');
  }
}
