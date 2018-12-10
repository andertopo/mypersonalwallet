import { Injectable } from '@angular/core';
import { CuentaTransaccion } from '../../objects/CuentaTransaccion';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class CuentaProvider {
  public cuentas:Array<CuentaTransaccion>;
  public currentDate:Date;

  constructor(public sqlite: SQLite) {
    this.cuentas = new Array();
    this.currentDate = new Date();
  }

  public obtenerCuentas() {
    return this.cuentas;
  }

  public guardarCuenta(cuenta:CuentaTransaccion, isEdit: boolean) {
    if(!isEdit) {
      return this.crearCuenta(cuenta);
    } else {
      return this.editarCuenta(cuenta);
    } 
  }

  public crearCuenta(cuenta:CuentaTransaccion) {
    return new Promise((resolve, reject) => {
      this.sqlite.create({
        name: 'pesonalWallet.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        console.log("se creo la base de datos");
        db.executeSql('INSERT INTO tbl_cuentas (nombre, icono, color, tipo, saldo_inicial, saldo_total) VALUES(?,?,?,?,?,?)', [cuenta.itemGui.nombre, cuenta.itemGui.icono, cuenta.itemGui.color, cuenta.tipo, cuenta.saldoInicial, cuenta.saldoTotal]).then(resp => {
          cuenta.id = resp.insertId;
          this.cuentas.push(cuenta);
          resolve(resp);
          console.log("se insertó el registro", resp);
        }).catch(err => {
          console.log("no se insertó el registro en BD", err)
          reject("no se insertó el registro en BD")
        });
      }).catch(e => {
        console.log(e);
        reject('no abre la base de datos');
      });
    });
  }

  public editarCuenta(cuenta:CuentaTransaccion) {
    cuenta.saldoTotal = cuenta.saldoTotal + cuenta.saldoInicial;
    //cuenta.saldoInicial = 0;
    console.log("saldo total", cuenta.saldoTotal, cuenta.saldoInicial);
    return new Promise((resolve, reject) => {
      this.sqlite.create({
        name: 'pesonalWallet.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        console.log("se creo la base de datos");
        db.executeSql('UPDATE tbl_cuentas SET nombre = ?, icono = ?, color = ?, tipo = ?, saldo_inicial = ?, saldo_total = ? WHERE id_cuenta = ?', [cuenta.itemGui.nombre, cuenta.itemGui.icono, cuenta.itemGui.color, cuenta.tipo, cuenta.saldoInicial, cuenta.saldoTotal, cuenta.id]).then(resp => {
          cuenta.id = resp.insertId;
          //this.cuentas.push(cuenta);
          resolve(resp);
          console.log("se actualizó el registro", resp);
        }).catch(err => {
          console.log("no se actualizó el registro en BD", err)
          reject("no se acualizó el registro en BD")
        });
      }).catch(e => {
        console.log(e);
        reject('no abre la base de datos');
      });
    });
  }

}
