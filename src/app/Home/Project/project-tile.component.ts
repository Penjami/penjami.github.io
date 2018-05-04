import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatDialog } from '@angular/material';
import { ProjectDialogComponent } from './project-dialog.component';
import { Project } from './project';

@Component({
  selector: 'app-project',
  template: `
  <div id="project" (click)="openDialog()">
    <video autoplay muted loop id="video1" width="200" height="150">
      <source src={{curProject.src}} type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
    <div>{{curProject.name}}</div>
    <img src="assets/tileBackground.png">
  </div>
  `,
  styles: [],
  animations: [
    trigger('triggerProjectDiv', [
      state('inactive', style({
        width: '210px'
      })),
      state('active',   style({
        width: '400px'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]),
    trigger('triggerProjectVideo', [
      state('inactive', style({
        float: 'initial'
      })),
      state('active',   style({
        float: 'right'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]),
    trigger('triggerProjectName', [
      state('inactive', style({
        width: '210px'
      })),
      state('active',   style({
        width: '400px',
        'text-align': 'right'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]),
    trigger('triggerProjectImg', [
      state('inactive', style({
        width: '210px'
      })),
      state('active',   style({
        float: 'right',
        width: '210px'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]),
    trigger('triggerProjectDesc', [
      state('inactive', style({
        display: 'none'
      })),
      state('active',   style({
        float: 'left',
        width: '100px'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]),
    trigger('triggerProjectPlayButton', [
      state('inactive', style({
        display: 'none'
      })),
      state('active',   style({
        float: 'left',
        display: 'block'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class ProjectTileComponent implements OnInit, AfterViewInit {
  @Input() curProject;

  matDialog: MatDialog;
  trigger = 'inactive';

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
