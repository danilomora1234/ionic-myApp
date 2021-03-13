import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciooperacionesPageRoutingModule } from './iniciooperaciones-routing.module';

import { IniciooperacionesPage } from './iniciooperaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciooperacionesPageRoutingModule
  ],
  declarations: [IniciooperacionesPage]
})
export class IniciooperacionesPageModule {}
