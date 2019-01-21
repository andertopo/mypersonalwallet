import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EtiquetaPage } from './etiqueta';
import { SimpleSelectEtiquetaPopoverPage } from './simple-select-etiqueta-popover/simple-select-etiqueta-popover';

@NgModule({
  declarations: [
    EtiquetaPage,
    SimpleSelectEtiquetaPopoverPage
  ],
  imports: [
    IonicPageModule.forChild(EtiquetaPage),
    IonicPageModule.forChild(SimpleSelectEtiquetaPopoverPage),
  ],
})
export class EtiquetaPageModule {}
