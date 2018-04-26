import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './Home/home.module';
import { ProgrammingModule } from './Programming/programming.module';
import { GamesModule } from './Games/games.module';
import { ThreeDModule } from './threeD/threeD.module';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
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
