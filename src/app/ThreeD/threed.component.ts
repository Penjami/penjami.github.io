import { Component, OnInit } from '@angular/core';
import { ThreeDProject } from '../Project/ThreeDProject/threed-project';

@Component({
  selector: 'app-threed',
  template: `
  <div id="threeDBlock">
    <p id="blockHeader">3D Models</p>
    <app-threed-project *ngFor="let project of projects" [curProject]="project"></app-threed-project>
  </div>
  `,
  styles: []
})
export class ThreeDComponent implements OnInit {
  projects: ThreeDProject[] = [];

  constructor() {
    this.projects.push({name: 'Sword', src: 'assets/sword.jpeg',
                        desc: `A sword model I made using Blender and Substance Painter
                                    `, url: `
                                    <div class="sketchfab-embed-wrapper">
                                    <iframe width="480" height="480"
                                    src="https://sketchfab.com/models/1580576bc1a94658bd58feb8c744107e/embed?autospin=0&autostart=0&camera=0&ui_infos=0&ui_controls=0&ui_stop=0" 
                                    frameborder="0" allowvr allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel=""></iframe>
                                    </div>
                                    `});
  }

  ngOnInit(): void {

  }
}
