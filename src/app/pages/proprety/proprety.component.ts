import { message } from './../../shared/models/message';
import { UserService } from 'src/app/shared/services/user.service';
import { HelperService } from 'src/app/shared/services/helper.service';
import { PropertyService } from './../../shared/services/property.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { property } from 'src/app/shared/models/property';
import { user } from 'src/app/shared/models/user';
import { icons } from 'src/app/shared/utils/icons';
import { room } from '../../shared/models/room';
import { MessageService } from 'src/app/shared/services/message.service';

@Component({
  selector: 'app-proprety',
  templateUrl: './proprety.component.html',
  styles: [],
})
export class PropretyComponent implements OnInit {
  public icons: any = icons;

  public activePropertyId: number = 0;

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
    updateAt: new Date(),
    createdAt: new Date(),
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
    private messageService: MessageService,
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
        // set user details
        this.user = res.user;
      },
      error: (error: any) => this.helperService.handelError(error),
    });
  }

  onFavorite(): void {
    var fData: any = {
      user: this.userService.user.email,
      property: this.property.id,
    };

    this.propertyService.addToFavorite(fData).subscribe({
      next: (res: any) => {
        this.helperService.showToastS(res.message);
        console.warn(res.message);
      },
      error: (error: any) => this.helperService.handelError(error),
    });
  }

  onSendButtonPress(message: any) {
    if (message == '') return;

    // room body
    var roomBody: room = {
      id: 0,
      name: this.property.name,
      property_id: this.property.id,
      property_image: this.property.image,
      seller: this.property.user,
      buyer: this.userService.user.email,
      messages: [],
      created_at: new Date(),
      updated_at: new Date(),
    };

    // create room or get room
    this.messageService.createRoom(roomBody).subscribe({
      next: (res: any) => {
        var room = res as room;

        // message Body
        var messageBody: message = {
          room_id: room.id,
          sender: this.userService.user.email,
          receiver: this.property.user,
          text: message,
          id: 0,
          created_at: new Date(),
          updated_at: new Date(),
        };

        // sending message to room
        this.messageService.sendMessage(messageBody).subscribe({
          next: (res: any) => {
            // message send success redirect to chat room
            this.router.navigate(['/chat', room.id]);
          },
          error: (error: any) => this.helperService.handelError(error),
        });
      },
      error: (error: any) => this.helperService.handelError(error),
    });
  }
}
