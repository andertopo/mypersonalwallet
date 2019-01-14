import { Component } from "@angular/core";
import { NavController, NavParams, PopoverController, Events } from 'ionic-angular';
import { SearchTransactionsPage } from './search-transactions/search-transactions';
import { TiposTransaccionesPage } from "./tipos-transacciones/tipos-transacciones";
import { FiltroTransaccionesPage } from "./filtro-transacciones/filtro-transacciones";
import { Transaccion } from "../../objects/Transaccion";
import { CalendarioFiltroTransaccionesPage } from "./calendario-filtro-transacciones/calendario-filtro-transacciones";
import { TransaccionesProvider } from "../../providers/transacciones/transacciones-provider";
import { RegistrarPage } from "./registrar/registrar";

@Component({
  selector: 'page-transacciones',
  templateUrl: 'transacciones.html'
})
export class TransaccionesPage {
  public isFilterVisible: boolean;
  public colorHeader: string;
  public tipoTransaccion: string;
  public filtros: string;
  public currentDate: Date;

  public transacciones: Array<Transaccion>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, private events: Events, public transaccionProvider:TransaccionesProvider) {
    this.isFilterVisible = false;
    this.colorHeader = 'azulPrimario';
    this.tipoTransaccion = 'Transacciones';
    this.filtros = 'Hola';
    this.currentDate = new Date();
    this.transacciones = new Array();
  }

  goSearch() {
    this.navCtrl.push(SearchTransactionsPage);
  }

  goFiltroFecha() {
    let popover = this.popoverCtrl.create(CalendarioFiltroTransaccionesPage, {}, { cssClass: 'popover-center' });
    popover.present();
    popover.onDidDismiss(data => {
      if(data) {
        this.currentDate = data.date;
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad transacciones');
    if (this.navParams.get('type')) {
      this.tipoTransaccion = this.navParams.get('type').transaccion;
      this.cambiarTipoTransaccion(this.navParams.get('type'));
    }
    this.transacciones = this.transaccionProvider.obtenerTransacciones();
    console.log(this.transacciones);
  }

  public setMonth(month:number) {
    console.log(month);
    this.currentDate.setMonth(this.currentDate.getMonth() + month);
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate());
    console.log(this.currentDate);
  }

  public setearFiltro(filtro) {
    this.filtros = filtro;
    this.toggleFilter(true);
  }

  toggleFilter(open) {
    let top = (open) ? '149px' : '113px';
    let scrollContents = document.getElementsByClassName('scroll-content') as HTMLCollectionOf<HTMLElement>;
    if (scrollContents.length > 0) {
      scrollContents[1].style.marginTop = top;
    }
    this.isFilterVisible = open;
  }

  openFilters() {
    this.events.subscribe('get-filters', (filtros) => {
      console.log(filtros);
      this.transacciones = this.transaccionProvider.filtrar(filtros.estado, filtros.categorias, filtros.cuentas, filtros.etiquetas);
      this.setearFiltro(filtros.textToShow);
      this.events.unsubscribe('get-filters'); // unsubscribe this event
    });
    this.navCtrl.push(FiltroTransaccionesPage);
  }

  mostrarTiposTransacciones() {
    let popover = this.popoverCtrl.create(TiposTransaccionesPage, {}, { cssClass: 'popover-busqueda' });
    popover.present();
    popover.onDidDismiss(data => {
      if (data) {
        this.tipoTransaccion = data.transaccion;
        this.cambiarTipoTransaccion(data);
      }
    });
  }

  cambiarTipoTransaccion(data: any) {
    if (data.transaccion == 'ingresos') {
      this.colorHeader = 'secondary';
    } else if (data.transaccion == 'gastos') {
      this.colorHeader = 'danger';
    } else {
      this.colorHeader = 'azulPrimario';
    }
  }

  public registrar(tipoTransaccion: string) {
    console.log("vamos a registrar un(a)", tipoTransaccion);
    this.navCtrl.push(RegistrarPage, {tipoTransaccion: tipoTransaccion});
  }
}