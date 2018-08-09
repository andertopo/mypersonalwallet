import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FiltroTransaccionesPage } from './filtro-transacciones';

@NgModule({
  declarations: [
    FiltroTransaccionesPage,
  ],
  imports: [
    IonicPageModule.forChild(FiltroTransaccionesPage),
  ],
})
export class FiltroTransaccionesPageModule {}
