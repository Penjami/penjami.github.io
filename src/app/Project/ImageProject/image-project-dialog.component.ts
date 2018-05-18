import { Component, OnInit, Input, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule, MatButtonModule } from '@angular/material';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ImageProject } from './image-project';

@Component({
  selector: 'app-image-project-dialog',
  template: `
  <div id="dialog">
    <h1 mat-dialog-title id="dialogHeader">{{project.name}}</h1>
    <div mat-dialog-content>
      <div id="dialogText"> {{project.desc}} </div>
      <div [innerHTML]="imgHTML"></div>
    </div>
    <div mat-dialog-actions><button mat-button [mat-dialog-close]="">Ok</button></div>
  </div>
  `,
  styles: []
})
export class ImageProjectDialogComponent implements OnInit {
  objectKeys = Object.keys;
  imgHTML: SafeHtml;

  constructor(@Inject(MAT_DIALOG_DATA) public project: ImageProject, private domSanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.imgHTML = this.domSanitizer.bypassSecurityTrustHtml(
      `<a href="${this.project.url}" >
      <img width="200" height="150" src="{{curProject.src}}">
      </a>`
    );
  }

  getVideoTag() {
  }
}
