import { user } from './../../models/user';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

import { icons } from '../../utils/icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [],
})
export class NavComponent implements OnInit {
  public icons: any = icons;

  public isVisable: boolean = true;

  public user: user = {
    name: '',
    phone: 0,
    email: '',
    password: '',
  };

  constructor(
    public userService: UserService,
    public authService: AuthService,
    private router: Router
  ) {
    if (this.authService.isLogedin) {
      this.isVisable == true;
    }
    if (!this.authService.isLogedin) {
      this.isVisable == true;
    }
  }
  ngOnInit(): void {}

  greetings(): string {
    var hours = new Date().getHours();

    if (hours > 18) return 'Good evening!';
    if (hours > 12) return 'Good afternoon!';
    if (hours > 4) return 'Good Morning!';
    return 'Mid Night! ';
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
}
