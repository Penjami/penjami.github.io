import { Component, OnInit } from '@angular/core';
import { VideoProjectTileComponent } from '../Project/VideoProject/video-project-tile.component';
import { VideoProject } from '../Project/VideoProject/video-project';

@Component({
  selector: 'app-games',
  template: `
  <div id="gameBlock">
    <app-video-project *ngFor="let project of projects" [curProject]="project"></app-video-project>
  </div>
  `,
  styles: []
})
export class GamesComponent implements OnInit {
  projects: VideoProject[] = [];

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
