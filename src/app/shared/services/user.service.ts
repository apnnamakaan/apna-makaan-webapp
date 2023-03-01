import { HelperService } from './helper.service';
import { Injectable } from '@angular/core';
import { Apis } from '../utils/apis';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user } from './../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user: user = {
    name: '',
    phone: 0,
    email: '',
    password: '',
  };

  public headers: any = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    authorization: this.getToken(),
  });

  constructor(private http: HttpClient, private helperService: HelperService) {
    this.getUser();
  }

  getToken() {
    return localStorage.getItem('token') || '';
  }

  getUser(){
    return this.http
      .get(Apis.user.getUserByToken, {
        headers: this.headers,
      })
      .subscribe({
        next: (res: any) => {
          this.user = res as user;
          this.helperService.reloadCurrentRoute();
        },
        error: (error: any) => this.helperService.handelError(error),
      });
  }

  updateUser(user: user) {
    return this.http
      .put(Apis.user.updateUserByEmail + user.email, user, {
        headers: this.headers,
      })
      .subscribe({
        next: (res: any) => {
          this.helperService.showToastS(res.message);
          this.helperService.reloadCurrentRoute();
        },
        error: (error: any) => this.helperService.handelError(error),
      });
  }
}
