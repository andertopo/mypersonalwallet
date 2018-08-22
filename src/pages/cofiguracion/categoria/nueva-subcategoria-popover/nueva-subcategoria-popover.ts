import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, ViewController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriaTransaccion } from '../../../../objects/CategoriaTransaccion';
import { ListadoCategoriasPopoverPage } from './listado-categorias-popover/listado-categorias-popover';
import { CategoriasProvider } from '../../../../providers/categorias/categorias-provider';


@Component({
  selector: 'page-nueva-subcategoria-popover',
  templateUrl: 'nueva-subcategoria-popover.html',
})
export class NuevaSubcategoriaPopoverPage {
  public formSubcategoria: FormGroup;
  public categoria:CategoriaTransaccion;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, fb: FormBuilder, public popoverCtrl: PopoverController, public toastCtrl: ToastController, public categoriaProvider:CategoriasProvider) {
    this.formSubcategoria = fb.group({
      'descripcion': [null, Validators.required]
    });
    this.categoria = new CategoriaTransaccion();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevaSubcategoriaPopoverPage');
    this.categoria = this.navParams.get('categoria');
  }

  public close() {
    this.viewCtrl.dismiss();
  }

  public crear() {
    if (this.formSubcategoria.valid) {
      console.log("el formulario si es valido");
      this.categoria.itemGui.setNombre(this.formSubcategoria.value.descripcion);
      let subcategoriaCreada = this.categoriaProvider.crearCategoria(this.categoria);
      let mensaje: string = 'La sub-categoria ha sido creada';
      if (!subcategoriaCreada) {
        mensaje = 'Ha ocurrido un error al crear la sub-categoria';
      }
      let toast = this.toastCtrl.create({
        message: mensaje,
        duration: 1000,
        position: 'middle'
      });
      toast.present();

      toast.onDidDismiss(() => {
        if(subcategoriaCreada) {
          this.viewCtrl.dismiss();
        }
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
        //this.cuenta.itemGui.setNombre(data.tipoCuenta);
        this.categoria = data.categoria;
      }
    });
  }

}
