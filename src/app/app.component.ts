import {Component, Inject} from '@angular/core';


@Component({
  selector: 'app-root',
  // template: `<div>
  //
  //   <ul>
  //     <li *ngFor="let message of mail.messages">{{message.text}}</li>
  //   </ul>
  //
  //     <app-simple-form
  //      *ngFor="let message of mail.messages"
  //      [message]="message.text"
  //      (update)="onUpdate(message.id, $event.text)"
  //     >
  //
  //     </app-simple-form>
  //   <script src="vendor/jquery/jquery.min.js"></script>
  //   <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  // </div>`,
  // styles:[`
  // app-simple-form{
  //   margin-bottom: 10px ;
  // }
  // `]
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onUpdate(id, text){
    this.mail.update(id, text);
  }


  constructor(
    @Inject('mail') private mail,
  ){}
}
