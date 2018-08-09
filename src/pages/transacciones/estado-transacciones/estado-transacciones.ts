import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, NavParams } from 'ionic-angular';
import { EstadoTransaccion } from '../../../objects/EstadoTransaccion';


@IonicPage()
@Component({
  selector: 'page-estado-transacciones',
  templateUrl: 'estado-transacciones.html',
})
export class EstadoTransaccionesPage {
  public estadosTransacciones:Array<EstadoTransaccion>;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.estadosTransacciones = new Array();
    this.estadosTransacciones.push(EstadoTransaccion.crearEstado('realizados', 'checkmark', 'secondary'));
    this.estadosTransacciones.push(EstadoTransaccion.crearEstado('pendientes', 'time', 'danger'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstadoTransaccionesPage');
  }

  close(estado:EstadoTransaccion) {
    this.viewCtrl.dismiss({estado: estado})
  }

}
