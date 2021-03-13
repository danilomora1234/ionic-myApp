import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaludoPageRoutingModule } from './saludo-routing.module';

import { SaludoPage } from './saludo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaludoPageRoutingModule
  ],
  declarations: [SaludoPage]
})
export class SaludoPageModule {}
