import { Component, OnInit } from '@angular/core';
import { CollectionGroup, Message, CollectionService, RequestService, Request } from '../../../shared';

@Component({
  selector: 'afa-collection-main',
  templateUrl: './collection-main.component.html',
  styleUrls: []
})
export class CollectionMainComponent {

  public colletionGroups: CollectionGroup[];
  public nodes: Node[] = [];
  public messageSelected: Message;

  constructor() {

  }

  public handleSelection(messageSelected: Message): void {
    this.messageSelected = messageSelected;
  }

}
