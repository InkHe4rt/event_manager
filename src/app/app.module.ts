import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventEditorComponent } from './event-editor/event-editor.component';
import { AllgeventComponent } from './allgevent/allgevent.component';

@NgModule({
  declarations: [
    AppComponent,
    EventEditorComponent,
    AllgeventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    {provide: 'api', useValue: 'http//localhost:3000/'}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
