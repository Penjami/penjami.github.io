import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material';
import { ImageProjectDialogComponent } from './ImageProject/image-project-dialog.component';
import { ImageProjectTileComponent } from './ImageProject/image-project-tile.component';
import { VideoProjectDialogComponent } from './VideoProject/video-project-dialog.component';
import { VideoProjectTileComponent } from './VideoProject/video-project-tile.component';
import { ThreeDProjectDialogComponent } from './ThreeDProject/threed-project-dialog.component';
import { ThreeDProjectTileComponent } from './ThreeDProject/threed-project-tile.component';
import { ProgrammingProjectDialogComponent } from './ProgrammingProject/programming-project-dialog.component';
import { ProgrammmingProjectTileComponent } from './ProgrammingProject/programming-project-tile.component';

@NgModule({
  declarations: [
    ImageProjectDialogComponent,
    ImageProjectTileComponent,
    VideoProjectDialogComponent,
    VideoProjectTileComponent,
    ThreeDProjectDialogComponent,
    ThreeDProjectTileComponent,
    ProgrammingProjectDialogComponent,
    ProgrammmingProjectTileComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    ImageProjectDialogComponent,
    ImageProjectTileComponent,
    VideoProjectDialogComponent,
    VideoProjectTileComponent,
    ThreeDProjectDialogComponent,
    ThreeDProjectTileComponent,
    ProgrammingProjectDialogComponent,
    ProgrammmingProjectTileComponent]
})
export class ProjectModule { }
