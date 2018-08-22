import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CuentaPage } from '../../pages/cofiguracion/cuenta/cuenta';
import { EtiquetaPage } from '../../pages/cofiguracion/etiqueta/etiqueta';
import { CategoriaPage } from '../../pages/cofiguracion/categoria/categoria';

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

  goEtiqueta() {
    console.log("nos vamos a etiquetas");
    this.navCtrl.push(EtiquetaPage);
  }

  goCategoria() {
    console.log("nos vamos a categorias");
    this.navCtrl.push(CategoriaPage);
  }

}
