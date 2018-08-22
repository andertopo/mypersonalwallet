import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ViewController, PopoverController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CategoriaTransaccion } from '../../../../objects/CategoriaTransaccion';
import { CategoriasProvider } from '../../../../providers/categorias/categorias-provider';
import { ColoresCuentaPopoverPage } from '../../cuenta/cuenta-nueva/colores-cuenta-popover/colores-cuenta-popover';
import { IconosCategoriaPopoverPage } from '../iconos-categoria-popover/iconos-categoria-popover';


@Component({
  selector: 'page-nueva-categoria-popover',
  templateUrl: 'nueva-categoria-popover.html',
})
export class NuevaCategoriaPopoverPage {
  public formSubcategoria: FormGroup;
  public tipoCategoria: string;
  
  private selectedColor: any;
  private selectedIcon: any;

  public colors: Array<any>;
  public icons: Array<any>;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, fb: FormBuilder, public popoverCtrl: PopoverController, public toastCtrl: ToastController, public categoriaProvider: CategoriasProvider) {
    this.formSubcategoria = fb.group({
      'descripcion': [null, Validators.required]
    });
    this.selectedIcon = {};

    this.colors = new Array();
    this.icons = new Array();

    this.colors.push({
      color: 'azulPrimario',
      selected: true
    });

    this.colors.push({
      color: 'secondary',
      selected: false
    });

    this.colors.push({
      color: 'warning',
      selected: false
    });

    this.icons.push({
      color: 'opaque',
      icon: 'custom-beach',
      selected: false
    });

    this.icons.push({
      color: 'opaque',
      icon: 'car',
      selected: false
    });

    this.icons.push({
      color: 'opaque',
      icon: 'restaurant',
      selected: false
    });

    this.selectedColor = this.colors[0];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevaCategoriaPopoverPage');
    this.tipoCategoria = this.navParams.get('tipo');
  }

  public selectColor(color: any) {
    this.selectedColor = color;

    for (let i = 0; i < this.colors.length; i++) {
      this.colors[i].selected = false;
      this.selectedIcon.color = color.color;
    }
    color.selected = true;
  }

  public selectIcon(icon) {
    this.selectedIcon = icon;
    for (let i = 0; i < this.icons.length; i++) {
      this.icons[i].selected = false;
      this.icons[i].color = 'opaque';
    }
    icon.selected = true;

    icon.color = this.selectedColor['color'];
  }

  public close() {
    this.viewCtrl.dismiss();
  }

  public crear() {
    if (this.formSubcategoria.valid) {
      let categoria = new CategoriaTransaccion();
      categoria.tipo = this.tipoCategoria;
      categoria.itemGui.setNombre(this.formSubcategoria.value.descripcion);
      let subcategoriaCreada = this.categoriaProvider.crearCategoria(categoria);
      let mensaje: string = 'La categoria ha sido creada';
      if (!subcategoriaCreada) {
        mensaje = 'Ha ocurrido un error al crear la categoria';
      }
      let toast = this.toastCtrl.create({
        message: mensaje,
        duration: 1000,
        position: 'middle'
      });
      toast.present();

      toast.onDidDismiss(() => {
        if (subcategoriaCreada) {
          this.viewCtrl.dismiss();
        }
      });
    } else {
      console.log(this.formSubcategoria.hasError);
    }

  }

  openIconos() {
    let popover = this.popoverCtrl.create(IconosCategoriaPopoverPage, {color: this.selectedColor.color}, {});
    popover.present();
    popover.onDidDismiss(data => {
      if (data) {
        this.icons[0].icon = data.icono;
      }
    });
  }

  openColors() {
    let color = this.selectedColor.color;
    let popover = this.popoverCtrl.create(ColoresCuentaPopoverPage, {selectedColor: color}, {});
    popover.present();
    popover.onDidDismiss(data => {
      if (data) {
        this.selectedColor.color = data.color;
        this.selectedIcon.color = data.color;
      }
    });
  }

}
