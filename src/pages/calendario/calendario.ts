import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

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
  public showCalendar: boolean;
  public years: Array<number>;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.clase = 'col date-active bg-danger';
    this.fechas = new Array();
    this.currentDate = new Date();
    this.showCalendar = true;
    this.dateTitle = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth());
    this.dateSelected = this.currentDate.getFullYear() + '/' + (this.currentDate.getMonth() + 1) + '/' + this.currentDate.getDate();
    this.years = new Array();
    for(let i=this.currentDate.getFullYear() - 50; i<(this.currentDate.getFullYear() + 50); i++) {
      this.years.push(i);
    }

    this.calcularCalendario();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarioPage');
  }

  private calcularCalendario() {
    this.fechas = new Array();
    let dateInitial = new Date(this.currentDate);
    dateInitial.setDate(1);
    let ultimoDiaMes = new Date(dateInitial.getFullYear(), dateInitial.getMonth() + 1, 0).getDate();
    let diaSemana = (dateInitial.getUTCDay() < 2) ? (dateInitial.getUTCDay() + 5) : (dateInitial.getUTCDay() - 2);

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
      let clase = (dateInitial.getFullYear() + "/" + (dateInitial.getMonth() + 1) + "/" + dateInitial.getDate() == this.dateSelected) ? 'col date-active bg-danger' : 'col';
      this.fechas[contadorSemana].push({
        fecha: dateInitial.getFullYear() + "/" + (dateInitial.getMonth() + 1) + "/" + dateInitial.getDate(),
        class: clase
      });
      dateInitial.setDate(dateInitial.getDate() + 1);
    }

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
    console.log("mes es cero", d.getMonth(), d, '-- ', date);
    if(d.getMonth() == 0 && value == -1) {
      console.log("mes es cero", d.getMonth());
      d.setFullYear(d.getFullYear() - 1);
      d.setMonth(11);
    } else {
      d.setMonth(d.getMonth() + value);
      console.log(d.getMonth() + value);
    }
    d.setDate(Math.min(n, this.getDaysInMonth(d.getFullYear(), d.getMonth())));
    return d;
  }

  public addMonth(month: number) {
    console.log("validando fecha", this.currentDate);
    this.currentDate = this.addMonths(this.currentDate, month);
    this.dateTitle = this.currentDate;
    this.calcularCalendario();
  }

  public select(date) {
    console.log(date);
    for(let semana in this.fechas) {
      for(let fecha in this.fechas[semana]) {
        this.fechas[semana][fecha].class = 'col';
      }
    }
    this.dateSelected = date.fecha;
    date.class = 'col date-active bg-danger';

  }

  toggleYear() {
    this.showCalendar = !this.showCalendar;
  }

  cambiarAnio(anio) {
    this.currentDate.setFullYear(anio);
    this.dateTitle = this.currentDate;
    this.dateSelected = this.currentDate.getFullYear() + '/' + (this.currentDate.getMonth() + 1) + '/' + this.currentDate.getDate();
    this.calcularCalendario();
    this.toggleYear();
  }

  enviarFecha(current:boolean) {
    this.viewCtrl.dismiss({
      fecha: ((current) ? new Date() : this.dateSelected)
    });
  }
}