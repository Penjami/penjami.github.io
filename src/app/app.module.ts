import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './Home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UnityLinkerModule } from 'ng-unity';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    UnityLinkerModule,
    BrowserAnimationsModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
