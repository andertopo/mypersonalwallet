import { SelectFilterItem } from "./SelectFilterItem";

export class Transaccion {
  public id_transaccion: number;
  public tipo:string;
  public descripcion: string;
  public valor: number;
  public fecha: string;
  public fijo: boolean;
  public realizado: boolean;
  public repeticion: boolean;
  public categoria: SelectFilterItem;
  public cuenta: SelectFilterItem;
  public etiqueta: SelectFilterItem;
  public observacion: string;
  public ubicacion: string;

  static crearTransaccion(tipo:string, descripcion: string, valor: number, fecha: string, fijo: boolean, realizado: boolean, repeticion: boolean, categoria: SelectFilterItem, cuenta: SelectFilterItem, etiqueta: SelectFilterItem, observacion: string, ubicacion: string) {
    let transaccion = new Transaccion();
    transaccion.tipo = tipo;
    transaccion.descripcion = descripcion;
    transaccion.valor = valor;
    transaccion.fecha = fecha;
    transaccion.fijo = fijo;
    transaccion.repeticion = repeticion
    transaccion.categoria = categoria;
    transaccion.cuenta = cuenta;
    transaccion.etiqueta = etiqueta;
    transaccion.observacion = observacion;
    transaccion.ubicacion = ubicacion;
    return transaccion;
  }

  public constructor() { }
}