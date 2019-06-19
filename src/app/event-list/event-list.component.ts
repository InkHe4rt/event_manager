import {Component, Input, OnInit} from '@angular/core';
import {EventModel} from '../event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  @Input() events: EventModel[];
  @Input() isBookmark: boolean;

  constructor() {
  }

  ngOnInit() {

  }



}
