import { icons } from 'src/app/shared/utils/icons';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from './../../shared/services/helper.service';
import { UserService } from './../../shared/services/user.service';
import { ChatService } from './../../shared/services/chat.service';
import { room } from './../../shared/models/room';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { message } from 'src/app/shared/models/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [],
})
export class ChatComponent implements OnInit {
  public rooms: Array<room> = [];
  public messages: Array<message> = [];

  public icons = icons;
  public hideChatBox: boolean = false;

  public activeRoom: room = {
    _id: undefined,
    name: '',
    property_id: '',
    property_image: '',
    seller: '',
    buyer: '',
    created_at: new Date(),
    updated_at: new Date(),
    active: false,
  };

  private activeRoomId: string = '';
  public activeReciver: string = '';

  @ViewChild('messageContainer') mContainer!: ElementRef;

  @ViewChild('inputbox') inputBox: any;

  constructor(
    private chatService: ChatService,
    private userService: UserService,
    private helperService: HelperService,
    private activatedroute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.router.url === '/chat') {
      this.getRooms(this.userService.user.email);
      this.hideChatBox = false;
    } else {
      let roomId = this.activatedroute.snapshot.paramMap.get('id');
      this.hideChatBox = true;
      this.activeRoomId = roomId as string;
      this.getRooms(this.userService.user.email);
      this.getMessages(this.activeRoomId);
    }
  }

  getRooms(userEmail: any) {
    this.chatService.getRoomsByEmail(userEmail).subscribe({
      next: (res: Array<room>) => {
        if (this.router.url !== '/chat') {
          this.activeRoom = res.filter(
            (room) => room._id == this.activeRoomId
          )[0] as room;
          this.setActiveReciver();
        }
        this.rooms = res.sort((b: room, a: room) => {
          return +new Date(a.created_at) - +new Date(b.created_at);
        });
      },
      error: (error: any) => this.helperService.handelError(error),
    });
  }

  getMessages(roomId: any) {
    this.chatService.getMessagesByRoomId(roomId).subscribe({
      next: (res: Array<message>) => {
        this.messages = res.sort((a: message, b: message) => {
          return +new Date(a.created_at) - +new Date(b.created_at);
        });
      },
      error: (error: any) => this.helperService.handelError(error),
    });
  }

  onChatCardClick(roomId: any) {
    this.activeRoomId = roomId as string;
    this.getMessages(roomId);
    this.getRooms(this.userService.user.email);
    this.setActiveReciver();

    this.router.navigate(['/chat', this.activeRoomId]);
  }

  setActiveReciver() {
    this.activeReciver =
      this.userService.user.email == this.activeRoom.buyer
        ? this.activeRoom.seller
        : this.activeRoom.buyer;
  }

  onRefresh() {
    this.getRooms(this.userService.user.email);
    this.getMessages(this.activeRoomId);
  }

  // send button press
  sendMessage(message: any) {

    if(message == '') return;

    this.activeRoom = this.rooms.filter(
      (room) => room._id == this.activeRoomId
    )[0] as room;

    this.activeReciver =
      this.userService.user.email == this.activeRoom.buyer
        ? this.activeRoom.seller
        : this.activeRoom.buyer;

    var messageBody: any = {
      room: this.activeRoom._id,
      sender: this.userService.user.email,
      receiver: this.activeReciver,
      message: message,
    };

    this.chatService.sendMessage(messageBody).subscribe({
      next: (res: any) => {
        this.getMessages(this.activeRoom._id);
        this.scrollDown();
        this.inputBox.nativeElement.value = '';
      },
      error: (error: any) => this.helperService.handelError(error),
    });
  }

  scrollDown() {
    this.mContainer.nativeElement.scrollTop =
      this.mContainer.nativeElement.scrollHeight;
  }
}
