import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <div style="float:right;">
    </div>
    <h1>Portfolio</h1>
    <nav>
      <a routerLink="/" routerLinkActive="active">Home</a>
      <a routerLink="/games" routerLinkActive="active">Games</a>
      <a routerLink="/programming" routerLinkActive="active">Programming</a>
      <a routerLink="/3d" routerLinkActive="active">3D</a>
    </nav>
    <div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {
}
