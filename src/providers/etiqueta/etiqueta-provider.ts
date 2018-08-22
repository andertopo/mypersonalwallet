import { Injectable } from '@angular/core';
import { SelectFilterItem } from '../../objects/SelectFilterItem';

@Injectable()
export class EtiquetaProvider {
  public etiquetas:Array<SelectFilterItem>;

  constructor() {
    console.log('Hello EtiquetaProvider Provider');
    this.etiquetas = new Array();
  }

  private generarEtiquetas() {
    this.etiquetas.push(SelectFilterItem.crearSelectFilterItem('desayuno', 'tag', '', false));
    this.etiquetas.push(SelectFilterItem.crearSelectFilterItem('viaje', 'tag', '', false));
    this.etiquetas.push(SelectFilterItem.crearSelectFilterItem('otros', 'tag', '', false));
  }

  public obtenerEtiquetas() {
    this.generarEtiquetas();
    return this.etiquetas;
  }

  public crearEtiqueta(etiqueta:SelectFilterItem) {
    return true;
  }

  public editarEtiqueta(etiqueta:SelectFilterItem) {
    return true;
  }

  public borrarEtiqueta(etiqueta:SelectFilterItem) {
    return true;
  }

}
