import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EventModel} from '../../event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input() event: EventModel;
  @Input() isBookmark: boolean;

  @Output() delete: EventEmitter = new EventEmitter();

  mode: 'view' | 'edit' = 'view';
  eventClone: EventModel;

  constructor() {
  }

  ngOnInit() {
  }

  onCancelButtonClicked() {
    this.mode = 'view';
  }

  onSaveButtonClicked() {
    this.mode = 'view';
    this.event.name = this.eventClone.name;
    this.event.date = this.eventClone.date;
    this.event.isBookmarked = this.eventClone.isBookmarked;
  }

  onButtonClicked() {
    this.event.isBookmarked = !this.event.isBookmarked;
  }

  onEdit() {
    this.mode = 'edit'; // bin jetzt im edit modus
    this.eventClone = {name: this.event.name, date: this.event.date, isBookmarked: this.event.isBookmarked}; // neuer clone
  }

  onDelete($event) {
     this.delete.emit(this.event);
     console.log('test2eventlist');

   }

}


