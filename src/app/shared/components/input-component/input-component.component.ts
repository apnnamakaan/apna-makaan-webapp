import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styles: [],
})
export class InputComponentComponent {
  @Input() isDisable: any = false;
  @Input() type: any = 'text';
  @Input() placeholder: String = 'placeholder name';
  @Input() lable: String = '';

  @Output() getValueEvent = new EventEmitter<String>();

  onchange(s: any) {
    this.getValueEvent.emit(s.value);
  }
}
