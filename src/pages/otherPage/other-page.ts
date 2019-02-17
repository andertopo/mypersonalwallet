import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OtherTransactionsPage } from '../other-transactions/other-transactions';

@Component({
  selector: 'other-page',
  templateUrl: 'other-page.html'
})
export class OtherPage {
  public active:boolean = true;
  public tabActive:boolean = false;
  public colors = [
    {
      color: 'warning',
      initialColor: 'warning'
    },
    {
      color: 'primary',
      initialColor: 'primary'
    },
    {
      color: 'secondary',
      initialColor: 'secondary'
    },
    {
      color: 'azulPrimario',
      initialColor: 'azulPrimario'
    }
  ]

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    let tabs = document.querySelectorAll('.show-tabbar');
    if (tabs !== null) {
      Object.keys(tabs).map((key) => {
        tabs[key].style.opacity = '0';
      });
    }
    setTimeout(() => {
      document.getElementsByClassName('splash')[0].classList.toggle('active');
      setTimeout(() => {
        if (tabs !== null) {
          Object.keys(tabs).map((key) => {
            tabs[key].style.opacity = '1';
          });
        }
      }, 700);
    }, 3000);
  }

  cambiar() {
    
    this.active = !this.active;
    document.getElementsByClassName('splash')[0].classList.toggle('active');
  }

  scaleCard(index) {
    this.tabActive = !this.tabActive;
    this.colors[index].color = (this.tabActive) ? 'light': this.colors[index].initialColor;
    document.getElementsByClassName('card-menu')[index].classList.toggle('active-card');
    for(let i=0; i < document.getElementsByClassName('card-menu').length; i++) {
      if(i != index) {
        if(i < index) {
          document.getElementsByClassName('card-menu')[i].classList.toggle('move-card-up');
        } else {
          document.getElementsByClassName('card-menu')[i].classList.toggle('move-card-down');
        }
      }
    }
  }

  go() {
    console.log("go");
    this.navCtrl.setRoot(OtherTransactionsPage);
  }
}
