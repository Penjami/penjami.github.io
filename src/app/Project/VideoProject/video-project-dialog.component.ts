import { Component, OnInit, Input, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule, MatButtonModule } from '@angular/material';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { VideoProject } from './video-project';

@Component({
  selector: 'app-video-project-dialog',
  template: `
  <div id="dialog">
    <h1 mat-dialog-title id="dialogHeader">{{project.name}}</h1>
    <div mat-dialog-content id="dialog">
      <div id="dialogText"> {{project.desc}} </div>
      <div [innerHTML]="videoHTML"></div>
    </div>
    <div mat-dialog-actions><button mat-button [mat-dialog-close]="" cdkFocusInitial>Ok</button></div>
  </div>
  `,
  styles: []
})
export class VideoProjectDialogComponent implements OnInit {
  objectKeys = Object.keys;
  videoHTML: SafeHtml;

  constructor(@Inject(MAT_DIALOG_DATA) public project: VideoProject, private domSanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.videoHTML = this.domSanitizer.bypassSecurityTrustHtml(
      `<a href="${this.project.url}" >
        <video autoplay muted loop id="video1" width="400" height="300">
          <source src="${this.project.src}" type="video/mp4">No HTML5 supported.
       </video> </a>`
    );
  }

  getVideoTag() {
  }
}
