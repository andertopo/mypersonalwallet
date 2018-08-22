import { Injectable } from '@angular/core';
import { CuentaTransaccion } from '../../objects/CuentaTransaccion';

@Injectable()
export class CuentaProvider {
  public cuentas:Array<CuentaTransaccion>;
  public currentDate:Date;

  constructor() {
    this.cuentas = new Array();
    this.currentDate = new Date();
  }

  public generarCuentas() {
    let saldoAnual = 0;
    for(let i=0; i<5; i++) {
      let arrayCuenta = new Array();
      for(let i=0; i<12; i++) {
        let randomIngresos = Math.floor((Math.random() * 10) + 1);
        let randomGastos = Math.floor((Math.random() * 10) + 1);
        let ingresos = randomIngresos * 10000;
        let gastos = randomGastos * 10000;
        let saldo = ingresos - gastos;
        let saldoObj = {
          fecha: "2018/" + (i + 1),
          ingresos: {
            valor: ingresos,
            cantidad: 3
          },
          gastos: {
            valor: gastos,
            cantidad: 4
          },
          transacciones: {
            valor: 20000,
            cantidad: 4
          },
          saldo: saldo
        }
        saldoAnual += saldo;
        arrayCuenta.push(saldoObj);
      }
      let cuenta = CuentaTransaccion.crearCuenta('billetera', 'card', 'primary', false, 'banco', arrayCuenta[this.currentDate.getMonth()].ingresos.valor, arrayCuenta[this.currentDate.getMonth()].gastos.valor, arrayCuenta[this.currentDate.getMonth()].transacciones.valor, arrayCuenta, saldoAnual);
      this.cuentas.push(cuenta);
    }
  }

  public obtenerCuentas() {
    this.generarCuentas();
    return this.cuentas;
  }

  public crearCuenta(cuenta:CuentaTransaccion) {
    return true;
  }

}
