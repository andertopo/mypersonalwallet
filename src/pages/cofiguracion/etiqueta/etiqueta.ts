import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { EtiquetaProvider } from '../../../providers/etiqueta/etiqueta-provider';
import { SelectFilterItem } from '../../../objects/SelectFilterItem';

@IonicPage()
@Component({
  selector: 'page-etiqueta',
  templateUrl: 'etiqueta.html',
})
export class EtiquetaPage {
  public etiquetas: Array<SelectFilterItem>;
  public isEdit: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public toastCtrl: ToastController, public etiquetaProvider: EtiquetaProvider) {
    this.etiquetas = this.etiquetaProvider.obtenerEtiquetas();
    this.isEdit = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EtiquetaPage');
  }

  goNew() {
    let alert = this.alertCtrl.create({
      title: 'Crear',
      inputs: [
        {
          name: 'nombre',
          placeholder: 'nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            console.log(data);
            if (data.nombre != '') {
              this.etiquetaProvider.guardarEtiqueta(SelectFilterItem.crearSelectFilterItem(data.nombre, 'pricetag', '', false), false).then(res => {
                this.showMessage('La etiqueta ha sido ' + ((this.isEdit) ? 'editada' : 'creada'), true);
              }).catch(err => {
                this.showMessage('Ha ocurrido un error al crear la etiqueta', true);
              });
            }
          }
        }
      ]
    });
    alert.present();
  }

  delete(etiqueta: SelectFilterItem) {
    let alert = this.alertCtrl.create({
      title: 'Borrar etiqueta',
      message: '¿Quieres borrar esta etiqueta?',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'SI',
          handler: () => {
            this.deleteAction(etiqueta);
          }
        }
      ]
    });
    alert.present();
  }

  edit(etiqueta: SelectFilterItem) {
    let alert = this.alertCtrl.create({
      title: 'Editar',
      inputs: [
        {
          name: 'nombre',
          placeholder: 'nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            console.log(data);
            this.validationEdit(etiqueta, data);
          }
        }
      ]
    });
    alert.present();
  }

  private validationEdit(etiqueta: SelectFilterItem, data: any) {
    if (data.nombre == '') {
      let alert = this.alertCtrl.create({
        title: 'Borrar etiqueta',
        message: '¿el nombre está vacio, Quieres borrar esta etiqueta?',
        buttons: [
          {
            text: 'NO',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'SI',
            handler: () => {
              this.deleteAction(etiqueta);
            }
          }
        ]
      });
      alert.present();
    } else {
      this.etiquetaProvider.guardarEtiqueta(data, true).then(res => {
        this.showMessage('La etiqueta ha sido editada', false);
      }).catch(err => {
        this.showMessage('Ha ocurrido un error al editar la etiqueta', false);
      });
    }
  }

  deleteAction(etiqueta: SelectFilterItem) {
    this.etiquetaProvider.borrarEtiqueta(etiqueta).then(resp => {
      this.showMessage('La etiqueta ha sido eliminada', false);
    }).catch(err => {
      this.showMessage('Ha ocurrido un error al eliminar la etiqueta', false);
    });
  }

  showMessage(mensaje: string, created) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 2000,
      position: 'middle'
    });
    toast.present();

    toast.onDidDismiss(() => {
      //if (etiquetaEliminada) {
      //this.navCtrl.pop();
      //TODO: refrescar el listado de etiquetas
      //}
    });
  }
}
