import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date',
})
export class DatePipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    if (args[0] == 'time') return this.localeTime(new Date(value));
    else return this.timeSince(new Date(value));
  }

  localeTime(date: any): any {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  timeSince(date: any): any {
    var newDate: any = new Date();
    var seconds = Math.floor((newDate - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + ' years ago';
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + ' months ago';
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + ' days ago';
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + ' hours ago';
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + ' minutes ago';
    }
    return Math.floor(seconds) + ' seconds ago';
  }
}
