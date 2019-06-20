import {Component, Input} from '@angular/core';
import {EventModel} from './event.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  events: EventModel[] = [
    {name: 'Johannisfest auf Schloss Greyerz', date: new Date('2019-06-22T03:24:00'), isBookmarked: false},
    {name: 'Mittelalterfest Burg Manneberg', date: new Date('2019-06-21T03:24:00'), isBookmarked: false},
    {name: 'Sommer Sonnwendefeier', date: new Date('2019-06-23T03:24:00'), isBookmarked: true},
    {name: 'Sackpfeifen/Dudelsack Kurs auf Schloss Werdenberg', date: new Date('2019-06-29T03:24:00'), isBookmarked: false}
  ];

  constructor() {

  }

  getEvents() {
    return this.events.filter(event => event.isBookmarked === false);
  }

  getBookmarkEvents() {
    return this.events.filter(event => event.isBookmarked === true);
  }

  addEvent(eventname: string, date: string) {
      this.events.push({name: eventname, date: new Date(date), isBookmarked: false});
  }
}
