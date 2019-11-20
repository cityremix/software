import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArcheologiaPageRoutingModule } from './archeologia-routing.module';

import { ArcheologiaPage } from './archeologia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArcheologiaPageRoutingModule
  ],
  declarations: [ArcheologiaPage]
})
export class ArcheologiaPageModule {}
