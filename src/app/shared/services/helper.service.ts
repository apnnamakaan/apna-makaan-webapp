import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(private toastr: ToastrService, private router: Router) {}

  showToastW(message: string) {
    this.toastr.warning(message, '', {
      progressBar: true,
      positionClass: 'toast-top-right',
      timeOut: 900,
    });
  }

  showToastS(message: string) {
    this.toastr.success(message, '', {
      progressBar: true,
      positionClass: 'toast-top-right',
      timeOut: 2000,
    });
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  handelEmptyFilds(obj: any, isMessage: boolean = true): boolean {
    var emptyCount: number = 0;

    for (var property in obj) {
      if (typeof obj[property] === 'number') {
        if (obj[property] < 1) {
          if (isMessage) this.showToastW(property + ' is Empty');
          emptyCount++;
        }
      }

      if (typeof obj[property] === 'string') {
        if (obj[property].length == 0) {
          if (isMessage) this.showToastW(property + ' is Empty');
          emptyCount++;
        }
      }
    }

    if (emptyCount != 0) return true;
    else return false;
  }

  handelError(error: any) {
    switch (error.status) {
      case 0:
        this.showToastW('Connection Refused');
        break;

      case 500:
        this.showToastW('Internal Server Error');
        break;

      case 502:
        this.showToastW('Bad Gateway');
        break;

      case 503:
        this.showToastW('Service Unavailable');
        break;

      default: {
        if (error.error.message == null || error.error.message == undefined)
          this.showToastW('error occurs');
        else this.showToastW(error.error.message);
        break;
      }
    }
  }
}
