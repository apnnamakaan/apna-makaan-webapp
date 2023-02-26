import { HelperService } from './helper.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Injectable, OnInit } from '@angular/core';
import { Apis } from '../utils/apis';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user } from './../models/user';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public apiResponse: any = {
    status: '',
    message: '',
  };

  public verifyResponse: any = {
    email: '',
  };

  public userData: user = {
    name: '',
    phone: 0,
    email: '',
    password: '',
  };

  public headers: any = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    authorization: this.getToken(),
  });

  constructor(
    private authSevices: AuthService,
    private http: HttpClient,
    private helperService: HelperService
  ) {
    if (this.authSevices.isLogedin) this.getUser();
  }

  getToken() {
    return localStorage.getItem('token') || '';
  }

  getUser() {
    this.http
      .get(Apis.user.getUserByToken, {
        headers: this.headers,
      })
      .subscribe({
        next: (res) => {
          this.userData = res as user;
        },
        error: (error) => this.helperService.handelError(error),
      });
  }

  updateUser(userData: user) {
    this.http
      .put(Apis.user.updateUserByEmail + userData.email, userData, {
        headers: this.headers,
      })
      .subscribe({
        next: (res:any) => {
          this.getUser();
          this.helperService.showToastS(res.message);
        },
        error: (error) => this.helperService.handelError(error),
      });
  }
}
