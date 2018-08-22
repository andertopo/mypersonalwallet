import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, ViewController, ToastController } from 'ionic-angular';
import { CategoriaTransaccion } from '../../../../objects/CategoriaTransaccion';
import { ListadoCategoriasPopoverPage } from '../nueva-subcategoria-popover/listado-categorias-popover/listado-categorias-popover';
import { CategoriasProvider } from '../../../../providers/categorias/categorias-provider';


@Component({
  selector: 'page-mover-transacciones-popover',
  templateUrl: 'mover-transacciones-popover.html',
})
export class MoverTransaccionesPopoverPage {
  public categoriaOrigen: CategoriaTransaccion;
  public categoriaDestino: CategoriaTransaccion;
  public tipoCategoria: string;
  public valid:boolean;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public toastCtrl: ToastController, public categoriaProvider: CategoriasProvider) {
    this.categoriaOrigen = CategoriaTransaccion.crearCategoria('Seleccione una categoria', 'pricetag', 'opaque', false);
    this.categoriaDestino = CategoriaTransaccion.crearCategoria('Seleccione una categoria', 'pricetag', 'opaque', false);
    this.tipoCategoria = 'gasto';
    this.valid = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoverTransaccionesPopoverPage');
    let cat: CategoriaTransaccion = this.navParams.get('categoria');
    if (cat) {
      this.categoriaOrigen = this.navParams.get('categoria');
    }
    this.tipoCategoria = (this.navParams.get('tipoCategoria')) ? this.navParams.get('tipoCategoria') : 'gasto';
  }

  openCategorias(type: string) {
    let popover = this.popoverCtrl.create(ListadoCategoriasPopoverPage, {}, {});
    popover.present();
    popover.onDidDismiss(data => {
      if (data) {
        this.valid = true;
        if (type == 'origen') {
          this.categoriaOrigen = data.categoria;
        } else {
          this.categoriaDestino = data.categoria;
        }
      }
    });
  }

  close() {
    this.viewCtrl.dismiss();
  }

  public move() {
    console.log("moviendo transacciones", this.categoriaOrigen, this.categoriaDestino);
    this.validar();
    if (this.valid) {
      let transaccionesMovidas = this.categoriaProvider.moverTransacciones(this.categoriaOrigen, this.categoriaDestino);
      let mensaje: string = 'La categoria ha sido creada';
      if (!transaccionesMovidas) {
        mensaje = 'Ha ocurrido un error al crear la categoria';
      }
      let toast = this.toastCtrl.create({
        message: mensaje,
        duration: 1000,
        position: 'middle'
      });
      toast.present();

      toast.onDidDismiss(() => {
        if (transaccionesMovidas) {
          this.viewCtrl.dismiss();
        }
      });
    }
  }

  public validar() {
    if (this.categoriaOrigen.itemGui.nombre == 'Seleccione una categoria') {
      this.valid = false;
    }
    if (this.categoriaDestino.itemGui.nombre == 'Seleccione una categoria') {
      this.valid = false;
    }
  }
}
