import { TabProvider } from './../../providers/tab/tab-provider';

import {Component} from "@angular/core";
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

import { CalendarioInicioPage } from './calendario-inicio-page';
import { TransaccionesPage } from "../transacciones/transacciones";

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {
  public barChartOptions:any = {
    responsive: true,
    legend: {
      position: 'right',
      onClick: function() {},
      labels: {
        usePointStyle: true,
        fontFamily: '"Roboto", "Helvetica Neue", sans-serif'
      }
    },
    scales: {
      yAxes: [{
        display: false,
        type: 'linear',
        position: 'left', 
        ticks: {min: 0}
      }]
    },
  };
  //public barChartLabels:string[] = ['Enero'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [1790000], label: 'Ingresos: $1.790.000'},
    {data: [1585000], label: 'Gastos: $1.585.000'}
  ];

  public colours: Array<any> = [
    { // all colors in order
      backgroundColor: ['#5BC500']
    }, 
    {
      backgroundColor: ['#e9252a']
    }
  ]

  public coloursDonut: Array<any> = [
    { // all colors in order
      backgroundColor: ['#5BC500', '#e9252a', '#EC6839']
    }
  ]

  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  
  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public tabProvider: TabProvider) {

  }
  
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(CalendarioInicioPage, {}, {cssClass: 'popover-center'});
    popover.present({
      ev: myEvent
    });
  }

  goTransacciones(type:string) {
    this.tabProvider.typeTransaction.transaccion = type;
    this.navCtrl.parent.select(1);
  }
}