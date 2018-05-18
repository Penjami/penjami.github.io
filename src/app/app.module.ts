import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound.component';
import { GamesModule } from './Games/games.module';
import { ProgrammingModule } from './Programming/programming.module';
import { ThreeDModule } from './ThreeD/threed.module';
import { ProjectModule } from './Project/project.module';

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
  bootstrap: [AppComponent]
})
export class AppModule { }
