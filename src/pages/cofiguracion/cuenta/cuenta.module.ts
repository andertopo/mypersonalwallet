import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CuentaPage } from './cuenta';
import { CuentaDetallesPage } from './cuenta-detalles/cuenta-detalles';
import { CuentaPopoverOpciones } from './cuenta-popover-opciones/cuenta-popover-opciones';
import { CuentaBalancesPage } from './cuenta-balances/cuenta-balances';

@NgModule({
  declarations: [
    CuentaPage,
    CuentaDetallesPage,
    CuentaBalancesPage,

    CuentaPopoverOpciones,
  ],
  imports: [
    IonicPageModule.forChild(CuentaPage),
    IonicPageModule.forChild(CuentaDetallesPage),
    IonicPageModule.forChild(CuentaBalancesPage),
    
    IonicPageModule.forChild(CuentaPopoverOpciones),
  ]
})
export class CuentaPageModule {}
