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
  <footer>
  <a href="https://github.com/Penjami"><img src="assets/github-circle.png"></a>
  <a href="https://www.linkedin.com/in/penjami-rantakangas-94b768138/"><img src="assets/linkedin.png"></a>
  </footer>
  `,
  styles: []
})
export class AppComponent {
}
