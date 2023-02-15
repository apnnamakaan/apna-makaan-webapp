import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-component',
  templateUrl: './select-component.component.html',
  styles: [],
})
export class SelectComponentComponent {
  @Input() lable: String = '';
  @Input() placeholder: String = '';
  @Input() values: Array<String> = [];

  @Output() getValueEvent = new EventEmitter<String>();

  onSelect(s: any) {
    this.getValueEvent.emit(this.values[s.value]);
  }
}
