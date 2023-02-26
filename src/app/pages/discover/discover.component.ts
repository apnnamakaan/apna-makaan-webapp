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
    private activatedroute: ActivatedRoute,
    private router: Router,
    private propertyService: PropertyService,
    private helperService: HelperService
  ) {
    this.authService.checkIsLogedIn();
  }

  ngOnInit(): void {
    // this.activatedroute.queryParams.subscribe((params) => {
    //   if (!this.helperService.handelEmptyFilds(params, false)) {
    //     this.getPropertiesByFilter(params);
    //   } else {
    //     this.getProperties();
    //   }
    // });

    this.getProperties();
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
    console.log('sertt + ' + value);
    this.filterData.min = value as number;
  }

  getProperties() {
    this.propertyService.getProperties().subscribe({
      next: (res: Array<property>) => 
        this.properties = res.sort((b: property, a: property) => {
          return +new Date(a.createdAt) - +new Date(b.createdAt);
        }),
      error: (error: any) => this.helperService.handelError(error),
    });
  }

  getPropertiesByFilter(filter: any) {
    if (this.helperService.handelEmptyFilds(this.filterData)) return;
    this.propertyService.getPropertiesByFilter(filter).subscribe({
      next: (res: Array<property>) => this.properties = res.sort((b: property, a: property) => {
        return +new Date(a.createdAt) - +new Date(b.createdAt);
      }),
      error: (error: any) => this.helperService.handelError(error),
    });
  }

  searchButtonPress() {
    this.getPropertiesByFilter(this.filterData);
  }
}
