import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <div id="page-container">
      <header id="page-header">
        <div id="name">
          <a routerLink="/" id="name_first">Penjami</a>
          <a routerLink="/" id="name_last">Rantakangas</a>
        </div>
        <!--
        <nav>
          <ul>
            <li><a routerLink="/" routerLinkActive="active">Home</a></li>
            <li><a routerLink="/games" routerLinkActive="active">Games</a></li>
            <li><a routerLink="/programming" routerLinkActive="active">Programming</a></li>
            <li><a routerLink="/3d" routerLinkActive="active">3D</a></li>
          </ul>
        </nav>-->
      </header>
      <div id="page-content">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent {
}
