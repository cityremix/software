import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasoTerniPage } from './caso-terni.page';

const routes: Routes = [
  {
    path: '',
    component: CasoTerniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasoTerniPageRoutingModule {}
