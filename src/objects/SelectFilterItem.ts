export class SelectFilterItem {
  public id:number;
  public nombre:string;
  public icono:string;
  public color:string;
  public selected:boolean;

  public constructor() {}

  static crearSelectFilterItem(nombre:string, icono:string, color:string, selected:boolean) {
    let selectFilterItem = new SelectFilterItem();
    selectFilterItem.setNombre(nombre);
    selectFilterItem.setIcono(icono);
    selectFilterItem.setColor(color);
    selectFilterItem.setSelected(selected);
    return selectFilterItem;
  }

  public setId(id:number) {
    this.id = id;
  }

  public getId() {
    return this.id;
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
