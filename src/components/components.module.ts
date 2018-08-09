import { NgModule } from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { ConfiguracionPerfilComponent } from './configuracion-perfil/configuracion-perfil';
import { ConfiguracionGerenciarComponent } from './configuracion-gerenciar/configuracion-gerenciar';
import { ConfiguracionGeneralComponent } from './configuracion-general/configuracion-general';
@NgModule({
	declarations: [ProgressBarComponent,
    ConfiguracionPerfilComponent,
    ConfiguracionGerenciarComponent,
    ConfiguracionGeneralComponent,
  ],
	imports: [
    IonicPageModule.forChild(ProgressBarComponent),
    IonicPageModule.forChild(ConfiguracionPerfilComponent),
    IonicPageModule.forChild(ConfiguracionGerenciarComponent),
    IonicPageModule.forChild(ConfiguracionGeneralComponent)
  ],
	exports: [ProgressBarComponent,
    ConfiguracionPerfilComponent,
    ConfiguracionGerenciarComponent,
    ConfiguracionGeneralComponent,
  ]
})
export class ComponentsModule {}
