import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { InicioPage } from '../pages/inicio/inicio';
import { ConfiguracionPage } from '../pages/cofiguracion/configuracion';
import { TransaccionesPage } from '../pages/transacciones/transacciones';
import { TabsPage } from '../pages/tabs/tabs';

/*para popovers*/
import { CalendarioPage } from '../pages/inicio/calendariopage';

import { ChartsModule } from 'ng2-charts';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PipesModule } from '../pipes/pipes.module';
import { ComponentsModule } from '../components/components.module';
import { CuentaPageModule } from '../pages/cofiguracion/cuenta/cuenta.module';
import { TransaccionesPageModule } from '../pages/transacciones/transacciones.module';
import { CuentaProvider } from '../providers/cuenta/cuenta-provider';
import { TransaccionesProvider } from '../providers/transacciones/transacciones-provider';


@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    TransaccionesPage,
    ConfiguracionPage,
    TabsPage,
    CalendarioPage,    
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),

    PipesModule,
    ComponentsModule,
    TransaccionesPageModule,
    CuentaPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    TransaccionesPage,
    ConfiguracionPage,
    TabsPage,
    CalendarioPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CuentaProvider,
    TransaccionesProvider
  ]
})
export class AppModule {}
