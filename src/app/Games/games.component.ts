import { Component, OnInit } from '@angular/core';
import { VideoProjectTileComponent } from '../Project/VideoProject/video-project-tile.component';
import { VideoProject } from '../Project/VideoProject/video-project';

@Component({
  selector: 'app-games',
  template: `
  <div id="gameBlock">
    <p id="blockHeader">Games</p>
    <app-video-project *ngFor="let project of projects" [curProject]="project"></app-video-project>
  </div>
  `,
  styles: []
})
export class GamesComponent implements OnInit {
  projects: VideoProject[] = [];

  constructor() {
    this.projects.push({name: 'dungeon game', src: 'assets/dungeonVidTest.mp4',
                        desc: `A procedurally generated dungeon exploring game that I made with unity game engin.`,
                         url: 'assets/pixel3dtest/index.html'});
    this.projects.push({name: 'plaform game', src: 'assets/platformVid.m4v',
                        desc: 'A 2d platforming game that I made with unity game engine', url: 'assets/2dplatform/index.html'});
    this.projects.push({name: 'tower defence game', src: 'assets/villagesVid.m4v',
                        desc: 'A simple tower defence game that I made with unity game engine', url: 'assets/villages/index.html'});
    this.projects.push({name: 'tornado escape game', src: 'assets/tornadoVid.m4v',
                        desc: `A game, where you try to avoid a tornado in an island by running around fast.
                         The game was made with unity game engine`, url: 'assets/tornado/index.html'});
    this.projects.push({name: 'Vapriball', src: 'assets/vapriball.mp4',
                        desc: `A topdown gyroscope controlled puzzle/adventure game made for Android.
                        It was a first year school project in TAMK, where I was the primary programmer. It was commisioned by
                        a local museum and it was made using Java and LibGDX.`,
                        url: 'https://play.google.com/store/apps/details?id=fi.tamk.tiko.contego&hl=en'});
  }

  ngOnInit(): void {

  }
}
