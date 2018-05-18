import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatDialog } from '@angular/material';
import { ThreeDProjectDialogComponent } from './threed-project-dialog.component';
import { ThreeDProject } from './threed-project';

@Component({
  selector: 'app-threed-project',
  template: `
  <div id="project" (click)="openDialog()">
    <img id="thumbnail" width="200" height="150" src="{{curProject.src}}">
    <div>{{curProject.name}}</div>
    <img id="foreground" src="assets/tileBackground.png">
  </div>
  `,
  styles: []
})
export class ThreeDProjectTileComponent implements OnInit, AfterViewInit {
  @Input() curProject: ThreeDProject;

  matDialog: MatDialog;
  trigger = 'inactive';

  constructor(matDialog: MatDialog) {
    this.matDialog = matDialog;
  }

  ngOnInit(): void {  }

  openDialog() {
    this.matDialog.open(ThreeDProjectDialogComponent, {
      width: '800px',
      data: this.curProject
    });
  }

  ngAfterViewInit() {
  }
}
