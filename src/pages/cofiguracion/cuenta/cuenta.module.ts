import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CuentaPage } from './cuenta';
import { CuentaDetallesPage } from './cuenta-detalles/cuenta-detalles';
import { CuentaPopoverOpciones } from './cuenta-popover-opciones/cuenta-popover-opciones';
import { CuentaBalancesPage } from './cuenta-balances/cuenta-balances';
import { CuentaNuevaPage } from './cuenta-nueva/cuenta-nueva';
import { TipoCuentaOpcionesPage } from './cuenta-nueva/tipo-cuenta-opciones/tipo-cuenta-opciones';
import { ColoresCuentaPopoverPage } from './cuenta-nueva/colores-cuenta-popover/colores-cuenta-popover';
import { SimpleSelectCuentaPopoverPage } from './simple-select-cuenta-popover/simple-select-cuenta-popover';

@NgModule({
  declarations: [
    CuentaPage,
    CuentaDetallesPage,
    CuentaBalancesPage,
    CuentaNuevaPage,

    CuentaPopoverOpciones,
    TipoCuentaOpcionesPage,
    ColoresCuentaPopoverPage,
    SimpleSelectCuentaPopoverPage
  ],
  imports: [
    IonicPageModule.forChild(CuentaPage),
    IonicPageModule.forChild(CuentaDetallesPage),
    IonicPageModule.forChild(CuentaBalancesPage),
    IonicPageModule.forChild(CuentaNuevaPage),
    
    IonicPageModule.forChild(CuentaPopoverOpciones),
    IonicPageModule.forChild(TipoCuentaOpcionesPage),
    IonicPageModule.forChild(ColoresCuentaPopoverPage),
    IonicPageModule.forChild(SimpleSelectCuentaPopoverPage)
  ]
})
export class CuentaPageModule {}
