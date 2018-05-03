import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ProjectTileComponent } from '../Project/project-tile.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ProjectDialogComponent } from '../Project/project-dialog.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProjectTileComponent,
    ProjectDialogComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [ProjectTileComponent, ProjectDialogComponent]
})
export class HomeModule { }
