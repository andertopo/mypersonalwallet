import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-calendario',
  templateUrl: 'calendario.html',
})
export class CalendarioPage {
  public clase: string;
  public currentDate: Date;
  public dateTitle: Date;
  public fechas: Array<any>;
  public dateSelected: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.clase = 'col date-active bg-danger';
    this.fechas = new Array();
    this.currentDate = new Date();
    this.dateTitle = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth());
    this.dateSelected = this.currentDate.getFullYear() + '/' + (this.currentDate.getMonth() + 1) + '/' + this.currentDate.getDate();

    this.calcularCalendario();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarioPage');
  }

  private calcularCalendario() {
    this.fechas = new Array();
    this.currentDate.setDate(1);
    let ultimoDiaMes = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();
    let diaSemana = (this.currentDate.getUTCDay() < 2) ? (this.currentDate.getUTCDay() + 5) : (this.currentDate.getUTCDay() - 2);

    for (let i = 0; i < 5; i++) {
      this.fechas.push(new Array());
    }

    let i = 0;
    for (i; i <= diaSemana; i++) {
      this.fechas[0].push({
        fecha: '',
        class: 'col'
      });
    }

    let contadorSemana = 0;
    for (i; i <= ultimoDiaMes; i++) {
      if (i % 7 == 0) {
        contadorSemana++;
      }
      let clase = (this.currentDate.getFullYear() + "/" + (this.currentDate.getMonth() + 1) + "/" + this.currentDate.getDate() == this.dateSelected) ? 'col date-active bg-danger' : 'col';
      this.fechas[contadorSemana].push({
        fecha: this.currentDate.getFullYear() + "/" + (this.currentDate.getMonth() + 1) + "/" + this.currentDate.getDate(),
        class: clase
      });
      this.currentDate.setDate(this.currentDate.getDate() + 1);
    };
    for (let j = this.fechas[4].length; j <= 7; j++) {
      this.fechas[4].push({
        fecha: '',
        class: 'col'
      });
    }
    console.log(this.fechas);
  }

  public isLeapYear(year) {
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
  }

  public getDaysInMonth(year, month) {
    return [31, (this.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
  }

  public addMonths(date, value) {
    var d = new Date(date),
      n = date.getDate();
    d.setDate(1);
    d.setMonth(d.getMonth() + value);
    d.setDate(Math.min(n, this.getDaysInMonth(d.getFullYear(), d.getMonth())));
    return d;
  }

  public addMonth(month: number) {
    this.currentDate = this.addMonths(this.currentDate, month);
    this.dateTitle = this.currentDate;
    this.calcularCalendario();
  }

  public select(date) {
    console.log(date);
    this.dateSelected = date.fecha;
    date.class = 'col date-active bg-danger';

  }
}