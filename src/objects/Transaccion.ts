import { SelectFilterItem } from "./SelectFilterItem";

export class Transaccion {
  public tipo:string;
  public descripcion: string;
  public valor: number;
  public fecha: string;
  public estado: boolean;
  public categoria: SelectFilterItem;
  public cuenta: SelectFilterItem;
  public etiqueta: SelectFilterItem;
  public observacion: string;
  public ubicacion: string;

  static crearTransaccion(tipo:string, descripcion: string, valor: number, fecha: string, estado: boolean, categoria: SelectFilterItem, cuenta: SelectFilterItem, etiqueta: SelectFilterItem, observacion: string, ubicacion: string) {
    let transaccion = new Transaccion();
    transaccion.setTipo(tipo);
    transaccion.setDescripcion(descripcion);
    transaccion.setValor(valor);
    transaccion.setFecha(fecha);
    transaccion.setEstado(estado);
    transaccion.setCategoria(categoria);
    transaccion.setCuenta(cuenta);
    transaccion.setEtiqueta(etiqueta);
    transaccion.setObservacion(observacion);
    transaccion.setUbicacion(ubicacion);
    return transaccion;
  }

  public constructor() { }

  public setTipo(tip:string) {
    this.tipo = tip;
  }

  public getTipo() {
    return this.tipo;
  }

  public setDescripcion(desc: string) {
    this.descripcion = desc
  }

  public getDescripcion() {
    return this.descripcion;
  }

  public setValor(val: number) {
    this.valor = val;
  }
  public getValor() {
    return this.valor;
  }
  public setFecha(fec: string) {
    this.fecha = fec;
  }

  public getFecha() {
    return this.fecha;
  }

  public setEstado(est: boolean) {
    this.estado = est;
  }

  public getEstado() {
    return this.estado;
  }

  public setCategoria(cat: SelectFilterItem) {
    this.categoria = cat;
  }

  public getCategoria() {
    return this.categoria;
  }

  public setCuenta(c: SelectFilterItem) {
    this.cuenta = c;
  }

  public getCuenta() {
    return this.cuenta;
  }

  public setEtiqueta(eti: SelectFilterItem) {
    this.etiqueta = eti;
  }

  public getEtiqueta() {
    return this.etiqueta;
  }

  public setObservacion(obs: string) {
    this.observacion = obs;
  }

  public getObservacion() {
    return this.observacion;
  }

  public setUbicacion(ub: string) {
    this.ubicacion = ub;
  }

  public getUbicacion() {
    return this.ubicacion;
  }
}