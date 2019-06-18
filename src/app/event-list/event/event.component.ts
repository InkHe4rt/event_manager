import {Component, Input, OnInit} from '@angular/core';
import {EventModel} from '../../event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input() events: EventModel[];

  @Input() isBookmark: boolean;

  eventToView: EventModel;

  mode: 'view'|'edit';

  constructor() { }

  ngOnInit() {
  }

  onView(event: EventModel) {
    this.eventToView = event;
    this.mode = 'view';
  }
}
