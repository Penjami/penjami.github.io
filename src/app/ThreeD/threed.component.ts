import { Component, OnInit } from '@angular/core';
import { ImageProjectTileComponent } from '../Project/ImageProject/image-project-tile.component';
import { ImageProject } from '../Project/ImageProject/image-project';

@Component({
  selector: 'app-threed',
  template: `
  <div id="threeDBlock">
    <app-image-project *ngFor="let project of projects" [curProject]="project"></app-image-project>
  </div>
  `,
  styles: []
})
export class ThreeDComponent implements OnInit {
  projects: ImageProject[] = [];

  constructor() {

  }

  ngOnInit(): void {

  }
}
