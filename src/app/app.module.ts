import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './Home/home.module';
import { ProgrammingModule } from './Programming/programming.module';
import { GamesModule } from './Games/games.module';
import { ThreeDModule } from './ThreeD/threeD.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule,
    AppRoutingModule,
    ProgrammingModule,
    GamesModule,
    ThreeDModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
