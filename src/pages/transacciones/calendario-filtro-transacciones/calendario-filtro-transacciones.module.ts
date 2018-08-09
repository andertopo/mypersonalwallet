import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarioFiltroTransaccionesPage } from './calendario-filtro-transacciones';

@NgModule({
  declarations: [
    CalendarioFiltroTransaccionesPage,
  ],
  imports: [
    IonicPageModule.forChild(CalendarioFiltroTransaccionesPage),
  ],
})
export class CalendarioFiltroTransaccionesPageModule {}
