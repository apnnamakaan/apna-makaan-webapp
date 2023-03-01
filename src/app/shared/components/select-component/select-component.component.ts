import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-component',
  templateUrl: './select-component.component.html',
  styles: [],
})
export class SelectComponentComponent implements OnInit {
  @Input() value: String = '';
  @Input() lable: String = '';
  @Input() placeholder: String = '';
  @Input() values: Array<String> = [];

  @Output() getValueEvent = new EventEmitter<String>();

  ngOnInit() {
    if (this.value == '0' || this.value == '') {
      this.value = '';
    } else {
      this.placeholder = this.value;
    }
  }

  onSelect(s: any) {
    this.getValueEvent.emit(this.values[s.value]);
  }
}
