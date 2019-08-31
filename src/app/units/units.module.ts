import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnitsPage } from './units.page';
import { UnitsRoutingModule } from './units-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnitsRoutingModule
  ],
  declarations: [UnitsPage]
})
export class UnitsPageModule {}
