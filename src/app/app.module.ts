import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { ConfiguracionPerfilComponent } from '../components/configuracion-perfil/configuracion-perfil';
import { ConfiguracionGerenciarComponent } from '../components/configuracion-gerenciar/configuracion-gerenciar';

import { InicioPage } from '../pages/inicio/inicio';
import { ConfiguracionPage } from '../pages/cofiguracion/configuracion';
import { TransaccionesPage } from '../pages/transacciones/transacciones';
import { TabsPage } from '../pages/tabs/tabs';
import { CalendarioPage } from '../pages/inicio/calendariopage';

import { ChartsModule } from 'ng2-charts';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    TransaccionesPage,
    ConfiguracionPage,
    TabsPage,
    CalendarioPage,
    ProgressBarComponent,
    ConfiguracionPerfilComponent,
    ConfiguracionGerenciarComponent
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    TransaccionesPage,
    ConfiguracionPage,
    TabsPage,
    CalendarioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
