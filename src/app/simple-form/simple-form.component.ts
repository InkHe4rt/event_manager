import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `  
    
    
    
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
  styles: [`
  :host{
    display: flex;
  }
  
  .mousedown{
    border: 2px solid green;
  }
  inputs:focus{
    font-weight: bold;
    outline: none;
  }

  input{
    margin-left: 10px;
  }
  button{
    border: none;
  }
  `]
})
export class SimpleFormComponent implements OnInit {

  isMousedown;

  @Input() message;

  @Output() update = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
