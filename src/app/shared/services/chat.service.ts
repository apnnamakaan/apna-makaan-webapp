import { room } from './../models/room';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { message } from '../models/message';
import { Apis } from '../utils/apis';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  public headers: any = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    authorization: this.getToken(),
  });

  constructor(private http: HttpClient) {}

  getToken() {
    return localStorage.getItem('token') || '';
  }

  createRoom(room: any): any {
    return this.http.post(Apis.chat.createRoom, room, {
      headers: this.headers,
    });
  }

  getRoomsByEmail(email: string): any {
    return this.http.get(Apis.chat.getRoomsByEmail +email, {
      headers: this.headers,
    });
  }

  sendMessage(message: message):any {
    return this.http.post(Apis.chat.sendMessage, message, {
      headers: this.headers,
    });
  }

  getMessagesByRoomId(roomId: string):any {
    return this.http.get(Apis.chat.getMessagesByRoomId + roomId, {
      headers: this.headers,
    });
  }
}
