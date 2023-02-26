import { user } from './../../shared/models/user';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styles: [],
})
export class SigninComponent {
  public bgImage: string = 'assets/images/signinbg.jpg';

  public userData: user = {
    email: '',
    password: '',
    name: '',
    phone: 0,
  };

  constructor(private authService: AuthService, private router: Router) {
    if (this.authService.isLogedin) this.router.navigateByUrl('/');
  }

  setEmail(value: any) {
    this.userData.email = value;
  }
  setPassword(value: any) {
    this.userData.password = value;
  }

  loginButtonPress() {
    this.authService.login(this.userData);
  }
}
