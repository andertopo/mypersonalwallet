import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CuentaPage } from '../../pages/cofiguracion/cuenta/cuenta';

@Component({
  selector: 'configuracion-gerenciar',
  templateUrl: 'configuracion-gerenciar.html'
})
export class ConfiguracionGerenciarComponent {

  constructor(public navCtrl: NavController) {
    console.log('Hello ConfiguracionGerenciarComponent Component');
  }

  goCuenta() {
    console.log("nos vamos a cuenta");
    this.navCtrl.push(CuentaPage);
  }

}
