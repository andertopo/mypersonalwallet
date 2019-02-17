import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OtherTransactionsPage } from './other-transactions';

@NgModule({
  declarations: [
    OtherTransactionsPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(OtherTransactionsPage),
  ],
})
export class OtherTransactionsPageModule {}
