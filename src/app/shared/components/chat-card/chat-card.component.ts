import { UserService } from './../../services/user.service';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { room } from '../../models/room';

@Component({
  selector: 'app-chat-card',
  templateUrl: './chat-card.component.html',
  styles: [],
})
export class ChatCardComponent implements OnInit{
  @Input() room: room = {
    _id: undefined,
    property_id: '',
    property_image: '',
    seller: '',
    buyer: '',
    created_at: new Date(),
    updated_at: new Date(),
    name: '',
    active: false
  };

  @Output() getRoomIdEvent = new EventEmitter<room>();

  constructor(public userService: UserService) {}
  ngOnInit(): void {
    this.room.property_image = 'http://localhost:5000/cloud/image/'+this.room.property_image
  }

  onChatCardClick() {
    this.getRoomIdEvent.emit(this.room._id);
  }
}
