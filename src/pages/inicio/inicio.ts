
import {Component} from "@angular/core";
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

import { CalendarioPage } from './calendariopage';

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
  
  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }
  
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(CalendarioPage);
    popover.present({
      ev: myEvent
    });
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}