
import { Component } from "@angular/core";
import {ViewController } from "ionic-angular";

@Component({
  template: `
    <ion-grid>
      <ion-row>
        <ion-col col-4 (click)="close()">
          Enero
        </ion-col>
        <ion-col col-4 (click)="close()">
          Febrero
        </ion-col>
        <ion-col col-4 (click)="close()">
          Marzo
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col col-4 (click)="close()">
          Abril
        </ion-col>
        <ion-col col-4 (click)="close()">
          Mayo
        </ion-col>
        <ion-col col-4 (click)="close()">
          Junio
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col col-4 (click)="close()">
          Julio
        </ion-col>
        <ion-col col-4 (click)="close()">
          Agosto
        </ion-col>
        <ion-col col-4 (click)="close()">
          Septiembre
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col col-4 (click)="close()">
          Octubre
        </ion-col>
        <ion-col col-4 (click)="close()">
          Noviembre
        </ion-col>
        <ion-col col-4 (click)="close()">
          Diciembre
        </ion-col>
      </ion-row>
    </ion-grid>
  `
})
export class CalendarioPage {
  constructor(public viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }
}