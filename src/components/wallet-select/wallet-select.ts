import { Component, Input } from '@angular/core';

@Component({
  selector: 'wallet-select',
  templateUrl: 'wallet-select.html'
})
export class WalletSelectComponent {
  @Input()
  public showIcons: boolean;
  @Input()
  public options:Array<any>;  

  constructor() {
    console.log('Hello WalletSelectComponent Component');
    this.options = new Array();
  } 
}
