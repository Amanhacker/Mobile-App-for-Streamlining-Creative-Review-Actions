import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { USER_DATA, USERS } from '../data';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  username: string;
  userData;
  userList;

  isAdmin: boolean;
  selectedUsername: string;
  selectedUserData: any;

  users = ['aman.barnwal', 'pooja.bhatia', 'rahul.malhotra', 'deepak.saxena'];

  constructor(private router: Router) {
    let localStorageData = localStorage.getItem('userData');
    this.userList = localStorageData ? JSON.parse(localStorageData) : USER_DATA;

    this.username = localStorage.getItem('username')
      ? String(localStorage.getItem('username'))
          .replace('"', '')
          .replace('"', '')
      : 'aman.barnwal';
    this.userData = this.userList[this.username];

    // Check if user is admin
    this.isAdmin = this.userData.role === 'System Admin';

    // If admin, set selectedUsername to current user's username
    this.selectedUsername = this.isAdmin ? this.username : '';
  }

  ngOnInit() {}

  profile() {}

  back() {
    this.router.navigate(['/tabs/tab1']);
  }

  // Function to handle changing of selected username for admin
  onUsernameSelect() {
    this.userData = this.userList[this.selectedUsername];
  }

  onChange(selectedValue: any) {
    console.log(selectedValue.detail.value);
    this.selectedUsername = selectedValue.detail.value;
    console.log(this.selectedUsername);
    this.selectedUserData = this.userList[this.selectedUsername];
    console.log(this.selectedUserData);
  }
}
