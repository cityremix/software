import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArcheologiaPage } from './archeologia.page';

const routes: Routes = [
  {
    path: '',
    component: ArcheologiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArcheologiaPageRoutingModule {}
