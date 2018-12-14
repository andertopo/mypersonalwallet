import { Injectable } from '@angular/core';
import { CategoriaTransaccion } from '../../objects/CategoriaTransaccion';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class CategoriasProvider {
  public categorias: Array<CategoriaTransaccion>;

  constructor(public sqlite: SQLite) {
    this.categorias = new Array();
  }

  public obtenerCategorias() {
    return this.categorias;
  }

  public guardarCategoria(categoria:CategoriaTransaccion, isEdit:boolean) {
    if(isEdit) {
      console.log("editando", categoria); 
      return this.editarCategoria(categoria);
    } else {
      console.log("creando", categoria);
      return this.crearCategoria(categoria)
    }
  }

  public crearCategoria(categoria:CategoriaTransaccion) {
    return new Promise((resolve, reject) => {
      this.sqlite.create({
        name: 'pesonalWallet.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        console.log("se creo la base de datos");
        db.executeSql('INSERT INTO tbl_categorias (nombre, icono, color, tipo, padre_categoria_id) VALUES(?,?,?,?,?)', [categoria.itemGui.nombre, categoria.itemGui.icono, categoria.itemGui.color, categoria.tipo, categoria.padreId]).then(resp => {
          categoria.id = resp.insertId;
          if(!categoria.padreId) {
            this.categorias.push(categoria);
          }
          resolve(resp);
          console.log("se insertó el registro", resp);
        }).catch(err => {
          console.log("no se insertó el registro en BD", err)
          reject("no se insertó el registro en BD")
        });
      }).catch(e => {
        console.log(e);
        reject('no abre la base de datos');
      });
    });
  }

  public editarCategoria(categoria:CategoriaTransaccion) {
    return new Promise((resolve, reject) => {
      this.sqlite.create({
        name: 'pesonalWallet.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        console.log("se creo la base de datos");
        db.executeSql('UPDATE tbl_categorias SET nombre = ?, icono = ?, color = ?, tipo = ?, padre_categoria_id = ? WHERE id_categoria = ?', [categoria.itemGui.nombre, categoria.itemGui.icono, categoria.itemGui.color, categoria.tipo, categoria.padreId, categoria.id]).then(resp => {
          for(let index=0; index<this.categorias.length; index++) {
            if(this.categorias[index].id == categoria.id) {
              this.categorias[index] = categoria;
            }
          }
          resolve(resp);
          console.log("se actualizó el registro", resp);
        }).catch(err => {
          console.log("no se actualizó el registro en BD", err)
          reject("no se acualizó el registro en BD")
        });
      }).catch(e => {
        console.log(e);
        reject('no abre la base de datos');
      });
    });
  }

  public moverTransacciones(categoriaOrigen:CategoriaTransaccion, categoriaDestino:CategoriaTransaccion) {
    return true;
  }

}
