import { LoginComponent } from './login/login.component';
import { TabsPage } from './tabs/tabs.page';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ProfilePage } from './profile/profile.page';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [AppComponent, LoginComponent, ProfilePage],
    imports: [BrowserModule, FormsModule, CommonModule, IonicModule.forRoot(), AppRoutingModule],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
    bootstrap: [AppComponent],
})
export class AppModule { }
