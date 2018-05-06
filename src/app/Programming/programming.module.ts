import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ProgrammingComponent } from './programming.component';
import { ProjectModule } from '../Project/project.module';

@NgModule({
  declarations: [
    ProgrammingComponent,
  ],
  imports: [
    CommonModule,
    ProjectModule
  ],
  exports: [ProgrammingComponent],
})
export class ProgrammingModule { }
