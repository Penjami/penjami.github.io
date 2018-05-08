import { Component, OnInit } from '@angular/core';
import { VideoProject } from '../Project/VideoProject/video-project';

@Component({
  selector: 'app-programming',
  template: `
  <div id="programmingBlock">
    <app-video-project *ngFor="let project of projects" [curProject]="project"></app-video-project>
  </div>
  `,
  styles: []
})
export class ProgrammingComponent implements OnInit {
  projects: VideoProject[] = [];

  constructor() {
    this.projects.push({name: 'Game Engine', src: 'assets/gameEngine.mp4',
                        desc: `A game engine/framework that I made using Java, JavaFX and dyn4j physics library
                                    `, url: 'https://github.com/Penjami/Pelimoottori'});
  }

  ngOnInit(): void {

  }
}
