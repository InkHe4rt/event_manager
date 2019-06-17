import {Component, Input, OnInit, Output} from '@angular/core';
import {EventModel} from '../event.model';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.css']
})
export class EventEditorComponent implements OnInit {

  public showEvent: boolean;
  public showEvent2: boolean;

  // events: EventModel[] = [
  //   {name: 'Fribourg en Médiéval', date: new Date().getTime(), isBookmarked: false},
  //   {name: 'Burg Manneberg', date: new Date().getTime(), isBookmarked: true},
  //   {name: 'Sommer Sonnwendefeier', date: new Date().getTime(), isBookmarked: true}
  //
  // ];

  // eventdate = new Date();
  //
  // myEvent = this.events[0];


  constructor() {
    this.showEvent = true;
    this.showEvent2 = true;
  }

  ngOnInit() {
  }

}
