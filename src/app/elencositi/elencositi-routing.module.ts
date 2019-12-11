import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElencositiPage } from './elencositi.page';

const routes: Routes = [
  {
    path: '',
    component: ElencositiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElencositiPageRoutingModule {}
