import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, PopoverController } from 'ionic-angular';
import { EstadoTransaccionesPage } from '../estado-transacciones/estado-transacciones';
import { EstadoTransaccion } from '../../../objects/EstadoTransaccion';
import { MultipleSelectFilterPage } from '../multiple-select-filter/multiple-select-filter';
import { SelectFilterItem } from '../../../objects/SelectFilterItem';

@IonicPage()
@Component({
  selector: 'page-filtro-transacciones',
  templateUrl: 'filtro-transacciones.html',
})
export class FiltroTransaccionesPage {
  public estadoTransaccion:EstadoTransaccion;
  public categoriasTransaccion:Array<SelectFilterItem>;
  public cuentasTransaccion:Array<SelectFilterItem>;
  public etiquetasTransaccion:Array<SelectFilterItem>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public popoverCtrl: PopoverController) {
    this.estadoTransaccion = EstadoTransaccion.crearEstado('todas', 'globe', '');
    this.categoriasTransaccion = new Array();
    this.cuentasTransaccion = new Array();
    this.etiquetasTransaccion = new Array();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FiltroTransaccionesPage');
  }

  close() {
    this.navCtrl.pop().then(() => {
      let filtrosTexto:string = "";
      let arrayFiltros:Array<any> = new Array();
      if(this.estadoTransaccion.getNombre() != '') {
        arrayFiltros.push(this.estadoTransaccion.getNombre());
      }
      arrayFiltros = arrayFiltros.concat(this.categoriasTransaccion.map(categoria => categoria.getNombre()));
      arrayFiltros = arrayFiltros.concat(this.cuentasTransaccion.map(cuenta => cuenta.getNombre()));
      arrayFiltros = arrayFiltros.concat(this.etiquetasTransaccion.map(etiqueta => etiqueta.getNombre()));
      console.log("ARRAY DE FILTROS", arrayFiltros);
      filtrosTexto = arrayFiltros.join(', ');
      let objectFilter = {
        textToShow: filtrosTexto,
        estado: this.estadoTransaccion,
        categorias: this.categoriasTransaccion,
        cuentas: this.cuentasTransaccion,
        etiquetas: this.etiquetasTransaccion
      }
      this.events.publish('get-filters', objectFilter);
    });
  }

  setPopoverData(opcion:string, data:any) {
    if(opcion == 'estado') {
      this.estadoTransaccion = data.estado;
    } else if(opcion == 'categoria') {
      this.categoriasTransaccion = data.selectedItems;
    } else if(opcion == 'cuenta') {
      this.cuentasTransaccion = data.selectedItems;
    } else if(opcion == 'etiqueta') {
      this.etiquetasTransaccion = data.selectedItems;
    }
  }

  openPopover(opcion: string) {
    let pagina = (opcion == 'estado') ? EstadoTransaccionesPage : MultipleSelectFilterPage;
    let popover = this.popoverCtrl.create(pagina, {'type': opcion}, { cssClass: 'popover-center' });
    popover.present();
    popover.onDidDismiss(data => {
      console.log(data);
      if(data) {
        this.setPopoverData(opcion, data);
      }
    });
  }
}
