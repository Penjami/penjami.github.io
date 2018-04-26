import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ProgrammingComponent } from './programming.component';
import { ProgrammingRoutingModule } from './programming-routing.module';

@NgModule({
  declarations: [
    ProgrammingComponent
  ],
  imports: [
    CommonModule,
    ProgrammingRoutingModule
  ],
  providers: [],
})
export class ProgrammingModule { }
