import { HelperService } from './../../shared/services/helper.service';
import { UserService } from './../../shared/services/user.service';
import { user } from './../../shared/models/user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../shared/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [],
})
export class ProfileComponent implements OnInit {
  public user: user = {
    name: '',
    phone: 0,
    email: '',
    password: '',
  };

  constructor(
    private authService: AuthService,
    public userService: UserService
  ) {
    this.authService.checkIsLogedIn();
  }
  ngOnInit() {
    this.user = this.userService.user;
  }

  setName(value: any) {
    this.user.name = value;
  }

  setPhone(value: any) {
    this.user.phone = value;
  }

  saveProfileButtonClick() {
    this.userService.updateUser(this.user);
  }
}
