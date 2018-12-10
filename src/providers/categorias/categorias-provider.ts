import { Injectable } from '@angular/core';
import { CategoriaTransaccion } from '../../objects/CategoriaTransaccion';

@Injectable()
export class CategoriasProvider {
  public categorias: Array<CategoriaTransaccion>;

  constructor() {
    this.categorias = new Array();
  }

  public generarCategorias() {
    this.categorias.push(CategoriaTransaccion.crearCategoria('moto', 'car', 'warning', false, 'gasto'));
    this.categorias.push(CategoriaTransaccion.crearCategoria('alimentacion', 'restaurant', 'primary', false, 'gasto'));
    this.categorias.push(CategoriaTransaccion.crearCategoria('arriendo', 'home', 'secondary', false, 'gasto'));
  }

  public obtenerCategorias() {
    return this.categorias;
  }

  public crearCategoria(categoria:CategoriaTransaccion) {
    return true;
  }

  public moverTransacciones(categoriaOrigen:CategoriaTransaccion, categoriaDestino:CategoriaTransaccion) {
    return true;
  }

}
