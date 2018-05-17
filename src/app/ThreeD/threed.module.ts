import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ThreeDComponent } from './threed.component';
import { ProjectModule } from '../Project/project.module';
import { ThreeDProjectDialogComponent } from '../Project/ThreeDProject/threed-project-dialog.component';

@NgModule({
  declarations: [
    ThreeDComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ProjectModule
  ],
  exports: [ThreeDComponent],
  bootstrap: [ThreeDProjectDialogComponent]
})
export class ThreeDModule { }
