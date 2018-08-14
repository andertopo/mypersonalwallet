import { SelectFilterItem } from "./SelectFilterItem";

export class CuentaTransaccion {
  public itemGui:SelectFilterItem;
  public tipo:string;
  public ingresos:number;
  public gastos:number;
  public transacciones:number;
  public saldosMes:Array<any>;
  public saldoTotal:number;

  static crearCuenta(nombre:string, icono:string, color:string, selected:boolean, tipo:string, ingresos:number, gastos:number, transacciones:number, saldosMes:Array<any>, saldoTotal) {
    let cuenta = new CuentaTransaccion();
    cuenta.itemGui = SelectFilterItem.crearSelectFilterItem(nombre, icono, color, selected);
    cuenta.tipo = tipo;
    cuenta.ingresos = ingresos;
    cuenta.gastos = gastos
    cuenta.transacciones = transacciones;
    cuenta.saldosMes = saldosMes;
    cuenta.saldoTotal = saldoTotal;
    console.log(cuenta);
    return cuenta;
  }

  public constructor() {
    this.itemGui = new SelectFilterItem();
  }
}