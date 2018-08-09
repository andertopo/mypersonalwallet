import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MultipleSelectFilterPage } from './multiple-select-filter';

@NgModule({
  declarations: [
    MultipleSelectFilterPage,
  ],
  imports: [
    IonicPageModule.forChild(MultipleSelectFilterPage),
  ],
})
export class MultipleSelectFilterPageModule {}
