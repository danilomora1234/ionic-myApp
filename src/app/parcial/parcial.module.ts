import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PARCIALPageRoutingModule } from './parcial-routing.module';

import { PARCIALPage } from './parcial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PARCIALPageRoutingModule
  ],
  declarations: [PARCIALPage]
})
export class PARCIALPageModule {}
