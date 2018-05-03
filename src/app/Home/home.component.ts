import { Component, OnInit } from '@angular/core';
import { ProjectTileComponent } from '../Project/project-tile.component';
import { Project } from '../Project/project';

@Component({
  selector: 'app-home',
  template: `
  <div #myDiv>
    <app-project *ngFor="let project of projects" [curProject]="project"></app-project>
  </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  projects: Project[] = [];

  constructor() {
    this.projects.push({name: 'dungeon game', video: true, src: 'assets/dungeonVidTest.mp4',
                        desc: 'A game that I made with unity game engine'});
    this.projects.push({name: 'plaform game', video: true, src: 'assets/platformVid.m4v',
                        desc: 'A game that I made with unity game engine'});
    this.projects.push({name: 'tower defence game', video: true, src: 'assets/villagesVid.m4v',
                        desc: 'A game that I made with unity game engine'});
    this.projects.push({name: 'tornado escape game', video: true, src: 'assets/tornadoVid.m4v',
                        desc: 'A game that I made with unity game engine'});
  }

  ngOnInit(): void {

  }
}
