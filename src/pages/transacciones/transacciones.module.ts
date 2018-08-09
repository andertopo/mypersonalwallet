import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarioFiltroTransaccionesPage } from './calendario-filtro-transacciones/calendario-filtro-transacciones';
import { EstadoTransaccionesPage } from './estado-transacciones/estado-transacciones';
import { FiltroBusquedaPage } from './filtro-busqueda/filtro-busqueda';
import { MultipleSelectFilterPage } from './multiple-select-filter/multiple-select-filter';
import { SearchTransactionsPage } from './search-transactions/search-transactions';
import { TiposTransaccionesPage } from './tipos-transacciones/tipos-transacciones';
import { FiltroTransaccionesPage } from './filtro-transacciones/filtro-transacciones';

@NgModule({
  declarations: [
    CalendarioFiltroTransaccionesPage,
    EstadoTransaccionesPage,
    FiltroBusquedaPage,
    MultipleSelectFilterPage,
    SearchTransactionsPage,
    TiposTransaccionesPage,
    FiltroTransaccionesPage
  ],
  imports: [
    IonicPageModule.forChild(CalendarioFiltroTransaccionesPage),
    IonicPageModule.forChild(EstadoTransaccionesPage),
    IonicPageModule.forChild(FiltroBusquedaPage),
    IonicPageModule.forChild(MultipleSelectFilterPage),
    IonicPageModule.forChild(SearchTransactionsPage),
    IonicPageModule.forChild(TiposTransaccionesPage),
    IonicPageModule.forChild(FiltroTransaccionesPage),
  ]
})
export class TransaccionesPageModule {}
