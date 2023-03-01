import { UserService } from 'src/app/shared/services/user.service';
import { PropertyService } from './../../shared/services/property.service';
import { Component } from '@angular/core';
import { AuthService } from './../../shared/services/auth.service';
import { GlobalData } from '../../shared/utils/data';
import { property } from 'src/app/shared/models/property';
import { HelperService } from 'src/app/shared/services/helper.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styles: [],
})
export class SellComponent {
  data: any = GlobalData;

  public property: property = {
    id: 100,
    name: '',
    area: 0,
    bed: 0,
    bath: 0,
    garage: 0,
    city: '',
    price: 0,
    user: '',
    active: true,
    image: '',
    updateAt: new Date(),
    createdAt: new Date(),
  };

  constructor(
    private authService: AuthService,
    private propertyService: PropertyService,
    private userService: UserService,
    private helperService: HelperService
  ) {
    this.authService.checkIsLogedIn();
  }

  // Setter for body
  setName(value: any) {
    this.property.name = value as string;
  }
  setCity(value: any) {
    this.property.city = value as string;
  }
  setBed(value: any) {
    this.property.bed = value as number;
  }
  setBath(value: any) {
    this.property.bath = value as number;
  }
  setGarage(value: any) {
    this.property.garage = value as number;
  }
  setArea(value: any) {
    this.property.area = value as number;
  }
  setPrice(value: any) {
    this.property.price = value as number;
  }

  setFile(value: any) {
    this.uploadImage(value as File);
  }

  uploadProperty() {
    //set user Email
    this.property.user = this.userService.user.email;
    // handel Empty fields
    if (this.helperService.handelEmptyFilds(this.property)) return;

    // upload property
    this.propertyService.uploadProperty(this.property).subscribe({
      next: (res: any) => {
        this.helperService.showToastS(res.message);
        this.helperService.reloadCurrentRoute();
      },
      error: (error: any) => {
        this.helperService.handelError(error);
      },
    });
  }

  uploadImage(file: File) {
    // handel Empty image
    if (file == undefined) {
      this.helperService.showToastW('upload image');
      return;
    }
    //upload image
    this.propertyService.uploadImage(file).subscribe({
      next: (res: any) => {
        this.property.image = res.image as string;
      },
      error: (error: any) => {
        this.helperService.handelError(error);
      },
    });
  }
}
