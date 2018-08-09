import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-calendario-filtro-transacciones',
  templateUrl: 'calendario-filtro-transacciones.html',
})
export class CalendarioFiltroTransaccionesPage {
  public currentYear:number;
  public currentMonth:number;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.currentYear = new Date().getFullYear();
    this.currentMonth = new Date().getMonth() + 1;
    console.log(this.currentMonth);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarioFiltroTransaccionesPage');
  }

  modifyYear(cant:number) {
    this.currentYear += cant;
  }

  setMonth(month:number) {
    this.currentMonth = (month == 0) ? (new Date().getMonth()) : month;
    this.close();
  }

  close() {
    console.log("month", this.currentYear + "/" + this.currentMonth);
    this.viewCtrl.dismiss({date: new Date(this.currentYear, this.currentMonth)})
  }
}
