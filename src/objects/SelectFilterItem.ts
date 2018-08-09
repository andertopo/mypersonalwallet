export class SelectFilterItem {
  private nombre:string;
  private icono:string;
  private color:string;
  private selected:boolean;

  public constructor() {}

  static crearSelectFilterItem(nombre:string, icono:string, color:string, selected:boolean) {
    let selectFilterItem = new SelectFilterItem();
    selectFilterItem.setNombre(nombre);
    selectFilterItem.setIcono(icono);
    selectFilterItem.setColor(color);
    selectFilterItem.setSelected(selected);
    return selectFilterItem;
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

  public setSelected(selected:boolean) {
    this.selected = selected;
  }

  public isSelected() {
    return this.selected;
  }
}
