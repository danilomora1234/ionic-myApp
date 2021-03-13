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
suma:number;
resta:number;
dividir:number;
multi:number;
  constructor(public alertController: AlertController,) { }
  ngOnInit() {
  }

  async guardar() {
    if(this.numero1 ==" "  || this.numero1 == null){
      const alertvacio = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: '',
        message: 'LO SIENTO NO HA INGRESADO NUMEROS',
        buttons: ['VALE'],
      });
      await alertvacio.present();
    }else{
        
      if(this.simbolo=="+"){
        
        this.suma=this.numero1+this.numero2,
        this.numero1="";
        this.numero2="";
        this.simbolo="";
      }if(this.simbolo=="-"){
        this.resta=this.numero1-this.numero2,
        this.numero1="";
        this.numero2="";
        this.simbolo="";
      }if(this.simbolo=="*"){
        this.multi=this.numero1*this.numero2,
        this.numero1="";
        this.numero2="";
        this.simbolo="";
      }if(this.simbolo=="/"){
        this.dividir=this.numero1/this.numero2,
        this.numero1="";
        this.numero2="";
        this.simbolo="";
      } 
    }     
   }
}
  




