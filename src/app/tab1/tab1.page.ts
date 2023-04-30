import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { CREATIVE_DATA, refresh } from '../data';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    creativeList: any;
    isAlertOpen = false;
    isreject = false;

    constructor(private router: Router) {
        let localStorageData = localStorage.getItem('creativeList');
        this.creativeList = localStorageData ? JSON.parse(localStorageData) : CREATIVE_DATA;
    }

    ionViewWillEnter() {
        console.log("tab1 enter called")
        let localStorageData = localStorage.getItem('creativeList');
        this.creativeList = localStorageData ? JSON.parse(localStorageData) : CREATIVE_DATA;
    }

    ionViewDidEnter() {
        console.log("tab1 did enter called")
        let localStorageData = localStorage.getItem('creativeList');
        this.creativeList = localStorageData ? JSON.parse(localStorageData) : CREATIVE_DATA;
    }

    ionViewWillLeave() {
        console.log("tab1 leave called")
    }

    openDetailsWithState(creativeObj: any) {
        if (creativeObj) {
            let navigationExtras: NavigationExtras = {
                state: {
                    creative: creativeObj,
                    tab: 'tab1'
                }
            };
            this.router.navigate(['viewDetails'], navigationExtras);
        }
    }

    setTimer(reject = false) {
        this.isreject = reject;
        this.isAlertOpen = true;
        setTimeout(() => {
            this.isAlertOpen = false;
            this.isreject = false;
            setTimeout(() => {
                this.router.navigate(['tabs']);
            }, 1);
        }, 1000);
    }

    approve(creative: any) {
        let creativeIndex = this.creativeList?.pending.findIndex((item: any) => item.id === creative?.id);
        console.log('creativeIndex', creativeIndex);
        if (creativeIndex !== -1) {
            this.creativeList?.pending.splice(creativeIndex, 1);
        }
        creative.status = 1;
        this.creativeList.approved = [creative, ...this.creativeList?.approved];
        console.log('Updated Creative List', this.creativeList);
        localStorage.setItem('creativeList', JSON.stringify(this.creativeList));
        refresh.next(true);
        this.setTimer();
    }

    reject(creative: any) {
        let creativeIndex = this.creativeList?.pending.findIndex((item: any) => item.id === creative?.id);
        console.log('creativeIndex', creativeIndex);
        if (creativeIndex !== -1) {
            this.creativeList?.pending.splice(creativeIndex, 1);
        }
        creative.status = 2;
        this.creativeList.rejected = [creative, ...this.creativeList?.rejected];
        localStorage.setItem('creativeList', JSON.stringify(this.creativeList));
        refresh.next(true);
        this.setTimer(true);
    }

}
