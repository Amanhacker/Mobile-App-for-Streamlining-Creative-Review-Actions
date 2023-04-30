import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewDetails } from './view-details';

const routes: Routes = [
    {
        path: '',
        component: ViewDetails
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ViewDetailsRoutingModule { }