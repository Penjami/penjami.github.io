import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material';

@Component({
  selector: 'app-project-dialog',
  template: `
  <h1 mat-dialog-title>Info</h1>
  <div mat-dialog-content>
    <p *ngFor="let key of objectKeys(data)" >{{key + ': ' + data[key]}}</p>
  </div>
  <div mat-dialog-actions><button mat-button [mat-dialog-close]="" cdkFocusInitial>Ok</button></div>
  `,
  styles: []
})
export class ProjectDialogComponent implements OnInit {
  @Input() name;
  @Input() src;
  @Input() desc;
  objectKeys = Object.keys;

  constructor(@Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit(): void {  }
}
