import { property } from './../../shared/models/property';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PropertyService } from 'src/app/shared/services/property.service';
import { HelperService } from 'src/app/shared/services/helper.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styles: [],
})
export class FavoritesComponent {
  public properties: Array<property> = [];
  constructor(
    private helperService: HelperService,
    private authService: AuthService,
    private userService: UserService,
    private propertyService: PropertyService
  ) {
    this.authService.checkIsLogedIn();
  }

  ngOnInit(): void {
    this.getFavoritesByEmail();
  }

  getFavoritesByEmail(): void {
    this.propertyService.getFavorite(this.userService.user.email).subscribe({
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
