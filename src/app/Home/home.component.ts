import { Component, OnInit } from '@angular/core';
import { ProjectTileComponent } from '../Project/project-tile.component';
import { Project } from '../Project/project';

@Component({
  selector: 'app-home',
  template: `
  <div>
    <app-project *ngFor="let project of projects"
      [name]="project.name" [video]="project.video" [src]="project.src" [desc]="project.desc"></app-project>
  </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  projects: Project[] = [];

  constructor() {
    this.projects.push({name: 'dungeon game', video: true, src: '../../assets/dungeonVidTest.mp4',
                         desc: 'A game that I made with unity game engine'});
    this.projects.push({name: 'dungeon game', video: true, src: '../../assets/dungeonVidTest.mp4',
                         desc: 'A game that I made with unity game engine'});
    this.projects.push({name: 'dungeon game', video: true, src: '../../assets/dungeonVidTest.mp4',
                         desc: 'A game that I made with unity game engine'});
    this.projects.push({name: 'dungeon game', video: true, src: '../../assets/dungeonVidTest.mp4',
                         desc: 'A game that I made with unity game engine'});
    this.projects.push({name: 'dungeon game', video: true, src: '../../assets/dungeonVidTest.mp4',
                         desc: 'A game that I made with unity game engine'});
    this.projects.push({name: 'dungeon game', video: true, src: '../../assets/dungeonVidTest.mp4',
                         desc: 'A game that I made with unity game engine'});
    this.projects.push({name: 'dungeon game', video: true, src: '../../assets/dungeonVidTest.mp4',
                         desc: 'A game that I made with unity game engine'});
    this.projects.push({name: 'dungeon game', video: true, src: '../../assets/dungeonVidTest.mp4',
                         desc: 'A game that I made with unity game engine'});
  }

  ngOnInit(): void {

  }
}
