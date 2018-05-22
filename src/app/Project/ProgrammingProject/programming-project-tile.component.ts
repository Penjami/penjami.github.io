import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProgrammingProjectDialogComponent } from './programming-project-dialog.component';

@Component({
  selector: 'app-programming-project',
  template: `
  <div id="project" (click)="openDialog()">
    <img src="{{curProject.imgSrc}}" width="200" height="160">
    <div>{{curProject.name}}</div>
    <img id="foreground" src="assets/tileBackground.png">
  </div>
  `,
  styles: []
})
export class ProgrammmingProjectTileComponent implements OnInit, AfterViewInit {
  @Input() curProject;

  matDialog: MatDialog;

  constructor(matDialog: MatDialog) {
    this.matDialog = matDialog;
  }

  ngOnInit(): void {  }

  openDialog() {
    this.matDialog.open(ProgrammingProjectDialogComponent, {
      width: '800px',
      data: this.curProject,
      autoFocus: false
    });
  }

  ngAfterViewInit() {
  }
}
