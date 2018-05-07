import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound.component';
import { GamesModule } from './Games/games.module';
import { ProgrammingModule } from './Programming/programming.module';
import { ThreeDModule } from './ThreeD/threed.module';
import { ProjectModule } from './Project/project.module';
import { ImageProjectDialogComponent } from './Project/ImageProject/image-project-dialog.component';
import { VideoProjectDialogComponent } from './Project/VideoProject/video-project-dialog.component';
import { ThreeDProjectDialogComponent } from './Project/ThreeDProject/threed-project-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    ProjectModule,
    GamesModule,
    ProgrammingModule,
    ThreeDModule,
    BrowserAnimationsModule,
    ThreeDModule
  ],
  providers: [],
  bootstrap: [AppComponent, ImageProjectDialogComponent, VideoProjectDialogComponent, ThreeDProjectDialogComponent]
})
export class AppModule { }
