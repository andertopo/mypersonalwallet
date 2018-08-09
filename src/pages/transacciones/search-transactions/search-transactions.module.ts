import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchTransactionsPage } from './search-transactions';

@NgModule({
  declarations: [
    SearchTransactionsPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchTransactionsPage),
  ],
})
export class SearchTransactionsPageModule {}
