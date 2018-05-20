import { Component, OnInit } from '@angular/core';
import { ProgrammingProject } from '../Project/ProgrammingProject/programming-project';

@Component({
  selector: 'app-programming',
  template: `
  <div id="programmingBlock">
    <p id="blockHeader">Programming Projects</p>
    <app-programming-project *ngFor="let project of projects" [curProject]="project"></app-programming-project>
  </div>
  `,
  styles: []
})
export class ProgrammingComponent implements OnInit {
  projects: ProgrammingProject[] = [];

  constructor() {
    this.projects.push({name: 'Java Game Engine', src: 'assets/gameEngine.mp4',
                        desc: `A game engine / framework that I made using Java, JavaFX and dyn4j physics library
                                    `, url: 'https://github.com/Penjami/Pelimoottori'});
  }

  ngOnInit(): void {

  }
}
