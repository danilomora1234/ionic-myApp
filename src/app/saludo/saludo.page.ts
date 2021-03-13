import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.page.html',
  styleUrls: ['./saludo.page.scss'],
})
export class SaludoPage implements OnInit {
  nombre = null;

  constructor(public alertController: AlertController) { }
  
  async guardarSaludo() {
    if(this.nombre ==" "  || this.nombre == null){
      const alertvacio = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: '',
        message: 'LO SIENTO NO SE TU NOMBRE, NO TE PUEDO SALUDAR ',
        buttons: ['VALE'],
      });
      await alertvacio.present();
    }else{
      if(this.nombre==this.nombre){
        const alertlleno = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: '',
          message: 'HOLA'+ ' ' + this.nombre+ ' UN GUSTO SALUDARTE ',
          buttons: ['GRACIAS'],
        });
        await alertlleno.present();
    }
  }
}

  
  ngOnInit() {
  }

}
