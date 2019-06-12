import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import {MailService} from "./mail.service";
import {FormsModule} from "@angular/forms";
import { TestComponent } from './simple-form/test.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {provide:'mail', useClass:MailService},
    {provide: 'api', useValue: 'http//localhost:3000/'}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
