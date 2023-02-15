import { HouseService } from './../../shared/services/house.service';
import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styles: [],
})
export class DiscoverComponent implements OnInit {
  houseList: Array<any> = [];

  filterData = {
    city: '',
    bed: '',
    bath: '',
    garage: '',
    minPrice: '',
    maxPrice: '',
  };

  cityList: Array<any> = ['Nabadwip', 'kolkata'];
  bedList: Array<any> = ['1', '2', '3', '4', '5'];
  bathList: Array<any> = ['1', '2', '3', '4', '5'];
  garageList: Array<any> = ['1', '2', '3'];

  constructor(
    private router: Router,
    private authService: AuthService,
    private houseService: HouseService
  ) {}

  ngOnInit(): void {
    this.houseList = this.houseService.getHouseList(this.filterData);
    if (!this.authService.login) {
      this.router.navigate(['/signin']);
    }
  }

  setCity(value: any) {
    this.filterData.city = value;
  }
  setBed(value: any) {
    this.filterData.bed = value;
  }
  setBath(value: any) {
    this.filterData.bath = value;
  }
  setGarage(value: any) {
    this.filterData.garage = value;
  }
  setMaxPrice(value: any) {
    this.filterData.maxPrice = value;
  }
  setMinPrice(value: any) {
    this.filterData.minPrice = value;
  }

  searchButtonPress() {
    this.houseList = this.houseService.getHouseList(this.filterData);
  }
}
