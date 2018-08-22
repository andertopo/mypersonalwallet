import { NgModule } from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { ConfiguracionPerfilComponent } from './configuracion-perfil/configuracion-perfil';
import { ConfiguracionGerenciarComponent } from './configuracion-gerenciar/configuracion-gerenciar';
import { ConfiguracionGeneralComponent } from './configuracion-general/configuracion-general';
import { CategoriaGastosComponent } from './categoria-gastos/categoria-gastos';
import { WalletSelectComponent } from './wallet-select/wallet-select';
@NgModule({
	declarations: [ProgressBarComponent,
    ConfiguracionPerfilComponent,
    ConfiguracionGerenciarComponent,
    ConfiguracionGeneralComponent,
    CategoriaGastosComponent,
    WalletSelectComponent,
  ],
	imports: [
    IonicPageModule.forChild(ProgressBarComponent),
    IonicPageModule.forChild(ConfiguracionPerfilComponent),
    IonicPageModule.forChild(ConfiguracionGerenciarComponent),
    IonicPageModule.forChild(ConfiguracionGeneralComponent),
    IonicPageModule.forChild(CategoriaGastosComponent)
  ],
	exports: [ProgressBarComponent,
    ConfiguracionPerfilComponent,
    ConfiguracionGerenciarComponent,
    ConfiguracionGeneralComponent,
    CategoriaGastosComponent,
    WalletSelectComponent,
  ]
})
export class ComponentsModule {}
