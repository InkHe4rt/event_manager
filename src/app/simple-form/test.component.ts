import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-test',
  // tslint:disable-next-line:max-line-length
  template: `<h2>Events <span>( 1 )</span></h2><input #myInput type="text" [ngClass]="{mousedown: isMousedown}" (mousedown)="isMousedown = true" (mouseup)="isMousedown = false" (mouseleave)="isMousedown = false"><button (click)="update.emit({text:message})">Event Hinzufügen!</button>`,
  styles: []
})

export class TestComponent implements OnInit {

isMousedown;

  @Input() message;

  @Output() update = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
