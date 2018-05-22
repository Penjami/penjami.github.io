import { Component, OnInit, Input, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule, MatButtonModule } from '@angular/material';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ProgrammingProject } from './programming-project';

@Component({
  selector: 'app-programming-project-dialog',
  template: `
  <div id="dialog">
    <h1 mat-dialog-title id="dialogHeader">{{project.name}}</h1>
    <div mat-dialog-content id="dialog">
      <div id="innerHtmlDiv" [innerHTML]="videoHTML"></div>
      <div id="dialogText"> {{project.desc}} </div>
    </div>
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="">Ok</button>
      <a mat-button href="{{project.url}}">Github</a>
    </div>
  </div>
  `,
  styles: []
})
export class ProgrammingProjectDialogComponent implements OnInit {
  objectKeys = Object.keys;
  videoHTML: SafeHtml;

  constructor(@Inject(MAT_DIALOG_DATA) public project: ProgrammingProject, private domSanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.videoHTML = this.domSanitizer.bypassSecurityTrustHtml(
      `
        <video autoplay muted loop id="video1" width="400" height="300">
          <source src="${this.project.vidSrc}" type="video/mp4">No HTML5 supported.
       </video>`
    );
  }

  getVideoTag() {
  }
}
