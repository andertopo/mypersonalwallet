//import { DatabaseProvider } from './../database/database';
import { Injectable } from '@angular/core';
import { Transaccion } from '../../objects/Transaccion';
import { SelectFilterItem } from '../../objects/SelectFilterItem';
import { EstadoTransaccion } from '../../objects/EstadoTransaccion';

@Injectable()
export class TransaccionesProvider {
  public transacciones:Array<any>;

  constructor(/*public databaseProvider: DatabaseProvider*/) {
    console.log('Hello TransaccionesProvider Provider');
    this.transacciones = new Array();
  }

  public generarTransacciones() {
    this.transacciones.push(Transaccion.crearTransaccion('gasto', 'mecato', 1700, '2019/01/01', false, false, false, SelectFilterItem.crearSelectFilterItem('alimentación', 'restaurant', 'secondary', false), SelectFilterItem.crearSelectFilterItem('billetera', 'cash', 'primary', false), SelectFilterItem.crearSelectFilterItem('mecato', 'restaurant', 'secondary', false), '', ''));
    this.transacciones.push(Transaccion.crearTransaccion('gasto', 'transporte bus', 2000, "2019/01/01", true, false, false, SelectFilterItem.crearSelectFilterItem('transporte', 'restaurant', 'secondary', false), SelectFilterItem.crearSelectFilterItem('bolsillo', 'cash', 'primary', false), SelectFilterItem.crearSelectFilterItem('mecato', 'restaurant', 'secondary', false), '', ''));
    this.transacciones.push(Transaccion.crearTransaccion('gasto', 'transporte bus', 1700, "2019/01/02", true, false, false, SelectFilterItem.crearSelectFilterItem('transporte', 'restaurant', 'secondary', false), SelectFilterItem.crearSelectFilterItem('billetera', 'cash', 'primary', false), SelectFilterItem.crearSelectFilterItem('mecato', 'restaurant', 'secondary', false), '', ''));
    this.transacciones.push(Transaccion.crearTransaccion('ingreso', 'freelance', 50000, "2019/01/03", false, false, false, SelectFilterItem.crearSelectFilterItem('trabajo', 'restaurant', 'secondary', false), SelectFilterItem.crearSelectFilterItem('billetera', 'cash', 'primary', false), SelectFilterItem.crearSelectFilterItem('mecato', 'restaurant', 'secondary', false), '', ''));
    this.transacciones.push(Transaccion.crearTransaccion('gasto', 'parqueadero moto', 5400, "2019/01/04", true, false, false, SelectFilterItem.crearSelectFilterItem('moto', 'restaurant', 'secondary', false), SelectFilterItem.crearSelectFilterItem('bolsillo', 'cash', 'primary', false), SelectFilterItem.crearSelectFilterItem('mecato', 'restaurant', 'secondary', false), '', ''));
    this.transacciones.push(Transaccion.crearTransaccion('gasto', 'mantenimiento', 20000, "2019/01/04", true, false, false, SelectFilterItem.crearSelectFilterItem('moto', 'restaurant', 'secondary', false), SelectFilterItem.crearSelectFilterItem('billetera', 'cash', 'primary', false), SelectFilterItem.crearSelectFilterItem('mecato', 'restaurant', 'secondary', false), '', ''));
    this.transacciones.push(Transaccion.crearTransaccion('ingreso', 'salario', 2100000, "2019/01/04", true, false, false, SelectFilterItem.crearSelectFilterItem('salario', 'restaurant', 'secondary', false), SelectFilterItem.crearSelectFilterItem('billetera', 'cash', 'primary', false), SelectFilterItem.crearSelectFilterItem('mecato', 'restaurant', 'secondary', false), '', ''));
    this.transacciones.push(Transaccion.crearTransaccion('gasto', 'mecato', 1700, "2019/01/05", true, false, false, SelectFilterItem.crearSelectFilterItem('alimentación', 'restaurant', 'secondary', false), SelectFilterItem.crearSelectFilterItem('bolsillo', 'cash', 'primary', false), SelectFilterItem.crearSelectFilterItem('mecato', 'restaurant', 'secondary', false), '', ''));
    this.transacciones.push(Transaccion.crearTransaccion('gasto', 'arriendo', 300000, "2019/01/05", false, false, false, SelectFilterItem.crearSelectFilterItem('arriendo', 'restaurant', 'secondary', false), SelectFilterItem.crearSelectFilterItem('billetera', 'cash', 'primary', false), SelectFilterItem.crearSelectFilterItem('mecato', 'restaurant', 'secondary', false), '', ''));
    this.transacciones.push(Transaccion.crearTransaccion('gasto', 'mecato', 3000, "2019/01/06", true, false, false, SelectFilterItem.crearSelectFilterItem('alimentación', 'restaurant', 'secondary', false), SelectFilterItem.crearSelectFilterItem('billetera', 'cash', 'primary', false), SelectFilterItem.crearSelectFilterItem('mecato', 'restaurant', 'secondary', false), '', ''));
  }

