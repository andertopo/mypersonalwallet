import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FiltroBusquedaPage } from './filtro-busqueda';

@NgModule({
  declarations: [
    FiltroBusquedaPage,
  ],
  imports: [
    IonicPageModule.forChild(FiltroBusquedaPage),
  ],
})
export class FiltroBusquedaPageModule {}
