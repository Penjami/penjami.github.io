import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ThreeDComponent } from './threeD.component';
import { ThreeDRoutingModule } from './threeD-routing.module';

@NgModule({
  declarations: [
    ThreeDComponent
  ],
  imports: [
    CommonModule,
    ThreeDRoutingModule
  ],
  providers: [],
})
export class ThreeDModule { }
