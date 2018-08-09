import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, Events } from 'ionic-angular';
import { CuentaDetallesPage } from './cuenta-detalles/cuenta-detalles';
import { CuentaPopoverOpciones } from './cuenta-popover-opciones/cuenta-popover-opciones';
import { CuentaTransaccion } from '../../../objects/CuentaTransaccion';
import { CuentaProvider } from '../../../providers/cuenta/cuenta-provider';

@IonicPage()
@Component({
  selector: 'page-cuenta',
  templateUrl: 'cuenta.html',
})
export class CuentaPage {
  public currentDate:Date;
  public cuentas:Array<any>;
  private isOptionOpen:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public events: Events, public cuentaProvider:CuentaProvider) {
    this.currentDate = new Date();
    this.isOptionOpen = false;
    this.cuentas = new Array();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CuentaPage');
    this.cuentas = this.cuentaProvider.obtenerCuentas();
  }

  goSearch() {}

  openFilters() {}

  public goDetalles(cuenta) {
    console.log("entrando a detalles");
    if(!this.isOptionOpen) {
      this.navCtrl.push(CuentaDetallesPage, {cuenta: cuenta});
    }
  }

  public abrirOpciones(event, cuenta) {
    console.log("entrando a opciones");
    this.isOptionOpen = true;
    let popover = this.popoverCtrl.create(CuentaPopoverOpciones, {cuenta: cuenta}, {  });
    popover.present({ev: event});
    this.events.subscribe('close-popover', (valor) => {
      console.log(valor);
      popover.dismiss();
      this.events.unsubscribe('close-popover'); // unsubscribe this event
    })
    popover.onDidDismiss(data => {
      this.isOptionOpen = false;
    });
  }

  public setMonth(month:number) {
    console.log(month);
    this.currentDate.setMonth(this.currentDate.getMonth() + month);
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate());
    console.log(this.currentDate);
  }

}
