import { NgModule } from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { ConfiguracionPerfilComponent } from './configuracion-perfil/configuracion-perfil';
import { ConfiguracionGerenciarComponent } from './configuracion-gerenciar/configuracion-gerenciar';
import { ConfiguracionGeneralComponent } from './configuracion-general/configuracion-general';
import { CategoriaTransaccionesComponent } from './categoria-transacciones/categoria-transacciones';
import { WalletSelectComponent } from './wallet-select/wallet-select';
import { RegistroIngresoGastoComponent } from './registro-ingreso-gasto/registro-ingreso-gasto';
@NgModule({
	declarations: [ProgressBarComponent,
    ConfiguracionPerfilComponent,
    ConfiguracionGerenciarComponent,
    ConfiguracionGeneralComponent,
    CategoriaTransaccionesComponent,
    WalletSelectComponent,
    RegistroIngresoGastoComponent,
  ],
	imports: [
    IonicPageModule.forChild(ProgressBarComponent),
    IonicPageModule.forChild(ConfiguracionPerfilComponent),
    IonicPageModule.forChild(ConfiguracionGerenciarComponent),
    IonicPageModule.forChild(ConfiguracionGeneralComponent),
    IonicPageModule.forChild(CategoriaTransaccionesComponent),
    IonicPageModule.forChild(RegistroIngresoGastoComponent)
  ],
	exports: [ProgressBarComponent,
    ConfiguracionPerfilComponent,
    ConfiguracionGerenciarComponent,
    ConfiguracionGeneralComponent,
    CategoriaTransaccionesComponent,
    WalletSelectComponent,
    RegistroIngresoGastoComponent,
  ]
})
export class ComponentsModule {}
