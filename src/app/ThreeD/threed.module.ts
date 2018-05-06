import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ProjectTileComponent } from './threeDProject/project-tile.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ProjectDialogComponent } from './threeDProject/project-dialog.component';
import { ThreeDComponent } from './threed.component';

@NgModule({
  declarations: [
    ThreeDComponent,
    ProjectTileComponent,
    ProjectDialogComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
  ],
  exports: [ThreeDComponent],
  bootstrap: [ProjectTileComponent, ProjectDialogComponent]
})
export class ThreeDModule { }
