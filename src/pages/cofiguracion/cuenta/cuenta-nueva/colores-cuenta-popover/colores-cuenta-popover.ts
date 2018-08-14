import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-colores-cuenta-popover',
  templateUrl: 'colores-cuenta-popover.html',
})
export class ColoresCuentaPopoverPage {

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColoresCuentaPopoverPage');
  }

  public select(color:string) {
    this.viewCtrl.dismiss({color: color});
  }

}
