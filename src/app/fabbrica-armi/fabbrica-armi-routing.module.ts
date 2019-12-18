import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FabbricaArmiPage } from './fabbrica-armi.page';

const routes: Routes = [
  {
    path: '',
    component: FabbricaArmiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FabbricaArmiPageRoutingModule {}
