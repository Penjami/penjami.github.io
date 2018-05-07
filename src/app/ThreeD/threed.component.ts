import { Component, OnInit } from '@angular/core';
import { ThreeDProject } from '../Project/ThreeDProject/threed-project';

@Component({
  selector: 'app-threed',
  template: `
  <div id="threeDBlock">
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
                                    <iframe width="320" height="320" src="https://sketchfab.com/models/1580576bc1a94658bd58feb8c744107e/embed?autospin=0&autostart=0&camera=0&ui_infos=0&ui_controls=0&ui_stop=0" 
                                    frameborder="0" allowvr allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel=""></iframe>
                                     <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> 
                                     <a href="https://sketchfab.com/models/1580576bc1a94658bd58feb8c744107e?utm_medium=embed&utm_source=website&utm_campain=share-popup" 
                                     target="_blank" style="font-weight: bold; color: #1CAAD9;">Sword</a> by 
                                     <a href="https://sketchfab.com/penjami?utm_medium=embed&utm_source=website&utm_campain=share-popup" target="_blank" style="font-weight: bold; 
                                     color: #1CAAD9;">penjami</a> on 
                                     <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campain=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a> 
                                    </p> </div>
                                    `});
  }

  ngOnInit(): void {

  }
}
