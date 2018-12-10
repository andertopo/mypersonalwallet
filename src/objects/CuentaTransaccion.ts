import { SelectFilterItem } from "./SelectFilterItem";

export class CuentaTransaccion {
  public id:number;
  public itemGui:SelectFilterItem;
  public tipo:string;
  public ingresos:number;
  public gastos:number;
  public transacciones:number;
  public saldosMes:Array<any>;
  public saldoInicial:number;
  public saldoTotal:number;

  static crearCuenta(id:number, nombre:string, icono:string, color:string, selected:boolean, tipo:string, ingresos:number, gastos:number, transacciones:number, saldosMes:Array<any>, saldoTotal) {
    let cuenta = new CuentaTransaccion();
    cuenta.id = id;
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
    this.gastos = 0;
    this.ingresos = 0;
    this.transacciones = 0;
    this.saldoInicial = 0;
    this.saldoTotal = 0;
  }
}