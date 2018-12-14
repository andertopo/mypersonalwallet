import { SelectFilterItem } from "./SelectFilterItem";

export class CategoriaTransaccion {
  public id:number;
  public itemGui:SelectFilterItem;
  public tipo:string; //si es ingreso o gasto
  public padreId:number; //aplica si es una subcategoria
  public subcategorias:Array<CategoriaTransaccion>;

  static crearCategoria(id:number, nombre:string, icono:string, color:string, selected:boolean, tipo:string, padreId:number) {
    let categoria = new CategoriaTransaccion();
    categoria.id = id;
    categoria.itemGui.setNombre(nombre);
    categoria.itemGui.setIcono(icono);
    categoria.itemGui.setColor((color) ? color : 'opaque');
    categoria.itemGui.setSelected(selected);
    console.log(categoria);
    categoria.tipo = tipo;
    categoria.padreId = padreId;
    return categoria;
  }

  public constructor() {
    this.itemGui = new SelectFilterItem();
    this.subcategorias = new Array();
  }
}