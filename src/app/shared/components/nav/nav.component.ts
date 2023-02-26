import { user } from './../../models/user';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [],
})
export class NavComponent {
  public userData: user = {
    name: '',
    phone: 0,
    email: '',
    password: '',
  };

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngDoCheck(): void {
    this.userData = this.userService.userData;
  }

  greetings(): string {
    var hours = new Date().getHours();

    if (hours > 18) return 'Good evening!';
    if (hours > 12) return 'Good afternoon!';
    if (hours > 4) return 'Good Morning!';
    return '';
  }

  getName(): string {
    return this.userData.name;
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
}
