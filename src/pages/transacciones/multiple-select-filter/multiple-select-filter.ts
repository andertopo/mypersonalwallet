import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, NavParams } from 'ionic-angular';
import { SelectFilterItem } from '../../../objects/SelectFilterItem';

@IonicPage()
@Component({
  selector: 'page-multiple-select-filter',
  templateUrl: 'multiple-select-filter.html',
})
export class MultipleSelectFilterPage {
  public multiSelectItems: Array<any>;
  public multiSelectItemSelected: Array<any>;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.multiSelectItems = new Array();
    this.multiSelectItemSelected = new Array();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasTransaccionesPage');
    if (this.navParams.get('type') == 'categoria') {
      this.multiSelectItems.push(SelectFilterItem.crearSelectFilterItem('alimentación', 'restaurant', 'primary', false));
      this.multiSelectItems.push(SelectFilterItem.crearSelectFilterItem('transporte', 'sunny', 'secondary', false));
      this.multiSelectItems.push(SelectFilterItem.crearSelectFilterItem('trabajo', 'sunny', 'secondary', false));
      this.multiSelectItems.push(SelectFilterItem.crearSelectFilterItem('moto', 'card', 'warning', false));
      this.multiSelectItems.push(SelectFilterItem.crearSelectFilterItem('salario', 'cash', 'azulPrimario', false));
      this.multiSelectItems.push(SelectFilterItem.crearSelectFilterItem('arriendo', 'cash', 'azulPrimario', false));
    } else if (this.navParams.get('type') == 'cuenta') {
      this.multiSelectItems.push(SelectFilterItem.crearSelectFilterItem('billetera', 'card', 'primary', false));
      this.multiSelectItems.push(SelectFilterItem.crearSelectFilterItem('bolsillo', 'card', 'secondary', false));
      this.multiSelectItems.push(SelectFilterItem.crearSelectFilterItem('credito', 'card', 'warning', false));
    } else if(this.navParams.get('type') == 'etiqueta') {
      this.multiSelectItems.push(SelectFilterItem.crearSelectFilterItem('gasolina', 'pricetag', '', false));
      this.multiSelectItems.push(SelectFilterItem.crearSelectFilterItem('mecato', 'pricetag', '', false));
      this.multiSelectItems.push(SelectFilterItem.crearSelectFilterItem('desayuno', 'pricetag', '', false));
      this.multiSelectItems.push(SelectFilterItem.crearSelectFilterItem('desayuno deisy', 'pricetag', '', false));
    }
  }

  public enviarFiltro() {
    this.viewCtrl.dismiss({ selectedItems: this.multiSelectItems.filter(item => item.isSelected()) });
  }
}
