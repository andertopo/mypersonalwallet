import { Component } from '@angular/core';

/**
 * Generated class for the ConfiguracionGerenciarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'configuracion-gerenciar',
  templateUrl: 'configuracion-gerenciar.html'
})
export class ConfiguracionGerenciarComponent {

  text: string;

  constructor() {
    console.log('Hello ConfiguracionGerenciarComponent Component');
    this.text = 'Hello World';
  }

}
