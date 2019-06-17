import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventEditorComponent } from './event-editor/event-editor.component';
import {FormsModule} from '@angular/forms';
import {NewEventEditorComponent} from './mein-event/new-event-editor.component';
import { EventListComponent } from './event-list/event-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EventEditorComponent,
    NewEventEditorComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {provide: 'api', useValue: 'http//localhost:3000/'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
