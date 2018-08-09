import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstadoTransaccionesPage } from './estado-transacciones';

@NgModule({
  declarations: [
    EstadoTransaccionesPage,
  ],
  imports: [
    IonicPageModule.forChild(EstadoTransaccionesPage),
  ],
})
export class EstadoTransaccionesPageModule {}
