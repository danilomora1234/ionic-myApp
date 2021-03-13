import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaludoPage } from './saludo.page';

const routes: Routes = [
  {
    path: '',
    component: SaludoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaludoPageRoutingModule {}
