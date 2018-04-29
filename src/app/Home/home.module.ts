import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ProjectTileComponent } from '../Project/project-tile.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProjectTileComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [],
})
export class HomeModule { }
