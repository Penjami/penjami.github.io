import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ThreeDComponent } from './threed.component';
import { ProjectModule } from '../Project/project.module';

@NgModule({
  declarations: [
    ThreeDComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ProjectModule
  ],
  exports: [ThreeDComponent]
})
export class ThreeDModule { }
