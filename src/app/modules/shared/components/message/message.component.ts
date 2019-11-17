import { Component, OnInit, Input } from '@angular/core';
import { Request, Message, Response } from '../../../shared';

@Component({
  selector: 'afa-message',
  templateUrl: './message.component.html',
  styleUrls: []
})
export class MessageComponent {

  @Input()
  public message: Message;

  constructor() {

  }

}
