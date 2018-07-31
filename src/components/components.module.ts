import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { ConfiguracionPerfilComponent } from './configuracion-perfil/configuracion-perfil';
import { ConfiguracionGerenciarComponent } from './configuracion-gerenciar/configuracion-gerenciar';
@NgModule({
	declarations: [ProgressBarComponent,
    ConfiguracionPerfilComponent,
    ConfiguracionGerenciarComponent],
	imports: [],
	exports: [ProgressBarComponent,
    ConfiguracionPerfilComponent,
    ConfiguracionGerenciarComponent]
})
export class ComponentsModule {}
