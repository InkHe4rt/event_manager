import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-test',
  template: `  
    
    <h2>Events <span>( 1 )</span></h2>
    
  <input 
    #myInput 
    type="text" 
    [(ngModel)]="message" 
    [ngClass]="{mousedown: isMousedown}"
    (mousedown)="isMousedown = true"
    (mouseup)="isMousedown = false"
    (mouseleave)="isMousedown = false"
    >
    <button (click)="update.emit({text:message})">Event Hinzufügen!</button>
  `,
  styles: []
})

export class EventsComponent implements OnInit {

isMousedown;

  @Input() message;

  @Output() update = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
