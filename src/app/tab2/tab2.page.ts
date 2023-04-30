import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { CREATIVE_DATA, refresh } from '../data';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    creativeList: any;
    isAlertOpen = false;
    isreject = false;

    constructor(private router: Router) {
        let localStorageData = localStorage.getItem('creativeList');
        this.creativeList = localStorageData ? JSON.parse(localStorageData) : CREATIVE_DATA;
    }

    ionViewWillEnter() {
        console.log("tab2 enter called");
        let localStorageData = localStorage.getItem('creativeList');
        this.creativeList = localStorageData ? JSON.parse(localStorageData) : CREATIVE_DATA;
    }

    ionViewWillLeave() {
        console.log("tab2 leave called");
    }

    openDetailsWithState(creativeObj: any) {
        console.log('Creative', creativeObj);
        if (creativeObj) {
            let navigationExtras: NavigationExtras = {
                state: {
                    creative: creativeObj,
                    tab: 'tab2'
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
        }, 1500);
    }

    reject(creative: any) {
        let creativeIndex = this.creativeList?.approved.findIndex((item: any) => item.id === creative?.id);
        console.log('creativeIndex', creativeIndex);
        if (creativeIndex !== -1) {
            this.creativeList?.approved.splice(creativeIndex, 1);
        }
        creative.status = 2;
        this.creativeList.rejected = [creative, ...this.creativeList?.rejected];
        localStorage.setItem('creativeList', JSON.stringify(this.creativeList));
        refresh.next(true);
        this.setTimer(true);
    }

}
