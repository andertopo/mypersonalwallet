import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ViewController, PopoverController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CategoriaTransaccion } from '../../../../objects/CategoriaTransaccion';
import { CategoriasProvider } from '../../../../providers/categorias/categorias-provider';
import { ColoresCuentaPopoverPage } from '../../cuenta/cuenta-nueva/colores-cuenta-popover/colores-cuenta-popover';
import { IconosCategoriaPopoverPage } from '../iconos-categoria-popover/iconos-categoria-popover';


@Component({
  selector: 'page-gestion-categoria-popover',
  templateUrl: 'gestion-categoria-popover.html',
})
export class GestionCategoriaPopoverPage {
  public title: string;
  public formSubcategoria: FormGroup;

  public categoria:CategoriaTransaccion;
  public tipoCategoria: string;
  
  private selectedColor: any;
  private selectedIcon: any;

  public colors: Array<any>;
  public icons: Array<any>;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, fb: FormBuilder, public popoverCtrl: PopoverController, public toastCtrl: ToastController, public categoriaProvider: CategoriasProvider) {
    this.title = 'nueva categoria';
    this.formSubcategoria = fb.group({
      'descripcion': [((this.categoria != null) ? this.categoria.itemGui.nombre : ''), Validators.required]
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
    this.selectedIcon = this.icons[0];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GestionCategoriaPopoverPage');
    this.tipoCategoria = this.navParams.get('tipo');
    this.categoria = this.navParams.get('categoria');
    if(this.categoria) {
      console.log("categoria!!!", this.categoria);
      this.formSubcategoria.setValue({'descripcion': this.categoria.itemGui.nombre});
      this.icons[0].icon = this.categoria.itemGui.icono;
      this.icons[0].selected = true;
      this.icons[0].color = this.categoria.itemGui.color;
      this.selectedIcon = this.icons[0];
  
      this.colors[0].color = this.categoria.itemGui.color;
      this.colors[0].selected = true;
      this.selectedColor = this.colors[0];
      this.title = 'Editar categoria';
    }
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
      let categoria = null;
      if(this.categoria != null) { 
        console.log("editando categoria");
        categoria = this.categoria
      } else {
        console.log("categoria nueva")
        categoria = new CategoriaTransaccion();
      } 
      categoria.tipo = this.tipoCategoria;
      categoria.itemGui.setNombre(this.formSubcategoria.value.descripcion);
      console.log((this.categoria != null), " vamos a setear categoria", categoria);
      console.log(this.selectedIcon);
      console.log(this.selectedColor['color']);
      categoria.itemGui.setColor(this.selectedColor['color']);
      categoria.itemGui.setIcono(this.selectedIcon['icon']);


      this.categoriaProvider.guardarCategoria(categoria, (this.categoria != null)).then(resp => {
        this.showMessage('La categoria ha sido ' + ((this.categoria != null) ? 'editada' : 'creada'), true);
      }).catch(err => {
        this.showMessage('Ha ocurrido un error al guardar la categoria', false);
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
        console.log("seleccionando ", data);
        this.icons[0].icon = data.icono;
        this.icons[0].color = this.selectedColor['color'];
        this.selectIcon = this.icons[0];
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

  showMessage(mensaje: string, created:boolean) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 2000,
      position: 'middle'
    });
    toast.present();

    toast.onDidDismiss(() => {
      if (created) {
        this.viewCtrl.dismiss({categoria: this.categoria});
      }
    });
  }

}
