import {Component, Input, OnInit} from '@angular/core';
import {EventModel} from '../../event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input() event: EventModel;
  @Input() isBookmark: boolean;
  @Input() events: EventModel;

  mode: 'view'|'edit' = 'view';

  constructor() { }

  ngOnInit() {

  }

  onCancelButtonClicked(event: EventModel) {
    this.mode = 'view';
    this.event.name = this.event.name;
    this.event.date = this.event.date;
  }

  onSaveButtonClicked(event: EventModel) {
    this.mode = 'view';
  }

  onButtonClicked(event: EventModel) {
    event.isBookmarked = !event.isBookmarked;
  }

  onEdit(event: EventModel) {
    this.mode = 'edit'; // bin jetzt im edit modus
  }
}



