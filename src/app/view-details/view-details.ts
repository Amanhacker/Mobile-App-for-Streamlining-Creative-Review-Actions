import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CREATIVE_DATA } from '../data';

@Component({
    selector: 'app-view-details',
    templateUrl: './view-details.html',
    styleUrls: ['./view-details.scss'],
})
export class ViewDetails implements OnInit {

    data: any;
    currentTab: string;
    creativeList: any;
    isAlertOpen = false;
    isreject = false;
    tabMap = { 'tab1': 'pending', 'tab2': 'approved', 'tab3': 'rejected' };

    constructor(private route: ActivatedRoute, private router: Router) {
        this.currentTab = '';
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (this.router?.getCurrentNavigation()?.extras?.state) {
                let stateData = this.router?.getCurrentNavigation()?.extras?.state;
                this.data = stateData ? stateData['creative'] : null;
                this.currentTab = stateData ? stateData['tab'] : '';
            }
        });
        let localStorageData = localStorage.getItem('creativeList');
        this.creativeList = localStorageData ? JSON.parse(localStorageData) : CREATIVE_DATA;
    }

    approve() {
        let tabName = 'pending';
        if (this.currentTab === 'tab1') {
            tabName = 'pending';
        } else if (this.currentTab === 'tab2') {
            tabName = 'approved';
        } else if (this.currentTab === 'tab3') {
            tabName = 'rejected';
        }
        console.log('tabName', tabName);
        let creativeIndex = this.creativeList[tabName].findIndex((item: any) => item.id === this.data?.id);
        console.log('creativeIndex', creativeIndex);
        if (creativeIndex !== -1) {
            this.creativeList[tabName].splice(creativeIndex, 1);
        }
        this.data.status = 1;
        this.creativeList.approved = [this.data, ...this.creativeList?.approved];
        localStorage.setItem('creativeList', JSON.stringify(this.creativeList));
        this.setTimer();
    }

    reject() {
        let tabName = 'pending';
        if (this.currentTab === 'tab1') {
            tabName = 'pending';
        } else if (this.currentTab === 'tab2') {
            tabName = 'approved';
        } else if (this.currentTab === 'tab3') {
            tabName = 'rejected';
        }
        console.log('tabName', tabName);
        let creativeIndex = this.creativeList[tabName].findIndex((item: any) => item.id === this.data?.id);
        console.log('creativeIndex', creativeIndex);
        if (creativeIndex !== -1) {
            this.creativeList[tabName].splice(creativeIndex, 1);
        }
        this.data.status = 2;
        this.creativeList.rejected = [this.data, ...this.creativeList?.rejected];
        localStorage.setItem('creativeList', JSON.stringify(this.creativeList));
        this.setTimer(true);
    }

    setTimer(reject = false) {
        this.isreject = reject;
        this.isAlertOpen = true;
        setTimeout(() => {
            this.isAlertOpen = false;
            this.isreject = false;
            setTimeout(() => {
                if (reject) {
                    this.router.navigate(['tabs/tab3']);
                } else {
                    this.router.navigate(['tabs/tab2']);
                }
            }, 1);
        }, 1500);
    }

}
