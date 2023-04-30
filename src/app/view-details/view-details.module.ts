import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ViewDetails } from './view-details';
import { ViewDetailsRoutingModule } from './view-details-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ViewDetailsRoutingModule
    ],
    declarations: [ViewDetails]
})
export class ViewDetailsModule { }