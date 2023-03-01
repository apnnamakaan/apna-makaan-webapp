import { HelperService } from './../../shared/services/helper.service';
import { PropertyService } from './../../shared/services/property.service';
import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalData } from '../../shared/utils/data';
import { property } from 'src/app/shared/models/property';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styles: [],
})
export class DiscoverComponent implements OnInit {
  public properties: Array<property> = [];

  public data: any = GlobalData;

  public filterData: any = {
    bed: 0,
    garage: 0,
    bath: 0,
    city: '',
    min: 0,
    max: 0,
  };

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private propertyService: PropertyService,
    private helperService: HelperService
  ) {
    this.authService.checkIsLogedIn();
  }
  //http://localhost:4200/properties?city=Nabadwip&bed=1&bath=1&garage=1&min=0&max=70000
  ngOnInit(): void {
    if (this.router.url === '/') {
      this.getProperties();
    } else {
      this.filterData.city = this.activatedRoute.snapshot.paramMap.get(
        'city'
      ) as unknown as string;
      this.filterData.bed = this.activatedRoute.snapshot.paramMap.get(
        'bed'
      ) as unknown as string;
      this.filterData.bath = this.activatedRoute.snapshot.paramMap.get(
        'bath'
      ) as unknown as string;
      this.filterData.garage = this.activatedRoute.snapshot.paramMap.get(
        'garage'
      ) as unknown as string;
      this.filterData.min = this.activatedRoute.snapshot.paramMap.get(
        'min'
      ) as unknown as string;
      this.filterData.max = this.activatedRoute.snapshot.paramMap.get(
        'max'
      ) as unknown as string;

      this.getPropertiesByFilter();
      console.log('cal');
    }
  }

  setCity(value: any) {
    this.filterData.city = value as string;
  }
  setBed(value: any) {
    this.filterData.bed = value as number;
  }
  setBath(value: any) {
    this.filterData.bath = value as number;
  }
  setGarage(value: any) {
    this.filterData.garage = value as number;
  }
  setMaxPrice(value: any) {
    this.filterData.max = value as number;
  }
  setMinPrice(value: any) {
    this.filterData.min = value as number;
  }

  getProperties() {
    this.propertyService.getProperties().subscribe({
      next: (res: Array<property>) =>
        (this.properties = res.sort((b: property, a: property) => {
          return +new Date(a.createdAt) - +new Date(b.createdAt);
        })),
      error: (error: any) => this.helperService.handelError(error),
    });
  }

  getPropertiesByFilter() {
    this.propertyService.getPropertiesByFilter(this.filterData).subscribe({
      next: (res: Array<property>) => {
        this.properties = res.sort((b: property, a: property) => {
          return +new Date(a.createdAt) - +new Date(b.createdAt);
        });
      },
      error: (error: any) => this.helperService.handelError(error),
    });
  }

  searchButtonPress() {
    this.getPropertiesByFilter();
    this.router.navigate([
      '/properties',
      this.filterData.city,
      this.filterData.bed,
      this.filterData.bath,
      this.filterData.garage,
      this.filterData.min,
      this.filterData.max,
    ]);
  }
}
