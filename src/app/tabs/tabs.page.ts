import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IonTabBar, IonTabs } from '@ionic/angular';
import { CREATIVE_DATA, refresh } from '../data';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage {
    creativeList;
    pCount: number;
    aCount: number;
    rCount: number;


    constructor(private router: Router) {
        localStorage.setItem('currentTab', 'tab1');
        let localStorageData = localStorage.getItem('creativeList');
        this.creativeList = localStorageData ? JSON.parse(localStorageData) : CREATIVE_DATA;
        this.pCount = this.creativeList['pending'] ? Array.from(this.creativeList['pending']).length : 0;
        this.aCount = this.creativeList['approved'] ? Array.from(this.creativeList['approved']).length : 0;
        this.rCount = this.creativeList['rejected'] ? Array.from(this.creativeList['rejected']).length : 0;
        refresh.asObservable().subscribe((val) => {
            if (val) {
                let localStorageData = localStorage.getItem('creativeList');
                this.creativeList = localStorageData ? JSON.parse(localStorageData) : CREATIVE_DATA;
                this.pCount = this.creativeList['pending'] ? Array.from(this.creativeList['pending']).length : 0;
                this.aCount = this.creativeList['approved'] ? Array.from(this.creativeList['approved']).length : 0;
                this.rCount = this.creativeList['rejected'] ? Array.from(this.creativeList['rejected']).length : 0;
            }
        })
    }

    ionViewWillEnter() {
        console.log("home enter called");
        let currentTab = localStorage.getItem('currentTab');
        this.router.navigate(['tabs/' + currentTab]);
        let localStorageData = localStorage.getItem('creativeList');
        this.creativeList = localStorageData ? JSON.parse(localStorageData) : CREATIVE_DATA;
        this.pCount = this.creativeList['pending'] ? Array.from(this.creativeList['pending']).length : 0;
        this.aCount = this.creativeList['approved'] ? Array.from(this.creativeList['approved']).length : 0;
        this.rCount = this.creativeList['rejected'] ? Array.from(this.creativeList['rejected']).length : 0;
    }

    ionViewWillLeave() {
        console.log("home leave called")
    }

    tabClicked(tabName: string) {
        localStorage.setItem('currentTab', tabName);
    }

    logout() {
        this.router.navigate(['/']);
    }

    profile() {
        this.router.navigate(['/profile']);
    }

}
