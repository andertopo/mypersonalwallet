import { ExternalTransacccionDAOProvider } from './../providers/database/externalDatabase/external-transacciones-dao-provider';
import { TabProvider } from './../providers/tab/tab-provider';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { InicioPage } from '../pages/inicio/inicio';
import { CalendarioInicioPage } from '../pages/inicio/calendario-inicio-page';

import { ConfiguracionPage } from '../pages/cofiguracion/configuracion';
import { TransaccionesPage } from '../pages/transacciones/transacciones';
import { TabsPage } from '../pages/tabs/tabs';

/*para popovers*/
import { CalendarioPage } from '../pages/calendario/calendario';
/*fin para popovers*/

import { ChartsModule } from 'ng2-charts';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PipesModule } from '../pipes/pipes.module';
import { ComponentsModule } from '../components/components.module';
import { CuentaPageModule } from '../pages/cofiguracion/cuenta/cuenta.module';
import { TransaccionesPageModule } from '../pages/transacciones/transacciones.module';

import { DatabaseProvider } from '../providers/database/database';
import { CategoriasProvider } from '../providers/categorias/categorias-provider';
import { CuentaProvider } from '../providers/cuenta/cuenta-provider';
import { TransaccionesProvider } from '../providers/transacciones/transacciones-provider';

import { SQLite } from '@ionic-native/sqlite';
import { SQLitePorter } from '@ionic-native/sqlite-porter';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EtiquetaPageModule } from '../pages/cofiguracion/etiqueta/etiqueta.module';
import { EtiquetaProvider } from '../providers/etiqueta/etiqueta-provider';
import { CategoriaPageModule } from '../pages/cofiguracion/categoria/categoria.module';
import { DatabaseLoaderProvider } from '../providers/database/externalDatabase/database-loader';
import { OtherPage } from '../pages/otherPage/other-page';
import { OtherTransactionsPageModule } from '../pages/other-transactions/other-transactions.module';




@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    OtherPage,
    TransaccionesPage,
    ConfiguracionPage,
    TabsPage,
    CalendarioInicioPage,
    CalendarioPage,
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: true
    }),

    PipesModule,
    ComponentsModule,
    TransaccionesPageModule,
    CuentaPageModule,
    EtiquetaPageModule,
    CategoriaPageModule,
    OtherTransactionsPageModule,
    HttpClientModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    OtherPage,
    CalendarioInicioPage,
    TransaccionesPage,
    ConfiguracionPage,
    TabsPage,
    CalendarioPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClient,
    DatabaseProvider,
    DatabaseLoaderProvider,
    ExternalTransacccionDAOProvider,


    SQLite,
    SQLitePorter,

    CuentaProvider,
    TransaccionesProvider,
    CategoriasProvider,
    EtiquetaProvider,
    TabProvider
  ]
})
export class AppModule {}
