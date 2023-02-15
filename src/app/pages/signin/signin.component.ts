import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styles: [],
})
export class SigninComponent {
  bgImage: string = 'assets/images/signinbg.jpg';

  signinData = {
    email: '',
    password: '',
  };

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    if (this.authService.login) {
      this.router.navigate(['/']);
    }
  }

  setEmail(value: any) {
    this.signinData.email = value;
  }
  setPassword(value: any) {
    this.signinData.password = value;
  }

  signInButtonPress() {
    console.log(this.signinData);
  }
}
