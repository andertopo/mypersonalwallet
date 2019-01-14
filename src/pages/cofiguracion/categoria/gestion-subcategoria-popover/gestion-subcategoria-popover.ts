import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, ViewController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriaTransaccion } from '../../../../objects/CategoriaTransaccion';
import { ListadoCategoriasPopoverPage } from './listado-categorias-popover/listado-categorias-popover';
import { CategoriasProvider } from '../../../../providers/categorias/categorias-provider';


@Component({
  selector: 'page-gestion-subcategoria-popover',
  templateUrl: 'gestion-subcategoria-popover.html',
})
export class GestionSubcategoriaPopoverPage {
  public formSubcategoria: FormGroup;
  public categoria:CategoriaTransaccion;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, fb: FormBuilder, public popoverCtrl: PopoverController, public toastCtrl: ToastController, public categoriaProvider:CategoriasProvider) {
    this.formSubcategoria = fb.group({
      'descripcion': [null, Validators.required]
    });
    this.categoria = new CategoriaTransaccion();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GestionSubcategoriaPopoverPage');
    let categoriaPadre = this.navParams.get('categoria');
    this.categoria = CategoriaTransaccion.crearCategoria(null, '', categoriaPadre.itemGui.icono, categoriaPadre.itemGui.color, false, categoriaPadre.tipo, categoriaPadre.id);
    //this.categoria.padreId = this.categoria.id;
  }

  public close() {
    this.viewCtrl.dismiss();
  }

  public crear() {
    if (this.formSubcategoria.valid) {
      console.log("el formulario si es valido");
      this.categoria.itemGui.setNombre(this.formSubcategoria.value.descripcion);
      this.categoriaProvider.guardarCategoria(this.categoria, false).then(resp => {
        this.showMessage('La subcategoria ha sido ' + ((false) ? 'editada' : 'creada'), true);
      }).catch(err => {
        this.showMessage('Ha ocurrido un error al guardar la subcategoria', false);
      });
    } else {
      console.log(this.formSubcategoria.hasError);
    }
    
  }

  openCategorias() {
    let popover = this.popoverCtrl.create(ListadoCategoriasPopoverPage, {}, {});
    popover.present();
    popover.onDidDismiss(data => {
      if (data) {
        this.categoria.padreId = data.categoria.id;
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
      if (created) {
        this.viewCtrl.dismiss({subcategoria: this.categoria});
      }
    });
  }
}
