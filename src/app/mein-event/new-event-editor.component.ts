import {Component, Input, OnInit, Output} from '@angular/core';
import {EventModel} from '../event.model';

@Component({
  selector: 'app-new-event-editor',
  templateUrl: './new-event-editor.component.html',
  styleUrls: ['./new-event-editor.component.css']
})
export class NewEventEditorComponent implements OnInit {

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
