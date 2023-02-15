import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  houseList: Array<any> = [1, 2, 5, 4, 1, 6];
  getHouseList(filterData: any) {
    console.log(filterData);
    return this.houseList;
  }
  constructor() {}
}
