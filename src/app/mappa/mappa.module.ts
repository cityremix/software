import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MappaPageRoutingModule } from './mappa-routing.module';

import { MappaPage } from './mappa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MappaPageRoutingModule
  ],
  declarations: [MappaPage]
})
export class MappaPageModule {}
