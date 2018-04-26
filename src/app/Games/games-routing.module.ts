import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games.component';

const appSubRoutes: Routes = [
    { path: 'games', component: GamesComponent },
];


@NgModule({
    imports: [
        RouterModule.forChild(appSubRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class GamesRoutingModule {}
