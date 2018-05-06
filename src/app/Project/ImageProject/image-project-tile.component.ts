import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatDialog } from '@angular/material';
import { ImageProjectDialogComponent } from './image-project-dialog.component';
import { ImageProject } from './image-project';

@Component({
  selector: 'app-image-project',
  template: `
  <div id="project" (click)="openDialog()">
    <img width="200" height="150" src="{{curProject.src}}">
    <div>{{curProject.name}}</div>
    <img src="assets/tileBackground.png">
  </div>
  `,
  styles: []
})
export class ImageProjectTileComponent implements OnInit, AfterViewInit {
  @Input() curProject: ImageProject;

  matDialog: MatDialog;
  trigger = 'inactive';

  constructor(matDialog: MatDialog) {
    this.matDialog = matDialog;
  }

  ngOnInit(): void {  }

  openDialog() {
    this.matDialog.open(ImageProjectDialogComponent, {
      width: '500px',
      data: this.curProject
    });
  }

  ngAfterViewInit() {
  }
}
