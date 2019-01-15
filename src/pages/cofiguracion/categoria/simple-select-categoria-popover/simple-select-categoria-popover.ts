import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, PopoverController, ViewController, ToastController } from 'ionic-angular';
import { CategoriaTransaccion } from '../../../../objects/CategoriaTransaccion';
import { CategoriasProvider } from '../../../../providers/categorias/categorias-provider';
import { CategoriaTransaccionesComponent } from '../../../../components/categoria-transacciones/categoria-transacciones';

/**
 * Generated class for the OpcionesCategoriaPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'simple-select-categoria-popover',
  templateUrl: 'simple-select-categoria-popover.html',
})
export class SimpleSelectCategoriaPopoverPage {
  public categoriaSeleccionada: CategoriaTransaccion;
  public tipo: string;
  public isSelect: boolean;
  @ViewChild("categoriaTransacciones") categoriaTransacciones: CategoriaTransaccionesComponent;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public toastCtrl: ToastController, public categoriaProvider: CategoriasProvider) {
    this.categoriaSeleccionada = new CategoriaTransaccion();
    this.isSelect = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpcionesCategoriaPopoverPage');
    this.categoriaSeleccionada = this.navParams.get('categoria');
    this.tipo = this.navParams.get('tipo');
  }

  public getCategorias(ev: any) {
    const val = ev.target.value;
    this.categoriaTransacciones.getCategoriasFilter(val);
  }

  public seleccionarCategoria(categoria) {
    console.log("seleccionando")
    this.categoriaSeleccionada = categoria;
    this.viewCtrl.dismiss({categoriaSeleccionada: this.categoriaSeleccionada});
  }
}
