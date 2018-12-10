import { Component } from '@angular/core';
import { CategoriasProvider } from '../../providers/categorias/categorias-provider';
import { CategoriaTransaccion } from '../../objects/CategoriaTransaccion';
import { PopoverController } from 'ionic-angular';
import { OpcionesCategoriaPopoverPage } from '../../pages/cofiguracion/categoria/opciones-categoria-popover/opciones-categoria-popover';
import { NuevaSubcategoriaPopoverPage } from '../../pages/cofiguracion/categoria/nueva-subcategoria-popover/nueva-subcategoria-popover';

@Component({
  selector: 'categoria-gastos',
  templateUrl: 'categoria-gastos.html'
})
export class CategoriaGastosComponent {
  public categorias: Array<CategoriaTransaccion>;

  constructor(public categoriaProvider: CategoriasProvider, public popoverCtrl: PopoverController) {
    console.log('Hello CategoriaGastosComponent Component');
    this.categorias = this.categoriaProvider.obtenerCategorias();
  }

  openOpciones(event, categoria) {
    let popover = this.popoverCtrl.create(OpcionesCategoriaPopoverPage, {categoria: categoria});
    popover.present({ev: event});
  }

  openSubcategoria(event, categoria) {
    console.log("escogiendo categoria", categoria);
    let popover = this.popoverCtrl.create(NuevaSubcategoriaPopoverPage, {categoria: categoria}, {cssClass: 'popover-center'});
    popover.present({ev: event});
  }

}
