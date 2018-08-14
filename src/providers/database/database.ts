import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { HttpClient } from '@angular/common/http';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class DatabaseProvider {
  private databaseReady: BehaviorSubject<boolean>;
  private db: SQLiteObject;

  constructor(private sqlite: SQLite, private sqliteporter: SQLitePorter, private http: HttpClient) {
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
      db.executeSql('SELECT * FROM tbl_categorias', []).then(() => {
        console.log('existen datos creados');
        this.databaseReady.next(true);
      }).catch(e => {
        console.log(e);
        this.poblarBD();
      });
    }).catch(e => console.log(e));
  }

  private poblarBD() {
    console.log("poblando datos");
    this.http.get('assets/sql/db.sql', {responseType: 'text'}).subscribe(sql => {
      console.log("data", sql);
      this.sqliteporter.importSqlToDb(this.db, sql).then(() => {
        // this.datos = this.obtenerDatos(db);
        console.log("se creo bien la bd");
        this.databaseReady.next(true);
      }).catch(e => {
        alert("Error al importar la base de datos");
        console.error("Error al importar la base de datos", e.message);
      });
    })
  }

}
