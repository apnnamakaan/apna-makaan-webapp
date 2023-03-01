import { property } from './../../models/property';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Apis } from '../../utils/apis';
import { icons } from '../../utils/icons';

@Component({
  selector: 'app-house-card',
  templateUrl: './house-card.component.html',
  styles: [],
})
export class HouseCardComponent {
  public icons: any = icons;

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

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.property.image = Apis.image.path + this.property.image;
  }

  navigatePropertyPage() {
    this.router.navigate(['/property', this.property.id]);
  }
}
