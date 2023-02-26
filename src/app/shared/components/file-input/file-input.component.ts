import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styles: [],
})
export class FileInputComponent {
  public imageSrc: any = '';

  @Input() file: any;

  @Output() getFileEvent = new EventEmitter<any>();

  constructor() {}

  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];

      this.getFileEvent.emit(this.file);

      const reader = new FileReader();
      reader.onload = (e) => (this.imageSrc = reader.result);
      reader.readAsDataURL(this.file);
    }
  }
}
