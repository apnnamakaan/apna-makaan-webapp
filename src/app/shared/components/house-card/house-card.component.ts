import { Component } from '@angular/core';

@Component({
  selector: 'app-house-card',
  templateUrl: './house-card.component.html',
  styles: [],
})
export class HouseCardComponent {
  houseCardData = {
    owner: 'Atanu Debanth',
    city: 'Nabadwip',
    price: '20',
  };
  contactButtonPress() {
    console.warn('con');
  }
}
