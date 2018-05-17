import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { GamesComponent } from './games.component';
import { ProjectModule } from '../Project/project.module';
import { VideoProjectDialogComponent } from '../Project/VideoProject/video-project-dialog.component';

@NgModule({
  declarations: [
    GamesComponent,
  ],
  imports: [
    CommonModule,
    ProjectModule
  ],
  exports: [ GamesComponent ],
  bootstrap: [VideoProjectDialogComponent]
})
export class GamesModule { }
