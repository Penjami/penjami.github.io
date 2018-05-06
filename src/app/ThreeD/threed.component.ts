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
    this.projects.push({name: 'dungeon game', src: 'assets/dungeonVidTest.mp4',
                        desc: 'A game that I made with unity game engine', url: 'assets/pixel3dtest/index.html'});
    this.projects.push({name: 'plaform game', src: 'assets/platformVid.m4v',
                        desc: 'A game that I made with unity game engine', url: 'assets/2dplatform/index.html'});
    this.projects.push({name: 'tower defence game', src: 'assets/villagesVid.m4v',
                        desc: 'A game that I made with unity game engine', url: 'assets/villages/index.html'});
    this.projects.push({name: 'tornado escape game', src: 'assets/tornadoVid.m4v',
                        desc: 'A game that I made with unity game engine', url: 'assets/tornado/index.html'});
  }

  ngOnInit(): void {

  }
}
