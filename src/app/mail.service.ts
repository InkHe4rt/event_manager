import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    {id: 0, text:`Nachricht nr.1`},
    {id: 1, text:`Nachricht nr.2`},
    {id: 2, text:`Nachricht nr.3`}
  ];

  update(id, text){
    this.messages = this.messages.map(m =>
    m.id === id
    ? {id, text}
    : m)
  }

  constructor() { }
}
