import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FabbricaArmiPageRoutingModule } from './fabbrica-armi-routing.module';

import { FabbricaArmiPage } from './fabbrica-armi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FabbricaArmiPageRoutingModule
  ],
  declarations: [FabbricaArmiPage]
})
export class FabbricaArmiPageModule {}
