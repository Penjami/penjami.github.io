import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { VideoProjectDialogComponent } from './video-project-dialog.component';
import { VideoProject } from './video-project';

@Component({
  selector: 'app-video-project',
  template: `
  <div id="project" (click)="openDialog()">
    <video autoplay muted loop id="video1" width="200" height="150">
      <source src="{{curProject.src}}" type="video/mp4">No HTML5 supported.
    </video>
    <div>{{curProject.name}}</div>
    <img id="foreground" src="assets/tileBackground.png">
  </div>
  `,
  styles: []
})
export class VideoProjectTileComponent implements OnInit, AfterViewInit {
  @Input() curProject;

  matDialog: MatDialog;

  constructor(matDialog: MatDialog) {
    this.matDialog = matDialog;
  }

  ngOnInit(): void {  }

  openDialog() {
    this.matDialog.open(VideoProjectDialogComponent, {
      width: '800px',
      data: this.curProject
    });
  }

  ngAfterViewInit() {
  }
}
