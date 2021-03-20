import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { isNumber } from 'util';
@Component({
  selector: 'app-parcial',
  templateUrl: './parcial.page.html',
  styleUrls: ['./parcial.page.scss'],
})
export class PARCIALPage implements OnInit {
  

  valor = '0';
  valor1 = '0';
    operador = 'x';
    readyForNewInput = true;
    numberGroups = [
      [7, 8, 9, '*'],
      [4, 5, 6, '-'],
      [1, 2, 3, '+'],
      [0, 'borra', '/', '=']
    ];
    constructor(public alertController: AlertController,) { }
    ngOnInit() {
    }
  
    
  
    onButtonPress(symbol) {
      console.log(symbol);
  
      if (isNumber(symbol)) {
        console.log('is a number');
        if (this.readyForNewInput)
          this.valor = '' + symbol;
        else
          this.valor += '' + symbol;
        this.readyForNewInput = false;
      }
      else if (symbol === "borra") {
        this.valor = "0";
        this.readyForNewInput = true;
      }
      else if (symbol === "=") {
        if (this.operador === '*')
          this.valor = "" + (parseInt(this.valor1) * parseInt(this.valor));
        else if (this.operador === '-')
          this.valor = "" + (parseInt(this.valor1) - parseInt(this.valor));
        else if (this.operador === '+')
          this.valor = "" + (parseInt(this.valor1) + parseInt(this.valor));
        else if (this.operador === '/')
          this.valor = "" + (parseInt(this.valor1) / parseInt(this.valor));
        this.readyForNewInput = true;
      }
      else { // operator
        this.readyForNewInput = true;
        this.valor1 = this.valor;
        this.operador = symbol;
      }
    }   
     }


