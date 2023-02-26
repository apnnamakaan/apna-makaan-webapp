import { HelperService } from './../../services/helper.service';
import { PropertyService } from './../../services/property.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listing-card',
  templateUrl: './listing-card.component.html',
  styles: [],
})
export class ListingCardComponent {
  @Input() property: any;
  constructor(private propertyService: PropertyService, private helperService: HelperService) {}

  removeProperty(){
    this.propertyService.removePropertyById(this.property.id).subscribe({
      next: (res: any) => {this.helperService.showToastS(res.message);    
        this.helperService.reloadCurrentRoute();
      },
      error: (error: any) => this.helperService.handelError(error),
    });;

  }

  removeButtonPress(){
    this.removeProperty();
  }
}
