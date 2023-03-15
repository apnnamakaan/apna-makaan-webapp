import { message } from './../../shared/models/message';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from 'src/app/shared/services/helper.service';
import { UserService } from '../../shared/services/user.service';
import { room } from '../../shared/models/room';
import { MessageService } from '../../shared/services/message.service';
import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [],
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('inputBox') inputBox!: ElementRef;
  @ViewChild('messageBox') messageBoxRef!: ElementRef<HTMLInputElement>;

  public rooms: Array<room> = [];
  public openedRoom: room = {
    id: 0,
    name: '',
    property_id: 0,
    property_image: '',
    seller: '',
    buyer: '',
    messages: [],
    created_at: new Date(),
    updated_at: new Date(),
  };

  constructor(
    private messageService: MessageService,
    public userService: UserService,
    private helperService: HelperService,
    private activatedroute: ActivatedRoute,
    private router: Router
  ) {}
  ngAfterViewChecked(): void {
    this.scrollDown()
  }

  ngOnInit(): void {
    this.messageService.setupSocketConnection();
    this.messageService.sendDataToSocket(this.userService.user.email);
    this.messageService.socket.on('event', (message) => {
      this.refresh();
    });

    if (this.router.url === '/chat') {
      this.getRoomsByUser(this.userService.user.email);
    } else {
      let roomId = this.activatedroute.snapshot.paramMap.get('id');
      this.getRoomById(roomId);
      this.getRoomsByUser(this.userService.user.email);
    }
  }

  getRoomsByUser(user: any) {
    this.messageService.getRoomsByUser(user).subscribe({
      next: (res: Array<room>) => {
        this.rooms = res.sort((a: room, b: room) => {
          return (
            +new Date(b.messages[b.messages.length - 1].created_at) -
            +new Date(a.messages[a.messages.length - 1].created_at)
          );
        });
      },
      error: (error: any) => this.helperService.handelError(error),
    });
  }

  getRoomById(roomId: any) {
    this.messageService.getRoomById(roomId).subscribe({
      next: (res: room) => {
        this.setOpenedRoom(res);
      },
      error: (error: any) => this.helperService.handelError(error),
    });
  }

  setOpenedRoom(value: room) {
    this.openedRoom = value;
    this.router.navigate(['/chat', this.openedRoom.id]);
  }

  sendMessage(message: string) {
    if (message == '') return;

    var messageBody: any = {
      room_id: this.openedRoom.id,
      sender: this.userService.user.email,
      receiver:
        this.openedRoom.seller != this.userService.user.email
          ? this.openedRoom.seller
          : this.openedRoom.buyer,
      text: message,
    };

    this.messageService.sendMessage(messageBody).subscribe({
      next: (res: message) => {
        this.refresh();
        this.inputBox.nativeElement.value = '';
      },
      error: (error: any) => {
        this.helperService.handelError(error);
      },
    });
  }

  refresh() {
    this.scrollDown();
    this.getRoomById(this.openedRoom.id);
    this.getRoomsByUser(this.userService.user.email);
  }

  scrollDown():void {
    try {
    this.messageBoxRef.nativeElement.scrollTop =
      this.messageBoxRef.nativeElement.scrollHeight;
    } catch(err) { }
  }
}
