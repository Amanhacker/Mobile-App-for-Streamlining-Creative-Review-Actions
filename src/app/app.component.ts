import { Component } from '@angular/core';
import { CREATIVE_DATA, USER_DATA } from './data';
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {
    constructor() { }

    ngOnInit() {
        if (!localStorage.getItem('creativeList')) {
            console.log('###');
            localStorage.setItem('creativeList', JSON.stringify(CREATIVE_DATA));
        }
        if (!localStorage.getItem('userList')) {
            console.log('###');
            localStorage.setItem('userList', JSON.stringify(USER_DATA));
        }
    }
}
