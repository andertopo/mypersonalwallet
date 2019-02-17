import { Component } from '@angular/core';

import { InicioPage } from '../inicio/inicio';
import { ConfiguracionPage } from '../cofiguracion/configuracion';
import { TransaccionesPage } from '../transacciones/transacciones';
import { OtherPage } from '../otherPage/other-page';
import { OtherTransactionsPage } from '../other-transactions/other-transactions';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = InicioPage;
  tab2Root = TransaccionesPage;
  tab3Root = ConfiguracionPage;
  tab4Root = OtherPage;

  constructor() {

  }
}
