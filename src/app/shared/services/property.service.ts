import { property } from './../models/property';
import { Injectable } from '@angular/core';
import { Apis } from '../utils/apis';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  public headers: any = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    authorization: this.getToken(),
  });

  constructor(private http: HttpClient) {}

  getToken() {
    return localStorage.getItem('token') || '';
  }

  getProperties(): any {
    return this.http.get(Apis.property.getAllProperties, {
      headers: this.headers,
    });
  }

  getPropertiesByFilter(data: any): any {
    var uri = `?city=${data.city}&bed=${data.bed}&bath=${data.bath}&garage=${data.garage}&min=${data.min}&max=${data.max}`;
    return this.http.get(Apis.property.getPropertiesByFilter + uri, {
      headers: this.headers,
    });
  }

  uploadImage(file: File): any {
    var formData = new FormData();
    formData.append('file', file);
    return this.http.post(Apis.image.uploadImage, formData);
  }

  uploadProperty(property: property) {
    return this.http.post(Apis.property.uploadPropertie, property, {
      headers: this.headers,
    });
  }

  getPropertiesByEmail(email: string): any {
    return this.http.get(Apis.property.getPropertiesByEmail + email, {
      headers: this.headers,
    });
  }

  getPropertyById(id: number): any {
    return this.http.get(Apis.property.getPropertyById + id, {
      headers: this.headers,
    });
  }

  removePropertyById(id: number): any {
    return this.http.delete(Apis.property.removePropertyById + id, {
      headers: this.headers,
    });
  }

  deactivePropertyById(id: number): any {
    return this.http.patch(
      Apis.property.deactivePropertyById + id,
      {},
      { headers: this.headers }
    );
  }
}
