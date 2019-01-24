import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { CategoriasProvider } from '../../../../../providers/categorias/categorias-provider';
import { CategoriaTransaccion } from '../../../../../objects/CategoriaTransaccion';

@Component({
  selector: 'page-listado-categorias-popover',
  templateUrl: 'listado-categorias-popover.html',
})
export class ListadoCategoriasPopoverPage {
  public categorias: Array<CategoriaTransaccion>;
  public categoriasFiltradas: Array<CategoriaTransaccion>;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, public categoriaProvider: CategoriasProvider) {
    console.log("cargando categorias", this.categoriaProvider.obtenerCategorias());
    this.categorias = this.categoriaProvider.obtenerCategorias();
    this.categoriasFiltradas = this.categorias;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoCategoriasPopoverPage');
    console.log(this.categorias);
  }

  filtrar(event: any) {
    let categoriaNombre = event.target.value;
    this.categoriasFiltradas = this.categorias.filter(categoria => { 
      console.log(categoria);
      return categoria["itemGui"]["nombre"].indexOf(categoriaNombre) > -1 });
  }

  seleccionar(categoria:CategoriaTransaccion) {
    this.viewCtrl.dismiss({categoria: categoria});
  }

}
