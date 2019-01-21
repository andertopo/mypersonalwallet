import { NgModule } from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { ConfiguracionPerfilComponent } from './configuracion-perfil/configuracion-perfil';
import { ConfiguracionGerenciarComponent } from './configuracion-gerenciar/configuracion-gerenciar';
import { ConfiguracionGeneralComponent } from './configuracion-general/configuracion-general';
import { CategoriaTransaccionesComponent } from './categoria-transacciones/categoria-transacciones';
import { WalletSelectComponent } from './wallet-select/wallet-select';
import { RegistroIngresoGastoComponent } from './registro-ingreso-gasto/registro-ingreso-gasto';


import { PipesModule } from '../pipes/pipes.module';
import { CalculatorComponent } from './calculator/calculator';


@NgModule({
	declarations: [ProgressBarComponent,
    ConfiguracionPerfilComponent,
    ConfiguracionGerenciarComponent,
    ConfiguracionGeneralComponent,
    CategoriaTransaccionesComponent,
    WalletSelectComponent,
    RegistroIngresoGastoComponent,
    CalculatorComponent
  ],
	imports: [
    PipesModule,
    IonicPageModule.forChild(ProgressBarComponent),
    IonicPageModule.forChild(ConfiguracionPerfilComponent),
    IonicPageModule.forChild(ConfiguracionGerenciarComponent),
    IonicPageModule.forChild(ConfiguracionGeneralComponent),
    IonicPageModule.forChild(CategoriaTransaccionesComponent),
    IonicPageModule.forChild(RegistroIngresoGastoComponent),
    IonicPageModule.forChild(CalculatorComponent)
  ],
	exports: [ProgressBarComponent,
    ConfiguracionPerfilComponent,
    ConfiguracionGerenciarComponent,
    ConfiguracionGeneralComponent,
    CategoriaTransaccionesComponent,
    WalletSelectComponent,
    RegistroIngresoGastoComponent,
    CalculatorComponent
  ]
})
export class ComponentsModule {}
