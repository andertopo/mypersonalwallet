import { Component, Input, OnInit } from '@angular/core';
import { CategoriasProvider } from '../../providers/categorias/categorias-provider';
import { CategoriaTransaccion } from '../../objects/CategoriaTransaccion';
import { PopoverController } from 'ionic-angular';
import { OpcionesCategoriaPopoverPage } from '../../pages/cofiguracion/categoria/opciones-categoria-popover/opciones-categoria-popover';
import { GestionSubcategoriaPopoverPage } from '../../pages/cofiguracion/categoria/gestion-subcategoria-popover/gestion-subcategoria-popover';

@Component({
  selector: 'categoria-transacciones',
  templateUrl: 'categoria-transacciones.html'
})
export class CategoriaTransaccionesComponent implements OnInit {
  @Input() tipo: string;
  public categorias: Array<CategoriaTransaccion>;

  constructor(public categoriaProvider: CategoriasProvider, public popoverCtrl: PopoverController) {
    console.log('Hello CategoriaTransaccionesComponent Component', this.tipo);
    //this.tipo = "gasto";
    this.categorias = new Array();
  }
  
  ngOnInit() {
    console.log('ionViewDidLoad CategoriaTransaccionesComponent Component', this.tipo);
    this.categoriaProvider.obtenerCategorias().forEach(categoria => {
      if(categoria.tipo == this.tipo) {
        this.categorias.push(categoria);
      }
    });
  }

  openOpciones(event, categoria) {
    let popover = this.popoverCtrl.create(OpcionesCategoriaPopoverPage, {categoria: categoria});
    popover.present({ev: event});
    popover.onDidDismiss(data => {
      if (data) {
        console.log("cambiando categoría", data, categoria);
        categoria = data.categoria;
      }
    });
  }

  openSubcategoria(event, categoria) {
    console.log("escogiendo categoria", categoria);
    let popover = this.popoverCtrl.create(GestionSubcategoriaPopoverPage, {categoria: categoria}, {cssClass: 'popover-center'});
    popover.present({ev: event});
    popover.onDidDismiss(data => {
      if (data) {
        console.log("subcategoria creada", data, categoria);
        categoria.subcategorias.push(data.subcategoria);
      }
    });
  }
}
