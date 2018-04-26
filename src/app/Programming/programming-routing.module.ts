import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgrammingComponent } from './programming.component';

const appSubRoutes: Routes = [
    { path: 'programming', component: ProgrammingComponent },
];


@NgModule({
    imports: [
        RouterModule.forChild(appSubRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProgrammingRoutingModule {}
