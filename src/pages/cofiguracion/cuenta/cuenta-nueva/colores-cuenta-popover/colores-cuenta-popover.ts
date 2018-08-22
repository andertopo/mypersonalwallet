import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-colores-cuenta-popover',
  templateUrl: 'colores-cuenta-popover.html',
})
export class ColoresCuentaPopoverPage {
  public colors:Array<any>;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.colors = new Array();
    let arrayColors = ['primary', 'secondary', 'warning', 'danger', 'azulPrimario', 'azul', 'green', 'beige', 'violeta', 'orange'];
    let contColor = 0;
    for(let i=0; i<6; i++) {
      this.colors.push(new Array());
      for(let j=0; j<5; j++) {
        this.colors[i].push({
          color: arrayColors[contColor],
          selected: (this.navParams.get('selectedColor') && arrayColors[contColor] == this.navParams.get('selectedColor')) ? true : false
        });
        contColor++;
      }
      contColor++;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColoresCuentaPopoverPage');

  }

  public select(color:string) {
    console.log('color', color);
    this.viewCtrl.dismiss({color: color});
  }

}
