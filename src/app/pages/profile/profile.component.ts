import { UserService } from './../../shared/services/user.service';
import { user } from './../../shared/models/user';
import { Component } from '@angular/core';
import { AuthService } from './../../shared/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [],
})
export class ProfileComponent {
  public userData: user = {
    name: '',
    phone: 0,
    email: '',
    password: '',
  };

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {
    this.authService.checkIsLogedIn();
  }

  ngDoCheck(): void {
    this.userData = this.userService.userData;
  }

  setName(value :any){
    this.userData.name = value;
  }

  setPhone(value :any){
    this.userData.phone = value;
  }

  saveProfileButtonClick() {
    this.userService.updateUser(this.userData);
  }
}
