import { Component, OnInit } from '@angular/core';
import { ProjectTileComponent } from './GameProject/project-tile.component';
import { Project } from './GameProject/project';

@Component({
  selector: 'app-games',
  template: `
  <div id="gameBlock">
    <app-project *ngFor="let project of projects" [curProject]="project"></app-project>
  </div>
  `,
  styles: []
})
export class GamesComponent implements OnInit {
  projects: Project[] = [];

  constructor() {
    this.projects.push({name: 'dungeon game', video: true, src: 'assets/dungeonVidTest.mp4',
                        desc: 'A game that I made with unity game engine', gameUrl: 'assets/pixel3dtest/index.html'});
    this.projects.push({name: 'plaform game', video: true, src: 'assets/platformVid.m4v',
                        desc: 'A game that I made with unity game engine', gameUrl: 'assets/2dplatform/index.html'});
    this.projects.push({name: 'tower defence game', video: true, src: 'assets/villagesVid.m4v',
                        desc: 'A game that I made with unity game engine', gameUrl: 'assets/villages/index.html'});
    this.projects.push({name: 'tornado escape game', video: true, src: 'assets/tornadoVid.m4v',
                        desc: 'A game that I made with unity game engine', gameUrl: 'assets/tornado/index.html'});
  }

  ngOnInit(): void {

  }
}
