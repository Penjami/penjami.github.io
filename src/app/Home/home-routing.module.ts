import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const appSubRoutes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
];


@NgModule({
    imports: [
        RouterModule.forChild(appSubRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule {}
