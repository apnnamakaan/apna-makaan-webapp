import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apis } from '../utils/apis';
import {  HelperService } from './helper.service';

@Injectable({
  providedIn: 'root',
})
export class MlService {
  public predictRes: any = {
    estimate: 0,
  };

  public headers: any = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    authorization: this.getToken(),
  });

  constructor(private http: HttpClient, private helperService: HelperService) {}

  getToken() {
    return localStorage.getItem('token') || '';
  }

  predictPrice(data: any): any {
    var uri = `?city=${data.city}&area=${data.area}&bed=${data.bed}&bath=${data.bath}&garage=${data.garage}`;
    console.log(Apis.ml.predictPrice + uri);
    this.http
      .get(Apis.ml.predictPrice + uri, {
        headers: this.headers,
      })
      .subscribe({
        next: (res) => {
          this.predictRes = res;
        },
        error: (error) => {
          this.helperService.handelError(error);
        },
      });
  }
}
