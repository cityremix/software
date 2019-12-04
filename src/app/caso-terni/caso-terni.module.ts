import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasoTerniPageRoutingModule } from './caso-terni-routing.module';

import { CasoTerniPage } from './caso-terni.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasoTerniPageRoutingModule
  ],
  declarations: [CasoTerniPage]
})
export class CasoTerniPageModule {}
