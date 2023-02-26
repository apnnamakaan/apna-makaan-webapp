import { user } from './../../shared/models/user';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [],
})
export class SignupComponent {
  public  bgImage: string = 'assets/images/signupbg.jpg';

  public userData:user ={
    name: '',
    phone: 0,
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {
    if(this.authService.isLogedin) this.router.navigateByUrl("/")
  }

  setName(value: any) {
    this.userData.name = value;
  }
  setPhone(value: any) {
    this.userData.phone = value;
  }
  setEmail(value: any) {
    this.userData.email = value;
  }
  setPassword(value: any) {
    this.userData.password = value;
  }

  signupButtonPress() {
    this.authService.signup(this.userData);
  }
}
