export class EstadoTransaccion {
  private nombre:string;
  private icono:string;
  private color:string;

  public constructor() {}

  static crearEstado(nombre:string, icono:string, color:string) {
    let estado = new EstadoTransaccion();
    estado.setNombre(nombre);
    estado.setIcono(icono);
    estado.setColor(color);
    return estado;
  }

  public setNombre(nom:string) {
    this.nombre = nom;
  }

  public getNombre() {
    return this.nombre;
  }

  public setIcono(icon:string) {
    this.icono = icon;
  }

  public getIcono() {
    return this.icono;
  }

  public setColor(col:string) {
    this.color = col;
  }

  public getColor() {
    return this.color;
  }
}
