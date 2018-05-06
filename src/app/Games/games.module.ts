import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectTileComponent } from './GameProject/project-tile.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ProjectDialogComponent } from './GameProject/project-dialog.component';
import { GamesComponent } from './games.component';

@NgModule({
  declarations: [
    GamesComponent,
    ProjectTileComponent,
    ProjectDialogComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [ GamesComponent ],
  bootstrap: [ProjectTileComponent, ProjectDialogComponent]
})
export class GamesModule { }
