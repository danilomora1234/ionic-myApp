import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciooperacionesPage } from './iniciooperaciones.page';

const routes: Routes = [
  {
    path: '',
    component: IniciooperacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciooperacionesPageRoutingModule {}
