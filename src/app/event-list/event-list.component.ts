import {Component, Input, OnInit} from '@angular/core';
import {EventModel} from '../event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  @Input() events: EventModel[];

  @Input() isBookmark: boolean

  constructor() {
  }

  ngOnInit() {
    // if(value === true){
    //   // then this
    // }else {
    //   // then that
    // }
    //
    // value === true ? /* then this */  : /* then that */
  }

  // getDisplayValue(event: EventModel): string {
  //   return event.name + ', ' + event.date.toISOString();
  // }

  onButtonClicked(event: EventModel) {
event.isBookmarked = !event.isBookmarked;
  }


}
