import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit  {
numero1=null;
numero2=null;
simbolo=null;
suma=null;
resta=null;
dividir=null;
multi=null;
  constructor(public alertController: AlertController,) { }
  ngOnInit() {
  }

  async guardar() {
    
    if(this.numero1 ==" "  || this.numero1 == null ){
      const alertvacio = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'AVISO',
        message: 'NO HA INGRESADO DATOS O SIMBOLO',
        buttons: ['VALE'],
      });
      await alertvacio.present();
    }else{
        
      if(this.simbolo=="+"){
        this.suma=parseInt(this.numero1)+parseInt(this.numero2)
        console.log(this.suma)
      }if(this.simbolo=="-"){
        this.resta=this.numero1-this.numero2
        console.log(this.resta)
      }if(this.simbolo=="*"){
        this.multi=this.numero1*this.numero2
        console.log(this.multi)
      }if(this.simbolo=="/"){
        this.dividir=this.numero1/this.numero2
        console.log(this.dividir)
      } 
        this.numero1="";
        this.numero2="";
        this.simbolo="";
    }     
   }
}
  




