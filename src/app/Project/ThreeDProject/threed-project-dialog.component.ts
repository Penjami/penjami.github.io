import { Component, OnInit, Input, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ThreeDProject } from './threed-project';

@Component({
  selector: 'app-threed-project-dialog',
  template: `
  <h1 mat-dialog-title>{{project.name}}</h1>
  <div mat-dialog-content id="dialog">
    <div id="dialogText"> {{project.desc}} </div>
    <div [innerHTML]="modelHTML"></div>
  </div>
  <div mat-dialog-actions><button mat-button [mat-dialog-close]="" cdkFocusInitial>Ok</button></div>
  `,
  styles: []
})
export class ThreeDProjectDialogComponent implements OnInit {
  objectKeys = Object.keys;
  modelHTML: SafeHtml;

  constructor(@Inject(MAT_DIALOG_DATA) public project: ThreeDProject, private domSanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.modelHTML = this.domSanitizer.bypassSecurityTrustHtml(
      `${this.project.url}`
    );
  }

  getVideoTag() {
  }
}
