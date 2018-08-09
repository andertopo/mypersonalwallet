
import {Component} from "@angular/core";

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