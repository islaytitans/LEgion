import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RostersPage } from './rosters.page';
import { RostersRoutingModule } from './rosters-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RostersRoutingModule
  ],
  declarations: [RostersPage]
})
export class RostersPageModule {}
