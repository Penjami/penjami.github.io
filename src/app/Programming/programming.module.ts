import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ProjectTileComponent } from './ProgrammingProject/project-tile.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ProjectDialogComponent } from './ProgrammingProject/project-dialog.component';
import { ProgrammingComponent } from './programming.component';

@NgModule({
  declarations: [
    ProgrammingComponent,
    ProjectTileComponent,
    ProjectDialogComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
  ],
  exports: [ProgrammingComponent],
  bootstrap: [ProjectTileComponent, ProjectDialogComponent]
})
export class ProgrammingModule { }
