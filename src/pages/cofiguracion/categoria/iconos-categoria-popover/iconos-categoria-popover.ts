import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-iconos-categoria-popover',
  templateUrl: 'iconos-categoria-popover.html',
})
export class IconosCategoriaPopoverPage {
  public selectedColor: string;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IconosCategoriaPopoverPage');
    this.selectedColor = this.navParams.get('color');
  }

  public select(icono:string) {
    this.viewCtrl.dismiss({icono: icono});
  }

}
