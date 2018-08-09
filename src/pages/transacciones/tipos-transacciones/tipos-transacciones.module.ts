import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TiposTransaccionesPage } from './tipos-transacciones';

@NgModule({
  declarations: [
    TiposTransaccionesPage,
  ],
  imports: [
    IonicPageModule.forChild(TiposTransaccionesPage),
  ],
})
export class TiposTransaccionesPageModule {}
