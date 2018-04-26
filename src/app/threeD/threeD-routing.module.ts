import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThreeDComponent } from './threeD.component';

const appSubRoutes: Routes = [
    { path: '3d', component: ThreeDComponent },
];


@NgModule({
    imports: [
        RouterModule.forChild(appSubRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ThreeDRoutingModule {}
