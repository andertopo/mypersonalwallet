import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, ViewController, ToastController } from 'ionic-angular';
import { EtiquetaProvider } from '../../../../providers/etiqueta/etiqueta-provider';
import { SelectFilterItem } from '../../../../objects/SelectFilterItem';

/**
 * Generated class for the OpcionesCategoriaPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'simple-select-etiqueta-popover',
  templateUrl: 'simple-select-etiqueta-popover.html',
})
export class SimpleSelectEtiquetaPopoverPage {
  public etiquetaSeleccionada: SelectFilterItem;
  public etiquetas: Array<SelectFilterItem>;
  public etiquetaNueva: string;
  public color: string;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public toastCtrl: ToastController, public etiquetaProvider: EtiquetaProvider) {
    this.etiquetaSeleccionada = new SelectFilterItem();
    this.etiquetas = this.etiquetaProvider.etiquetas;
    this.etiquetas.push(SelectFilterItem.crearSelectFilterItem('viaje', '', '', false));
    this.etiquetas.push(SelectFilterItem.crearSelectFilterItem('playa', '', '', false));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SimpleSelectEtiquetaPopoverPage');
    this.etiquetaSeleccionada = this.navParams.get('etiqueta');
    this.color = this.navParams.get('color');
    
  }

  public getEtiquetas(ev: any) {
    const etiquetaBuscada = ev.target.value;
    this.etiquetas = this.etiquetaProvider.etiquetas;

    if (etiquetaBuscada && etiquetaBuscada.trim() != '') {
      this.etiquetas = this.etiquetas.filter((etiqueta) => {
        return (etiqueta.nombre.toLowerCase().indexOf(etiquetaBuscada.toLowerCase()) > -1);
      });
    }
  }

  public agregarEtiqueta(){
    this.etiquetaSeleccionada = SelectFilterItem.crearSelectFilterItem(this.etiquetaNueva, '', '', false);
    this.seleccionarEtiqueta(this.etiquetaSeleccionada);
  }

  public seleccionarEtiqueta(etiqueta) {
    console.log("seleccionando", etiqueta);
    this.etiquetaSeleccionada = etiqueta;
    this.viewCtrl.dismiss({etiquetasSeleccionadas: [this.etiquetaSeleccionada]});
  }
}
