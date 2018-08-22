import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriaPage } from './categoria';
import { ComponentsModule } from '../../../components/components.module';
import { OpcionesCategoriaPopoverPage } from './opciones-categoria-popover/opciones-categoria-popover';
import { NuevaSubcategoriaPopoverPage } from './nueva-subcategoria-popover/nueva-subcategoria-popover';
import { ListadoCategoriasPopoverPage } from './nueva-subcategoria-popover/listado-categorias-popover/listado-categorias-popover';
import { MoverTransaccionesPopoverPage } from './mover-transacciones-popover/mover-transacciones-popover';
import { NuevaCategoriaPopoverPage } from './nueva-categoria-popover/nueva-categoria-popover';
import { IconosCategoriaPopoverPage } from './iconos-categoria-popover/iconos-categoria-popover';

@NgModule({
  declarations: [
    CategoriaPage,
    OpcionesCategoriaPopoverPage,
    NuevaCategoriaPopoverPage,
    NuevaSubcategoriaPopoverPage,
    ListadoCategoriasPopoverPage,
    MoverTransaccionesPopoverPage,
    IconosCategoriaPopoverPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CategoriaPage),
    IonicPageModule.forChild(OpcionesCategoriaPopoverPage),
    IonicPageModule.forChild(NuevaSubcategoriaPopoverPage),
    IonicPageModule.forChild(ListadoCategoriasPopoverPage),
    IonicPageModule.forChild(MoverTransaccionesPopoverPage),
    IonicPageModule.forChild(NuevaCategoriaPopoverPage),
    IonicPageModule.forChild(IconosCategoriaPopoverPage),
  ],
})
export class CategoriaPageModule {}
