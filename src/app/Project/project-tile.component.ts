import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  template: `
  <div id="project">
    <video loop id="video1" width="200" #videoPlayer>
      <source src={{src}} type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
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

  ngOnInit(): void {
    this.videoplayer.nativeElement.play();
  }
}
