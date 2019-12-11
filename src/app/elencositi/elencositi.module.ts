import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElencositiPageRoutingModule } from './elencositi-routing.module';

import { ElencositiPage } from './elencositi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElencositiPageRoutingModule
  ],
  declarations: [ElencositiPage]
})
export class ElencositiPageModule {}
