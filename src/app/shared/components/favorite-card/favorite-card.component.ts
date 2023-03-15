import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, Input } from '@angular/core';
import { property } from '../../models/property';
import { HelperService } from '../../services/helper.service';
import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-favorite-card',
  templateUrl: './favorite-card.component.html',
  styles: [],
})
export class FavoriteCardComponent {
  @Input() property: property = {
    id: 0,
    name: '',
    area: 0,
    bed: 0,
    bath: 0,
    garage: 0,
    city: '',
    price: 0,
    user: '',
    active: false,
    image: '',
    updateAt: new Date(),
    createdAt: new Date(),
  };

  constructor(
    private propertyService: PropertyService,
    private helperService: HelperService,
    private userService: UserService,
    private router: Router
  ) {}

  removeFromFavorite(): void {
    var fData: any = {
      user: this.userService.user.email,
      property: this.property.id,
    };
    this.propertyService.removeFromFavorite(fData).subscribe({
      next: (res: any) => {
        this.helperService.showToastS(res.message);
        this.helperService.reloadCurrentRoute();
      },
      error: (error: any) => {
        console.log(error);
        this.helperService.handelError(error);
      },
    });
  }
  openProperty(): void {
    this.router.navigate(['property', this.property.id]);
  }
}
