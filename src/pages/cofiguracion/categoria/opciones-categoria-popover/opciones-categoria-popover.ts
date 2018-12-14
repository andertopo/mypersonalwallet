import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, ViewController, ToastController } from 'ionic-angular';
import { MoverTransaccionesPopoverPage } from '../mover-transacciones-popover/mover-transacciones-popover';
import { CategoriaTransaccion } from '../../../../objects/CategoriaTransaccion';
import { IconosCategoriaPopoverPage } from '../iconos-categoria-popover/iconos-categoria-popover';
import { CategoriasProvider } from '../../../../providers/categorias/categorias-provider';
import { NuevaCategoriaPopoverPage } from '../nueva-categoria-popover/nueva-categoria-popover';

/**
 * Generated class for the OpcionesCategoriaPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-opciones-categoria-popover',
  templateUrl: 'opciones-categoria-popover.html',
})
export class OpcionesCategoriaPopoverPage {
  public categoria: CategoriaTransaccion;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public toastCtrl: ToastController, public categoriaProvider: CategoriasProvider) {
    this.categoria = new CategoriaTransaccion();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpcionesCategoriaPopoverPage');
    this.categoria = this.navParams.get('categoria');
  }

  openMover() {
    this.viewCtrl.dismiss();
    let popover = this.popoverCtrl.create(MoverTransaccionesPopoverPage, {categoria: this.categoria}, {cssClass: 'popover-center'});
    popover.present();
  }

  editar() {
    let popover = this.popoverCtrl.create(NuevaCategoriaPopoverPage, {tipo: this.categoria.tipo, categoria: this.categoria}, {});
    popover.present();
    popover.onDidDismiss(data => {
      if (data) {
        this.categoria = data.categoria;
        this.viewCtrl.dismiss({categoria: this.categoria});
      }
    });
  }

  openIconos() {
    let popover = this.popoverCtrl.create(IconosCategoriaPopoverPage, {color: 'opaque'}, {});
    popover.present();
    popover.onDidDismiss(data => {
      if (data) {
        console.log("seleccionando ", data);
        this.categoria.itemGui.setIcono(data.icono);
        this.categoriaProvider.guardarCategoria(this.categoria, true).then(resp => {
          console.log("se almacenó bien el cambio de ícono");
          this.viewCtrl.dismiss({categoria: this.categoria});
        }).catch(err => {
          this.showMessage('Ha ocurrido un error al crear la categoria', false);
        });
      }
    });
  }

  showMessage(mensaje: string, created:boolean) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 2000,
      position: 'middle'
    });
    toast.present();

    toast.onDidDismiss(() => {
      
    });
  }

}
