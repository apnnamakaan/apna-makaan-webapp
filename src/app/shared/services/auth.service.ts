import { HelperService } from './helper.service';
import { Router } from '@angular/router';
import { user } from './../models/user';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

import { Apis } from '../utils/apis';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLogedin: boolean = false;
  private tokenRes: any = { token: '' };
  private apiResponse: any = { status: '', message: '' };

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router,
    private helperService: HelperService
  ) {
    this.checkIsLogedIn();
  }

  checkIsLogedIn() {
    if (localStorage.getItem('token') == null) {
      this.isLogedin = false;
      this.router.navigateByUrl('login');
    }
    if (localStorage.getItem('token') != null) {
      this.isLogedin = true;
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.checkIsLogedIn();
  }

  signup(userData: user) {
    this.http.post(Apis.auth.signup, userData).subscribe({
      next: (res) => {
        this.apiResponse = res;
        this.toastr.success(this.apiResponse.message, '', {
          progressBar: true,
        });
        this.router.navigateByUrl('');
      },
      error: (error) => this.helperService.handelError(error),
    });
  }

  login(userData: user) {
    this.http.post(Apis.auth.login, userData).subscribe({
      next: (res) => {
        this.tokenRes = res;
        localStorage.setItem('token', 'bearer' + ' ' + this.tokenRes.token);

        this.toastr.success('login successfully', '', {
          progressBar: true,
        });
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      },
      error: (error) => this.helperService.handelError(error),
    });
  }
}
