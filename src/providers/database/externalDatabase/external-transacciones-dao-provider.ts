import { HttpClient } from '@angular/common/http';
import { Transaccion } from './../../../objects/Transaccion';
import { Injectable } from '@angular/core';
import { EtiquetaProvider } from '../../etiqueta/etiqueta-provider';
import { CuentaProvider } from '../../cuenta/cuenta-provider';
import { CategoriasProvider } from '../../categorias/categorias-provider';
import { TransaccionesProvider } from '../../transacciones/transacciones-provider';

@Injectable()
export class ExternalTransacccionDAOProvider {

  constructor(private http: HttpClient,
    public categoriaProvider: CategoriasProvider, 
    public cuentaProvider:CuentaProvider, 
    public etiquetaProvider:EtiquetaProvider,
    public transaccionesProvider: TransaccionesProvider) { }

  public obtenerTransacciones(fecha: Date) {
    return new Promise((resolve, reject) => {
      console.log("fecha a buscar", fecha.toISOString());
      this.http.get('/remote/transacciones/listar/' + fecha.toISOString()).subscribe(transacciones => {
        console.log("tenemos transacciones!!!", transacciones);
        for(let index in transacciones) {
          let transaccionDb = transacciones[index];
          let date = new Date(transaccionDb.fecha);
          let fecha = date.getFullYear() + "/" + (((date.getMonth() + 1) < 9) ? "0" + (date.getMonth() + 1): (date.getMonth() + 1)) + "/" + date.getDate();
          let transaccion = Transaccion.crearTransaccion('gasto', transaccionDb.descripcion, transaccionDb.valor, fecha, transaccionDb.fijo, transaccionDb.realizado, transaccionDb.repeticion, null, null, null, transaccionDb.observacion, transaccionDb.ubicacion);
          console.log("tran creada", transaccion);
          for(let index in this.categoriaProvider.categorias) {
            if(this.categoriaProvider.categorias[index].id == transaccionDb.categoria_id) {
              console.log(this.categoriaProvider.categorias[index].id, this.categoriaProvider.categorias[index].itemGui);
              transaccion.categoria = this.categoriaProvider.categorias[index].itemGui;
              break;
            }
          }
          for(let index in this.cuentaProvider.cuentas) {
            console.log(this.cuentaProvider.cuentas[index].id, this.cuentaProvider.cuentas[index].itemGui);
            if(this.cuentaProvider.cuentas[index].id == transaccionDb.cuenta_id) {
              transaccion.cuenta = this.cuentaProvider.cuentas[index].itemGui;
              break;
            }
          }
          this.transaccionesProvider.transacciones.push(transaccion);
        }
        resolve("ok");
      }, err => {
        console.log("error en transacciones", err);
        reject(err);
      });
    });
  }

  public crearTransaccion(transaccion: Transaccion) {
    return new Promise((resolve, reject) => {
      this.http.post('/remote/transacciones', transaccion).subscribe(transaccion_id => {
        console.log("llegando de http", transaccion_id);
        transaccion.id_transaccion = parseInt(transaccion_id.toString());
        resolve(transaccion);
      }, err => {
        reject(err);
      });
    });
  }
}