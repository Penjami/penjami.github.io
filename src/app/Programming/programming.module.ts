import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ProgrammingComponent } from './programming.component';
import { ProjectModule } from '../Project/project.module';
import { VideoProjectDialogComponent } from '../Project/VideoProject/video-project-dialog.component';

@NgModule({
  declarations: [
    ProgrammingComponent,
  ],
  imports: [
    CommonModule,
    ProjectModule
  ],
  exports: [ProgrammingComponent],
  bootstrap: [VideoProjectDialogComponent]
})
export class ProgrammingModule { }
