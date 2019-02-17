import { TabProvider } from './../../providers/tab/tab-provider';

import {Component} from "@angular/core";
import { NavController, ToastController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

import { CalendarioInicioPage } from './calendario-inicio-page';
import { TransaccionesPage } from "../transacciones/transacciones";

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {
  public clase: string = '';
  public arrowLateralSubmenu: string = 'arrow-back';
  public classClose: string = '';


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
  
  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public tabProvider: TabProvider, public toast: ToastController) {

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

  quitarClase() {
    console.log(document.getElementsByClassName('menu')[0].parentElement.classList.toggle("close"));
  }

  

  cambiarClase() {
    if(this.clase != '') {
      this.clase = '';
    } else {
      this.clase = 'animacion';
    }
  }

  toggleOption() {
    document.getElementsByClassName('background-1')[0].classList.toggle('close');
    document.getElementsByClassName('background-2')[0].classList.toggle('close');
    document.getElementsByClassName('icon-animated')[0].classList.toggle('close');
    document.getElementsByClassName('icon-container')[0].classList.toggle('close');

    document.getElementsByClassName('icon-1')[0].classList.toggle('close');
    document.getElementsByClassName('icon-2')[0].classList.toggle('close');
    document.getElementsByClassName('icon-3')[0].classList.toggle('close');
  }

  
  toggleLateralMenu() {
    if(this.arrowLateralSubmenu == 'arrow-forward') {
      this.arrowLateralSubmenu = 'arrow-back';
      this.classClose = '';
    } else {
      this.arrowLateralSubmenu = 'arrow-forward';
      this.classClose = 'close-content';
    }
    document.getElementsByClassName('links')[0].classList.toggle('close');
    document.getElementsByClassName('lateral-submenu-icon-container')[0].classList.toggle('close');
  }

  clickOpcionT(message) {
    console.log("click");
    let toast = this.toast.create({
      message: "click " + message,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  scaleCard() {
    document.getElementById('card').classList.toggle('close-card');
  }
}