import { Component } from '@angular/core';
import { NavController,AlertController,LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombre=null;
  apellido=null;
  celular=null;
  email = null;

  usuarios = [];


  sinDatos: boolean=false;
  visibleEditar: boolean=false;


  constructor(public alertController: AlertController, loadingController: LoadingController) {}
  
  /*async noDatos(){const alert = await this.alertController.create({//salta una ventana para avisar que no haz ingrsado datos
    cssClass: 'my-custom-class',
    header: 'NO HA INGRESADO DATOS',
     
    //no se como hacerlo xd
    buttons: [
      {
        text: 'OK',//boton cancelar accion de no has ingresado datos
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, 
      
    ]
  });}*/
  
  async guardarDatos(x){
    
    // agregando datos a la base de datos en memoria
    this.usuarios.push({
      nombre: this.nombre
      
    })

    this.usuarios.push({
      apellido: this.apellido
    })

    this.usuarios.push({
      celular: this.celular
    })

    this.usuarios.push({
      email: this.email
    })
    this.sinDatos=true;
    //limpiando datos
    this.celular="";
    this.email="";
    this.nombre="";
    this.apellido="";
    
  }
  delete(x){//funcion que borra los datos esta conectado con el boton eliminar
   
    this.usuarios.splice(x,1);
  }
  async editar(x){
    const alert = await this.alertController.create({//salta una ventana para editar dato
      cssClass: 'my-custom-class',
      header: 'EDITAR DATO',
      inputs: [
        {
          name: 'nombre1',
          type: 'text',
          value: this.usuarios[x].nombre1
          
        },
        
        
      ],
      buttons: [
        {
          text: 'Cancelar',//boton cancelar accion de editar datos
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, 
        { text: 'Actualizar', handler: datos => //boton actualizar datos
        { 
          this.usuarios[x].nombre = datos.nombre1;
          this.usuarios[x].apellido = datos.apellido1;
          this.usuarios[x].celular = datos.celular1;
          this.usuarios[x].email = datos.email1;  
          
        }
        }
        
      ]
    });

    await alert.present();
  }

  
    };