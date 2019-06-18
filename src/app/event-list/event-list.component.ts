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

  mode: 'view'|'edit' = 'view';// falscher ort?
  eventToEdit: EventModel;

  @Input() isOn = true;

  constructor() {
  }

  ngOnInit() {

  }

  onButtonClicked(event: EventModel) {
event.isBookmarked = !event.isBookmarked;
  }

  onToggleOn() {
    this.isOn = !this.isOn;
  }

  // kontrollieren
  onEdit(event: EventModel) {
    this.eventToEdit = event;
    this.mode = 'edit';
  }

}
