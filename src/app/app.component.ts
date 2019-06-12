import {Component, Inject} from '@angular/core';
import {ɵDomEventsPlugin} from '@angular/platform-browser';
import {Event} from './event.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  events: Event[] = [
    {name: 'franz', date: new Date().getTime(), isBookmarked: false}
  ];

  constructor() {}
}
