import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProjectDialogComponent } from './project-dialog.component';
import { Project } from './project';

@Component({
  selector: 'app-project',
  template: `
  <div id="project" (click)="openDialog()">
    <video autoplay muted loop id="video1" width="200" height="150">
      <source src="{{curProject.src}}" type="video/mp4">No HTML5 supported.
    </video>
    <div>{{curProject.name}}</div>
    <img src="assets/tileBackground.png">
  </div>
  `,
  styles: []
})
export class ProjectTileComponent implements OnInit, AfterViewInit {
  @Input() curProject;

  matDialog: MatDialog;

  constructor(matDialog: MatDialog) {
    this.matDialog = matDialog;
  }

  ngOnInit(): void {  }

  openDialog() {
    this.matDialog.open(ProjectDialogComponent, {
      width: '500px',
      data: this.curProject
    });
  }

  ngAfterViewInit() {
  }
}
