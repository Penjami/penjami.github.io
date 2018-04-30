import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  template: `
  <div id="project">
    <video autoplay muted loop id="video1" width="200" height="150" #videoPlayer>
      <source src={{src}} type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
    <div>{{name}}</div>
    <img src="assets/tileBackground.png">
  </div>
  `,
  styles: []
})
export class ProjectTileComponent implements OnInit {
  @ViewChild('videoPlayer') videoplayer: any;
  @Input() name;
  @Input() video;
  @Input() src;
  @Input() desc;

  ngOnInit(): void {  }
}
