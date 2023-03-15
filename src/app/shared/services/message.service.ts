import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apis } from '../utils/apis';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  public headers: any = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    authorization: this.getToken(),
  });

  public socket!: Socket;

  constructor(private http: HttpClient) {}

  setupSocketConnection() {
    this.socket = io(Apis.ws);
  }

  sendDataToSocket(email:string){
    this.socket.emit('join',email)
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }


  getToken() {
    return localStorage.getItem('token') || '';
  }

  getRoomsByUser(user: any): any {
    return this.http.get(Apis.chatV2.getRoomsByUser + user, {
      headers: this.headers,
    });
  }

  getRoomById(roomId: any): any {
    return this.http.get(Apis.chatV2.getRoomId + roomId, {
      headers: this.headers,
    });
  }

  createRoom(roomBody: any): any {
    return this.http.post(Apis.chatV2.createRoom, roomBody, {
      headers: this.headers,
    });
  }

  sendMessage(messageBody: any): any {
    return this.http.post(Apis.chatV2.sendMessage, messageBody, {
      headers: this.headers,
    });
  }
}
