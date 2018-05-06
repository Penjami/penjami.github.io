import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div id="top">
    <div id="page-container">
      <header id="page-header">
        <div id="name">
          <p id="name_first">Penjami</p>
          <p id="name_last">Rantakangas</p>
        </div>
      </header>
      <div id="page-content">
        <app-games></app-games>
        <app-programming></app-programming>
        <app-threed></app-threed>
      </div>
    </div>
  </div>
  `,
  styles: []
})
export class AppComponent {
}
