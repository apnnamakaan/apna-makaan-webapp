import { message } from 'src/app/shared/models/message';
import { UserService } from 'src/app/shared/services/user.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styles: [],
})
export class MessageBoxComponent {
  @Input() message: message = {
    sender: '',
    receiver: '',
    message: '',
    room: '',
    created_at: new Date,
    updated_at: new Date
  };

  constructor(public userService :UserService){
  }
}
