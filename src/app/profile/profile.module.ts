import { ProfilePage } from './profile.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab1PageRoutingModule } from '../tab1/tab1-routing.module';

@NgModule({
  declarations: [ProfilePage],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ]
})
export class ProfileModule { }
