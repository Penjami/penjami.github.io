import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { GamesComponent } from './games.component';
import { ProjectModule } from '../Project/project.module';

@NgModule({
  declarations: [
    GamesComponent,
  ],
  imports: [
    CommonModule,
    ProjectModule
  ],
  exports: [ GamesComponent ]
})
export class GamesModule { }
