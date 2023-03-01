import { property } from './../../models/property';
import { HelperService } from './../../services/helper.service';
import { PropertyService } from './../../services/property.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listing-card',
  templateUrl: './listing-card.component.html',
  styles: [],
})
export class ListingCardComponent {
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
    updateAt: new Date,
    createdAt: new Date
  };
  constructor(
    private propertyService: PropertyService,
    private helperService: HelperService
  ) {}

  deactiveProperty() {
    console.log(this.property.id);
    this.propertyService.deactivePropertyById(this.property.id).subscribe({
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

  removeButtonPress() {
    this.deactiveProperty();
  }
}
