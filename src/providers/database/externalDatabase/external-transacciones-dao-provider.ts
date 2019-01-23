import { HttpClient } from '@angular/common/http';
import { Transaccion } from './../../../objects/Transaccion';
import { Injectable } from '@angular/core';

@Injectable()
export class ExternalTransacccionDAOProvider {

  constructor(private http: HttpClient) { }

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