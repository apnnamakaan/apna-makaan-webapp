import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  styles: [],
})
export class ButtonComponentComponent {
  @Input() name: String = 'Button';

  @Output() onClickEvent = new EventEmitter<any>();

  onClick() {
    this.onClickEvent.emit();
  }
}
