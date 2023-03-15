import { message } from 'src/app/shared/models/message';
import { UserService } from 'src/app/shared/services/user.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styles: [],
})
export class MessageCardComponent {
  @Input() message: message = {
    id: 0,
    room_id: 0,
    sender: '',
    receiver: '',
    text: '',
    created_at: new Date(),
    updated_at: new Date(),
  };

  constructor(public userService: UserService) {}
}