  public ordenarTransacciones() {
    console.log("transacciones antes de ordenar", this.transacciones);
    let transaccionesOrdenadas = Array();
    let fechaInicio = new Date(2019, 1, 0);//fecha + 1
    let lastDay = new Date(2018, 12, 0).getDate();
    for (let j = 1; j <= lastDay; j++) {
      let fechaAux = fechaInicio.getFullYear() + '/';
      let month = (fechaInicio.getMonth() < 10) ? ("0" + (fechaInicio.getMonth() + 1)) : (fechaInicio.getMonth() + 1);
      let date = (fechaInicio.getDate() < 9) ? "0" + fechaInicio.getDate() : fechaInicio.getDate();
      fechaAux += month + "/" + date;
      for (let i = 0; i < this.transacciones.length; i++) {
        console.log("fec aux: ", fechaAux + " -- fec ", this.transacciones[i].fecha);
        if (this.transacciones[i].fecha == fechaAux) {
          let indexTransaccion = transaccionesOrdenadas.findIndex(v => v.fecha === fechaAux);
          if (indexTransaccion > -1) {
            transaccionesOrdenadas[indexTransaccion].arrayTransacciones.push(this.transacciones[i]);
          } else {
            let tra = this.transacciones[i];
            transaccionesOrdenadas.push({
              fecha: fechaAux,
              arrayTransacciones: [tra]
            });
          }
        }
      }
      fechaInicio.setDate(fechaInicio.getDate() - 1);
    }
    console.log("al final", transaccionesOrdenadas);
    this.transacciones = transaccionesOrdenadas;
  }

  public obtenerTransacciones() {
    this.generarTransacciones();
    this.ordenarTransacciones();
    return this.transacciones;
  }

  filtrar(estadoTransaccion:EstadoTransaccion, categoriasTransaccion:Array<SelectFilterItem>, cuentasTransaccion:Array<SelectFilterItem>, etiquetasTransaccion:Array<SelectFilterItem>) {
    let transaccionesFiltradas = this.transacciones;
    for(let i=0; i<this.transacciones.length; i++) {
      let transaccionesFilter = this.transacciones[i].arrayTransacciones;
      if(estadoTransaccion.getNombre() != '') {
        console.log("vamos a filtrar el estado");
        transaccionesFilter = transaccionesFilter.filter(transaccion => {
          console.log("estado:" + estadoTransaccion.getNombre(), " transaccion: ", transaccion);
          console.log((estadoTransaccion.getNombre() == 'realizados' && transaccion.estado == true));
          return ((estadoTransaccion.getNombre() == 'realizados' && transaccion.estado == true) ||
          (estadoTransaccion.getNombre() == 'pendientes' && transaccion.estado == false))
        });
      }
      console.log("despues de filtrar estado", transaccionesFilter);
      
      if(categoriasTransaccion.length > 0) {
        console.log("vamos a filtrar la categoria");
        let categorias = categoriasTransaccion.map(categoria => categoria.getNombre());
        transaccionesFilter = transaccionesFilter.filter(transaccion => {
          let response = false
          for(let i=0; i<categorias.length; i++) {
            console.log("categoria " + transaccion.categoria.nombre + " -- " + categorias[i]);
            if(transaccion.categoria.nombre == categorias[i]) {
              response = true;
              break;
            }
          }
          return response;
        });
      }
      console.log("despues de filtrar categoria", transaccionesFilter);

      if(cuentasTransaccion.length > 0) {
        console.log("vamos a filtrar la cuenta");
        let cuentas = cuentasTransaccion.map(cuenta => cuenta.getNombre());
        transaccionesFilter = transaccionesFilter.filter(transaccion => {
          let response = false
          for(let i=0; i<cuentas.length; i++) {
            if(transaccion.cuenta.nombre == cuentas[i]) {
              response = true;
              break;
            }
          }
          return response;
        });
      }

      if(etiquetasTransaccion.length > 0) {
        console.log("vamos a filtrar la etiqueta");
        let etiquetas = categoriasTransaccion.map(etiqueta => etiqueta.getNombre());
        transaccionesFilter = transaccionesFilter.filter(transaccion => {
          let response = false
          for(let i=0; i<etiquetas.length; i++) {
            if(transaccion.etiqueta.nombre == etiquetas[i]) {
              response = true;
              break;
            }
          }
          return response;
        });
      } 
      console.log("transacciones filtradas:", transaccionesFilter);
      transaccionesFiltradas[i].arrayTransacciones = transaccionesFilter;
    }
    return transaccionesFiltradas;
  }

  public guardarTransaccion(transaccion:Transaccion, isEdit: boolean) {
    if(isEdit) {
      return this.editarTransaccion(transaccion);
    } else {
      return this.crearTransaccion(transaccion);
    }
  }

  public crearTransaccion(transaccion:Transaccion) {
    return new Promise((resolve, reject) => {
      //this.databaseProvider.crearTransaccion(transaccion).then(transaccionCreada => {
        //this.transacciones.push(transaccion);
        resolve(transaccion);
      //}).catch(err => {
        //reject(err);
      //});
    });
  }

  public editarTransaccion(transaccion:Transaccion) {
    return new Promise((resolve, reject) => {});
  }

}
