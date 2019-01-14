import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { MoverTransaccionesPopoverPage } from './mover-transacciones-popover/mover-transacciones-popover';
import { GestionCategoriaPopoverPage } from './gestion-categoria-popover/gestion-categoria-popover';

@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {
  public tipo: string;
  public color: string;
  public bgClass: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    this.tipo = 'gastos';
    this.color = 'danger';
    this.bgClass = 'bg-danger';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriaPage');
  }

  openMover() {
    let popover = this.popoverCtrl.create(MoverTransaccionesPopoverPage, {}, {cssClass: 'popover-center'});
    popover.present();
  }

  openNueva() {
    let popover = this.popoverCtrl.create(GestionCategoriaPopoverPage, {tipo: this.tipo}, {});
    popover.present();
  }

  segmentChanged(event) {
    console.log(event.value);
    if(event.value == 'gastos') {
      this.tipo = 'gastos';
      this.color = 'danger';
      this.bgClass = 'bg-danger';
    } else {
      this.tipo = 'ingresos';
      this.color = 'secondary';
      this.bgClass = 'bg-secondary';
    }
  }

}
