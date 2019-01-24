import { Transaccion } from './../../objects/Transaccion';
import { Injectable } from '@angular/core';
import { CategoriasProvider } from '../categorias/categorias-provider';
import { CuentaProvider } from '../cuenta/cuenta-provider';
import { EtiquetaProvider } from '../etiqueta/etiqueta-provider';
import { Platform } from 'ionic-angular';
import { ExternalTransacccionDAOProvider } from './externalDatabase/external-transacciones-dao-provider';
import { TabProvider } from '../tab/tab-provider';

@Injectable()
export class DatabaseProvider {
  constructor(public platform: Platform, 
    public categoriaProvider: CategoriasProvider, 
    public cuentaProvider:CuentaProvider, 
    public etiquetaProvider:EtiquetaProvider, 
    public tabProvider: TabProvider, 
    public externalTransacccionDAOProvider: ExternalTransacccionDAOProvider)
    {
    console.log('Hello DatabaseProvider Provider');
  }

  public crearTransaccion(transaccion: Transaccion) {
    if(this.platform.is('core') || this.platform.is('mobileweb')) {
      return this.externalTransacccionDAOProvider.crearTransaccion(transaccion);
    }
  }

}
