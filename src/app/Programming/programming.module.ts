import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ProgrammingComponent } from './programming.component';
import { ProjectModule } from '../Project/project.module';
import { ProgrammingProjectDialogComponent } from '../Project/ProgrammingProject/programming-project-dialog.component';

@NgModule({
  declarations: [
    ProgrammingComponent,
  ],
  imports: [
    CommonModule,
    ProjectModule
  ],
  exports: [ProgrammingComponent],
  bootstrap: [ProgrammingProjectDialogComponent]
})
export class ProgrammingModule { }
