import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { CategoriasProvider } from '../../providers/categorias/categorias-provider';
import { CategoriaTransaccion } from '../../objects/CategoriaTransaccion';
import { PopoverController, NavParams } from 'ionic-angular';
import { OpcionesCategoriaPopoverPage } from '../../pages/cofiguracion/categoria/opciones-categoria-popover/opciones-categoria-popover';
import { GestionSubcategoriaPopoverPage } from '../../pages/cofiguracion/categoria/gestion-subcategoria-popover/gestion-subcategoria-popover';

@Component({
  selector: 'categoria-transacciones',
  templateUrl: 'categoria-transacciones.html'
})
export class CategoriaTransaccionesComponent implements OnInit {
  @Input() tipo: string;
  @Input() isSelect: boolean;
  @Output() public categoriaSeleccionadaEvent = new EventEmitter();
  public categorias: Array<CategoriaTransaccion>;
  
  constructor(public categoriaProvider: CategoriasProvider, public popoverCtrl: PopoverController, public navParams: NavParams) {
    console.log('Hello CategoriaTransaccionesComponent Component', this.tipo, this.isSelect);
    this.categorias = new Array();
  }
  
  ngOnInit() {
    console.log('ionViewDidLoad CategoriaTransaccionesComponent Component', this.tipo, this.isSelect);
    this.obtenerCategorias();
  }

  public obtenerCategorias() {
    this.categorias = new Array();
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

  getCategoriasFilter(categoriaBuscada: string) {
    this.obtenerCategorias();

    if (categoriaBuscada && categoriaBuscada.trim() != '') {
      this.categorias = this.categorias.filter((categoria) => {
        return (categoria.itemGui.nombre.toLowerCase().indexOf(categoriaBuscada.toLowerCase()) > -1);
      })
    }
  }

  seleccionar(categoria: CategoriaTransaccion) {
    console.log("seleccionando", this.isSelect);
    if(this.isSelect) {
      this.categoriaSeleccionadaEvent.emit(categoria);
    }
  }
}
