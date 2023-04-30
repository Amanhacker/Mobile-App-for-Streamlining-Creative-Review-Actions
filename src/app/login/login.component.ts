import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { USERS, USER_DATA } from '../data';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

    username = "";
    password = "";

    userData: any;

    @Input() data: any;
    @Input() events: any;

    constructor(
        private router: Router,
        private navCtrl: NavController,
        private toastController: ToastController)
    {
        
    }

    ngOnInit() { }

    async login() {

        const user = USERS.find(u => u.username === this.username && u.password === this.password);
        if (user) {
          localStorage.setItem('username', JSON.stringify(this.username));
          localStorage.setItem('password', JSON.stringify(this.password));
        
          let temp = localStorage.getItem('username');
          console.log(temp);

          this.userData = JSON.stringify(USER_DATA);
          localStorage.setItem('userData', this.userData);

          this.navCtrl.navigateForward('/tabs/tab1');
        } else {
          const toast = await this.toastController.create({
            message: 'Invalid username or password',
            duration: 2000,
            position: 'bottom',
          });
          toast.present();
          // alert('Invalid username or password');
        }
    }

}
