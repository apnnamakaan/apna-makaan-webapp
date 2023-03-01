import { message } from 'src/app/shared/models/message';
import { UserService } from 'src/app/shared/services/user.service';
import { HelperService } from 'src/app/shared/services/helper.service';
import { PropertyService } from './../../shared/services/property.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { property } from 'src/app/shared/models/property';
import { user } from 'src/app/shared/models/user';
import { icons } from 'src/app/shared/utils/icons';
import { ChatService } from 'src/app/shared/services/chat.service';
import { room } from '../../shared/models/room';
import { Apis } from 'src/app/shared/utils/apis';

@Component({
  selector: 'app-proprety',
  templateUrl: './proprety.component.html',
  styles: [],
})
export class PropretyComponent implements OnInit {
  public icons: any = icons;

  public activePropertyId: number = 0;

  private originalImage: string = '';

  public property: property = {
    id: 0,
    name: '',
    area: 0,
    bed: 0,
    bath: 0,
    garage: 0,
    city: '',
    price: 0,
    user: '',
    image: '',
    active: false,
    updateAt: new Date,
    createdAt:new Date,
  };

  public user: user = {
    name: '',
    phone: 0,
    email: '',
    password: '',
  };

  constructor(
    private activatedroute: ActivatedRoute,
    private propertyService: PropertyService,
    private helperService: HelperService,
    private chatService: ChatService,
    public userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activePropertyId = this.activatedroute.snapshot.paramMap.get(
      'id'
    ) as unknown as number;
    this.getPropertyById(this.activePropertyId);
  }

  getPropertyById(id: number) {
    this.propertyService.getPropertyById(id).subscribe({
      next: (res: any) => {
        // set property details
        this.property = res.property;
        //store original image path
        this.originalImage = this.property.image;
        //set local image path
        this.property.image = Apis.image.path + this.property.image;

        // set user details
        this.user = res.user;
      },
      error: (error: any) => this.helperService.handelError(error),
    });
  }

  onSendButtonPress(message: any) {

    if(message=='') return;

    // room body
    var roomBody: any = {
      name: this.property.name,
      property_id: this.property.id.toString(),
      property_image: this.originalImage,
      seller: this.property.user,
      buyer: this.userService.user.email,
    };

    // create room or get room
    this.chatService.createRoom(roomBody).subscribe({
      next: (res: any) => {
        var roomId = res.room as string;

        // message Body
        var messageBody: any = {
          room: roomId,
          sender: this.userService.user.email,
          receiver: this.property.user,
          message: message,
        };

        // sending message to room
        this.chatService.sendMessage(messageBody).subscribe({
          next: (res: any) => {
            // message send success redirect to chat room
            this.router.navigate(['/chat', roomId]);
          },
          error: (error: any) => this.helperService.handelError(error),
        });
      },
      error: (error: any) => this.helperService.handelError(error),
    });
  }
}
