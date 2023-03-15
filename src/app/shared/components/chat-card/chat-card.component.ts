import { UserService } from './../../services/user.service';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { room } from '../../models/room';

@Component({
  selector: 'app-chat-card',
  templateUrl: './chat-card.component.html',
  styles: [],
})
export class ChatCardComponent{
  @Input() room: room = {
    id: 0,
    property_id: 0,
    property_image: '',
    seller: '',
    buyer: '',
    created_at: new Date(),
    updated_at: new Date(),
    name: '',
    messages: [],
  };

  @Output() getOpenedRoom = new EventEmitter<room>();

  constructor(public userService: UserService) {}

  onChatCardClick() {
    this.getOpenedRoom.emit(this.room);
  }
}
