export class CategoriaTransaccion {
  private nombre:string;
  private icono:string;
  private color:string;
  private selected:boolean;

  static crearCategoria(nombre:string, icono:string, color:string, selected:boolean) {
    let categoria = new CategoriaTransaccion();
    categoria.setNombre(nombre);
    categoria.setIcono(icono);
    categoria.setColor(color);
    categoria.setSelected(selected);
    console.log(categoria);
    return categoria;
  }

  public constructor() {}

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

  public setSelected(selected:boolean) {
    this.selected = selected;
  }

  public isSelected() {
    return this.selected;
  }
}