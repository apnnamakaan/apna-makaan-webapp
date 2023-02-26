import { property } from './../../models/property';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-house-card',
  templateUrl: './house-card.component.html',
  styles: [],
})
export class HouseCardComponent {
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
    image:
      'https://harshatimbers.com/wp-content/themes/harshatimbers/images/no-img.jpg',
      updateAt: null,
      createdAt: null,
  };

  ngOnInit(): void {
    this.property.image =
      'http://localhost:5000/cloud/image/' + this.property.image;
  }

  //image:"https://harshatimbers.com/wp-content/themes/harshatimbers/images/no-img.jpg"
  contactButtonPress() {
    console.warn(this.property);
  }
}
