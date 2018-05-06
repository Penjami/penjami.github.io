import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ImageProjectDialogComponent } from './ImageProject/image-project-dialog.component';
import { ImageProjectTileComponent } from './ImageProject/image-project-tile.component';
import { VideoProjectDialogComponent } from './VideoProject/video-project-dialog.component';
import { VideoProjectTileComponent } from './VideoProject/video-project-tile.component';

@NgModule({
  declarations: [
    ImageProjectDialogComponent,
    ImageProjectTileComponent,
    VideoProjectDialogComponent,
    VideoProjectTileComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
  ],
  exports: [ImageProjectDialogComponent, ImageProjectTileComponent, VideoProjectDialogComponent, VideoProjectTileComponent],
  bootstrap: [ImageProjectDialogComponent, ImageProjectTileComponent]
})
export class ProjectModule { }
