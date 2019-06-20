import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EventModel} from '../event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  @Input() events: EventModel[];
  @Input() isBookmark: boolean;

  @Output() delete = new EventEmitter();


  constructor() {
  }

  ngOnInit() {

  }

onDelete() {
  this.delete.emit(this.events);
  console.log('test2eventlist');

}

}
