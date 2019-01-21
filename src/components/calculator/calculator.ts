import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'calculator',
  templateUrl: 'calculator.html'
})
export class CalculatorComponent implements OnInit {
  public value: number;
  public color: string;
  
  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    console.log('Hello CalculatorComponent Component');
    this.value = 0;
    this.color = 'primary';
  }
  
  ngOnInit() {
    console.log('ionViewDidLoad CalculatorComponent Component');
    this.value = (this.navParams.get('value')) ? this.navParams.get('value') : this.value;
    this.color = (this.navParams.get('color')) ? this.navParams.get('color') : this.color;
  }

  borrarValor() {
    this.value = 0;
  }

  addValue(value:string) {
    console.log("agregando valor", value);
    console.log(this.value + "" + value, parseInt(this.value + "" + value));
    this.value = parseInt(this.value + "" + value);//(this.value != '$ 0.0') ? (this.value + '' + value) : value;
  }

  cancelar() {
    this.viewCtrl.dismiss({
      valor: 0
    });
  }

  enviarValor() {
    this.viewCtrl.dismiss({
      valor: this.value
    });
  }
}
