import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { isNumber } from 'util';
@Component({
  selector: 'app-parcial',
  templateUrl: './parcial.page.html',
  styleUrls: ['./parcial.page.scss'],
})
export class PARCIALPage implements OnInit {
  

  valor = "0";
  valor1 = "0";
    operador = "x";
    nuevovalor = true;
    gruponumsimbolos = [
      [7, 8, 9, "*"],
      [4, 5, 6, "-"],
      [1, 2, 3, "+"],
      [0, "borrar", "/", "="]
    ];
    constructor(public alertController: AlertController,) { }
    ngOnInit() {
    }
  
    
  
    onButtonPress(symbolo) {
      console.log(symbolo);
  
      if (isNumber(symbolo)) {
        console.log("es un numero");
        if (this.nuevovalor)
          this.valor = "" + symbolo;
        else
          this.valor += "" + symbolo;
        this.nuevovalor = false;
      }
      else if (symbolo === "borrar") {
        this.valor = "0";
        this.nuevovalor = true;
      }
      else if (symbolo === "=") {
        if (this.operador === "*")
          this.valor = "" + (parseInt(this.valor1) * parseInt(this.valor));
        else if (this.operador === "-")
          this.valor = "" + (parseInt(this.valor1) - parseInt(this.valor));
        else if (this.operador === "+")
          this.valor = "" + (parseInt(this.valor1) + parseInt(this.valor));
        else if (this.operador === "/")
          this.valor = "" + (parseInt(this.valor1) / parseInt(this.valor));
        this.nuevovalor = true;
      }
      else { // operator
        this.nuevovalor = true;
        this.valor1 = this.valor;
        this.operador = symbolo;
      }
    }   
}


