
import {Component} from "@angular/core";
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

@Component({
  selector: 'page-configuracion',
  templateUrl: 'configuracion.html'
})
export class ConfiguracionPage {
  public configurationTab:string = "";

  public constructor() {
    this.configurationTab = "perfil";
  }

  segmentChanged(e) {
    console.log("cambio el tab del segment", e);
  }
}