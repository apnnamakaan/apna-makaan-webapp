import { HelperService } from './../../shared/services/helper.service';
import { PropertyService } from './../../shared/services/property.service';
import { Component } from '@angular/core';
import { AuthService } from './../../shared/services/auth.service';
import { property } from 'src/app/shared/models/property';

@Component({
  selector: 'app-your-listing',
  templateUrl: './your-listing.component.html',
  styles: [],
})
export class YourListingComponent {
  public properties: Array<property> = [];

  constructor(
    private helperService: HelperService,
    private authService: AuthService,
    private propertyService: PropertyService
  ) {
    this.authService.checkIsLogedIn();
  }
  ngOnInit(): void {
    this.getPropertiesByEmail();
  }

  getPropertiesByEmail() {
    this.propertyService.getPropertiesByEmail('admin@gmail.com').subscribe({
      next: (res: Array<property>) => {
        this.properties = res.sort((b: property, a: property) => {
          return +new Date(a.createdAt) - +new Date(b.createdAt);
        });
      },
      error: (error: any) => {
        this.helperService.handelError(error);
      },
    });
  }
}
