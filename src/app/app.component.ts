import {Component, Inject} from '@angular/core';
import {EventModel} from './event.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  events: EventModel[] = [
    {name: 'Fribourg en Médiéval', date: new Date(), isBookmarked: false},
    {name: 'Burg Manneberg', date: new Date(), isBookmarked: true},
    {name: 'Sommer Sonnwendefeier', date: new Date(), isBookmarked: true}
  ];

  mode: 'view'|'edit' = 'view';

  constructor() {

  }
}
