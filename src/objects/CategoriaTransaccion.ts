import { SelectFilterItem } from "./SelectFilterItem";

export class CategoriaTransaccion {
  public id:number;
  public itemGui:SelectFilterItem;
  public tipo:string; //si es ingreso o gasto

  static crearCategoria(nombre:string, icono:string, color:string, selected:boolean) {
    let categoria = new CategoriaTransaccion();
    categoria.itemGui.setNombre(nombre);
    categoria.itemGui.setIcono(icono);
    categoria.itemGui.setColor(color);
    categoria.itemGui.setSelected(selected);
    console.log(categoria);
    categoria.tipo = 'gasto';
    return categoria;
  }

  public constructor() {
    this.itemGui = new SelectFilterItem();
  }
}