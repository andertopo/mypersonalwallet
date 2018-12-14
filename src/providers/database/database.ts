import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { HttpClient } from '@angular/common/http';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/Rx';
import { CategoriasProvider } from '../categorias/categorias-provider';
import { CategoriaTransaccion } from '../../objects/CategoriaTransaccion';
import { CuentaProvider } from '../cuenta/cuenta-provider';
import { CuentaTransaccion } from '../../objects/CuentaTransaccion';
import { EtiquetaProvider } from '../etiqueta/etiqueta-provider';
import { SelectFilterItem } from '../../objects/SelectFilterItem';

@Injectable()
export class DatabaseProvider {
  private databaseReady: BehaviorSubject<boolean>;
  public db: SQLiteObject;

  constructor(private sqlite: SQLite, private sqliteporter: SQLitePorter, private http: HttpClient, public categoriaProvider: CategoriasProvider, public cuentaProvider:CuentaProvider, public etiquetaProvider:EtiquetaProvider) {
    console.log('Hello DatabaseProvider Provider');
    this.databaseReady = new BehaviorSubject(false);
    this.checkDatabase();
  }

  public isBdReady() {
    return this.databaseReady.asObservable();
  }

  private checkDatabase() {
    this.sqlite.create({
      name: 'pesonalWallet.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.db = db;
      //this.borrarTablas();

      db.executeSql('SELECT * FROM tbl_categorias', []).then(() => {
        console.log('existen datos creados');
        this.setearCategorias();
      }).catch(e => {
        console.log(e);
        this.poblarBD();
      });
    }).catch(e => console.log(e));
  }

  public borrarTablas() {
    this.db.executeSql('DROP TABLE IF EXISTS tbl_categorias', []).then(() => {
      console.log('se borraron las categorias');
      this.db.executeSql('DROP TABLE IF EXISTS tbl_cuentas', []).then(() => {
        console.log('se borraron las cuentas');
        this.db.executeSql('DROP TABLE IF EXISTS tbl_etiquetas', []).then(() => {
          console.log('se borraron las etiquetas');
          this.db.executeSql('DROP TABLE IF EXISTS tbl_transacciones', []).then(() => {
            console.log('se borraron las transacciones');
            this.db.executeSql('DROP TABLE IF EXISTS tbl_metas', []).then(() => {
              console.log('se borraron las metas');
              this.db.executeSql('DROP TABLE IF EXISTS tbl_presupuestos', []).then(() => {
                console.log('se borraron las presupuestos');
                this.poblarBD();
              }).catch(e => {
                console.log(e);
              });
            }).catch(e => {
              console.log(e);
            });
          }).catch(e => {
            console.log(e);
          });
        }).catch(e => {
          console.log(e);
        });
      }).catch(e => {
        console.log(e);
      });
    }).catch(e => {
      console.log(e);
    });
  }

  private poblarBD() {
    console.log("poblando datos");
    this.http.get('assets/sql/db.sql', { responseType: 'text' }).subscribe(sql => {
      console.log("data", sql);
      this.sqliteporter.importSqlToDb(this.db, sql).then(() => {
        console.log("se creo bien la bd");
        this.setearCategorias();
      }).catch(e => {
        alert("Error al importar la base de datos");
        console.error("Error al importar la base de datos", e.message);
      });
    });
  }

  public setearCategorias() {
    this.db.executeSql('SELECT * FROM tbl_categorias ORDER BY id_categoria', []).then(categorias => {
      console.log('categorias', categorias);
      for (var i = 0; i < categorias.rows.length; i++) {
        let categoria = categorias.rows.item(i);
        let categoriaTransaccion = CategoriaTransaccion.crearCategoria(categoria.id_categoria, categoria.nombre, categoria.icono, categoria.color, false, categoria.tipo, categoria.padre_categoria_id);
        this.organizarSubcategorias(categoriaTransaccion);
        //this.categoriaProvider.categorias.push(categoriaTransaccion);
      }
      this.setearCuentas();
    }).catch(e => {
      console.log(e);
    });
  }

  public organizarSubcategorias(categoria:CategoriaTransaccion) {
    if(categoria.padreId == null) {
      console.log("es categoria", categoria);
      this.categoriaProvider.categorias.push(categoria);
    } else {
      console.log("es subcategoria", categoria);
      this.categoriaProvider.categorias.forEach(categoriaItem => {
        if(categoriaItem.id == categoria.padreId) {
          console.log("es subcategoria de la categoria", categoriaItem);
          categoriaItem.subcategorias.push(categoria);
        }
      });
    }
  }

  public setearCuentas() {
    this.db.executeSql('SELECT * FROM tbl_cuentas', []).then(cuentas => {
      console.log('cuentas', cuentas);
      for (var i = 0; i < cuentas.rows.length; i++) {
        let cuenta = cuentas.rows.item(i);
        this.cuentaProvider.cuentas.push(CuentaTransaccion.crearCuenta(cuenta.id_cuenta, cuenta.nombre, cuenta.icono, cuenta.color, false, cuenta.tipo, cuenta.ingresos, cuenta.gastos, cuenta.transacciones, [], cuenta.saldo_total));
      }
      this.setearEtiquetas();
    }).catch(e => {
      console.log(e);
    });
  }

  public setearEtiquetas() {
    this.db.executeSql('SELECT * FROM tbl_etiquetas', []).then(etiquetas => {
      console.log('etiquetas', etiquetas);
      for (var i = 0; i < etiquetas.rows.length; i++) {
        let etiqueta = etiquetas.rows.item(i);
        this.etiquetaProvider.etiquetas.push(SelectFilterItem.crearSelectFilterItem(etiqueta.nombre, etiqueta.icono, etiqueta.color, false));
      }
      //this.db.close();
      this.databaseReady.next(true);
    }).catch(e => {
      console.log(e);
    });
  }

}
