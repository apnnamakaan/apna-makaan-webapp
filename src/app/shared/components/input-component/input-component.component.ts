import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styles: [],
})
export class InputComponentComponent implements OnInit{
  @Input() value: string = '';
  @Input() isDisable: any = false;
  @Input() type: any = 'text';
  @Input() placeholder: String = 'placeholder name';
  @Input() lable: String = '';

  @Output() getValueEvent = new EventEmitter<String>();
  @Output() onClearEvent = new EventEmitter<String>();

  ngOnInit (){
    if(this.value == '0' || this.value == ''){
      this.value = '';
    }
  }

  onchange(s: any) {
    this.getValueEvent.emit(s.value);
  }
  @Input() clear() {
    console.log('clear called');
  }
}
