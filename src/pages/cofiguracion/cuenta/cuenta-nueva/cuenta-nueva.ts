import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, ToastController, ViewController } from 'ionic-angular';
import { TipoCuentaOpcionesPage } from './tipo-cuenta-opciones/tipo-cuenta-opciones';
import { CuentaTransaccion } from '../../../../objects/CuentaTransaccion';
import { ColoresCuentaPopoverPage } from './colores-cuenta-popover/colores-cuenta-popover';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CuentaProvider } from '../../../../providers/cuenta/cuenta-provider';

@Component({
  selector: 'page-cuenta-nueva',
  templateUrl: 'cuenta-nueva.html',
})
export class CuentaNuevaPage {
  public formCuenta: FormGroup;
  public cuenta: CuentaTransaccion;
  public action: string;
  public padding: string;
  public isEdit: boolean;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, fb: FormBuilder, public cuentaProvider: CuentaProvider, public toastCtrl: ToastController) {
    this.action = 'Nueva';
    this.padding = 'padding';
    this.isEdit = false;
    this.cuenta = new CuentaTransaccion();
    this.cuenta.itemGui.setIcono('home');
    this.cuenta.itemGui.setColor('warning');
    this.cuenta.itemGui.setNombre('');
    this.cuenta.tipo = 'dinero';

    this.formCuenta = fb.group({
      'nombre': [null, Validators.required],
      'valorInicial': [null, Validators.compose([Validators.required, Validators.pattern('[0-9]*')])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CuentaNuevaPage');
    if(this.navParams.get('cuenta')) {
      this.cuenta = this.navParams.get('cuenta');
      this.action = 'Editar';
      this.padding = '';
      this.isEdit = true
      this.formCuenta.controls['nombre'].setValue(this.cuenta.itemGui.nombre);
      this.formCuenta.controls['valorInicial'].setValue(this.cuenta.saldoInicial);
    }
  }

  public openOpciones() {
    let popover = this.popoverCtrl.create(TipoCuentaOpcionesPage, {}, {});
    popover.present({ ev: event });
    popover.onDidDismiss(data => {
      if (data) {
        this.cuenta.tipo = data.tipoCuenta;
      }
    });
  }

  public openColor() {
    let popover = this.popoverCtrl.create(ColoresCuentaPopoverPage, {}, {});
    popover.present({ ev: event });
    popover.onDidDismiss(data => {
      if (data) {
        this.cuenta.itemGui.setColor(data.color);
      }
    });
  }

  public guardar() {
    if (this.formCuenta.valid) {
      this.cuenta.saldoInicial = parseInt(this.formCuenta.value.valorInicial);
      this.cuenta.saldoTotal = (this.isEdit) ? this.cuenta.saldoTotal : this.cuenta.saldoInicial;
      this.cuenta.itemGui.nombre = this.formCuenta.value.nombre;
      this.cuentaProvider.guardarCuenta(this.cuenta, this.isEdit).then(res => {
        this.showMessage('La cuenta ha sido ' + ((this.isEdit) ? 'editada' : 'creada'), true);
      }).catch(err => {
        this.showMessage('Ha ocurrido un error al crear la cuenta', true);
      });
    } else {
      console.log(this.formCuenta.hasError);
    }
  }

  close() {
    this.viewCtrl.dismiss();
  }

  public showMessage(message, created) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'middle'
    });
    toast.present();

    toast.onDidDismiss(() => {
      if (created) {
        this.navCtrl.pop();
      }
    });
  }

}
