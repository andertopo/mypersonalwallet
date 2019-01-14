import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarioPage } from './calendario';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    CalendarioPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(CalendarioPage),
  ],
})
export class CalendarioPageModule {}
