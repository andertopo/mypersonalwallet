import { Component } from '@angular/core';

import { InicioPage } from '../inicio/inicio';
import { ConfiguracionPage } from '../cofiguracion/configuracion';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = InicioPage;
  tab2Root = ConfiguracionPage;

  constructor() {

  }
}
