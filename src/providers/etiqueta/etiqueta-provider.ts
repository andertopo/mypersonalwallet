import { Injectable } from '@angular/core';
import { SelectFilterItem } from '../../objects/SelectFilterItem';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class EtiquetaProvider {
  public etiquetas:Array<SelectFilterItem>;

  constructor(public sqlite: SQLite) {
    console.log('Hello EtiquetaProvider Provider');
    this.etiquetas = new Array();
  }

  private generarEtiquetas() {
    this.etiquetas.push(SelectFilterItem.crearSelectFilterItem('desayuno', 'tag', '', false));
    this.etiquetas.push(SelectFilterItem.crearSelectFilterItem('viaje', 'tag', '', false));
    this.etiquetas.push(SelectFilterItem.crearSelectFilterItem('otros', 'tag', '', false));
  }

  public obtenerEtiquetas() {
    //this.generarEtiquetas();
    return this.etiquetas;
  }

  public guardarEtiqueta(etiqueta:SelectFilterItem, isEdit: boolean) {
    if(!isEdit) {
      return this.crearEtiqueta(etiqueta);
    } else {
      return this.editarEtiqueta(etiqueta);
    } 
  }

  public crearEtiqueta(etiqueta:SelectFilterItem) {
    return new Promise((resolve, reject) => {
      this.sqlite.create({
        name: 'pesonalWallet.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        console.log("se creo la base de datos");
        db.executeSql('INSERT INTO tbl_etiquetas (nombre, icono, color) VALUES(?,?,?)', [etiqueta.nombre, etiqueta.icono, etiqueta.color]).then(resp => {
          etiqueta.id = resp.insertId;
          this.etiquetas.push(etiqueta);
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

  public editarEtiqueta(etiqueta:SelectFilterItem) {
    return new Promise((resolve, reject) => {
      this.sqlite.create({
        name: 'pesonalWallet.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        console.log("se creo la base de datos");
        db.executeSql('UPDATE tbl_etiquetas SET nombre = ?, icono = ?, color = ? WHERE id_etiqueta = ?', [etiqueta.nombre, etiqueta.icono, etiqueta.color, etiqueta.id]).then(resp => {
          etiqueta.id = resp.insertId;
          for(let index=0; index<this.etiquetas.length; index++) {
            if(this.etiquetas[index].id == etiqueta.id) {
              this.etiquetas[index] = etiqueta;
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

  public borrarEtiqueta(etiqueta:SelectFilterItem) {
    return new Promise((resolve, reject) => {
      this.sqlite.create({
        name: 'pesonalWallet.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        console.log("se creo la base de datos");
        db.executeSql('DELETE FROM tbl_etiquetas WHERE id_etiqueta = ?', [etiqueta.id]).then(resp => {
          etiqueta.id = resp.insertId;
          for(let index=0; index<this.etiquetas.length; index++) {
            if(this.etiquetas[index].id == etiqueta.id) {
              this.etiquetas.splice(index, 1);
            }
          }

          resolve(resp);
          console.log("se borró el registro", resp);
        }).catch(err => {
          console.log("no se borró el registro en BD", err)
          reject("no se borró el registro en BD")
        });
      }).catch(e => {
        console.log(e);
        reject('no abre la base de datos');
      });
    });
  }

}
