import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriaPage } from './categoria';
import { ComponentsModule } from '../../../components/components.module';
import { OpcionesCategoriaPopoverPage } from './opciones-categoria-popover/opciones-categoria-popover';
import { GestionSubcategoriaPopoverPage } from './gestion-subcategoria-popover/gestion-subcategoria-popover';
import { ListadoCategoriasPopoverPage } from './gestion-subcategoria-popover/listado-categorias-popover/listado-categorias-popover';
import { MoverTransaccionesPopoverPage } from './mover-transacciones-popover/mover-transacciones-popover';
import { GestionCategoriaPopoverPage } from './gestion-categoria-popover/gestion-categoria-popover';
import { IconosCategoriaPopoverPage } from './iconos-categoria-popover/iconos-categoria-popover';
import { SimpleSelectCategoriaPopoverPage } from './simple-select-categoria-popover/simple-select-categoria-popover';


@NgModule({
  declarations: [
    CategoriaPage,
    OpcionesCategoriaPopoverPage,
    GestionCategoriaPopoverPage,
    GestionSubcategoriaPopoverPage,
    ListadoCategoriasPopoverPage,
    MoverTransaccionesPopoverPage,
    IconosCategoriaPopoverPage,
    SimpleSelectCategoriaPopoverPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CategoriaPage),
    IonicPageModule.forChild(OpcionesCategoriaPopoverPage),
    IonicPageModule.forChild(GestionSubcategoriaPopoverPage),
    IonicPageModule.forChild(ListadoCategoriasPopoverPage),
    IonicPageModule.forChild(MoverTransaccionesPopoverPage),
    IonicPageModule.forChild(GestionCategoriaPopoverPage),
    IonicPageModule.forChild(IconosCategoriaPopoverPage),
    IonicPageModule.forChild(SimpleSelectCategoriaPopoverPage)
  ],
})
export class CategoriaPageModule {}
