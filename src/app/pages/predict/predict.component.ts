import { MlService } from './../../shared/services/ml.service';
import { Component } from '@angular/core';
import { AuthService } from './../../shared/services/auth.service';
import { Router } from '@angular/router';
import { GlobalData } from '../../shared/utils/data';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styles: [],
})
export class PredictComponent {
  public data: any = GlobalData;

  public propertyData: any = {
    city: '',
    area: 0,
    bed: 0,
    bath: 0,
    garage: 0,
  };

  public estimatePrice: any;

  constructor(private authService: AuthService, private mlService: MlService) {}
  ngOnInit(): void {
    this.authService.checkIsLogedIn();
  }

  ngDoCheck(): void {
    this.estimatePrice = this.mlService.predictRes.estimate;
  }

  setCity(value: any) {
    this.propertyData.city = value;
  }
  setArea(value: any) {
    this.propertyData.area = value;
  }
  setBed(value: any) {
    this.propertyData.bed = value;
  }
  setBath(value: any) {
    this.propertyData.bath = value;
  }
  setGarage(value: any) {
    this.propertyData.garage = value;
  }

  predictButtonPrice() {
    this.mlService.predictPrice(this.propertyData);
  }
}
