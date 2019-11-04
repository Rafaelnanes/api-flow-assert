import { Component, OnInit } from '@angular/core';
import { CollectionGroup, Request, Message } from '../../../shared';
import { CollectionService } from '../../service';

@Component({
  selector: 'afa-collection-main',
  templateUrl: './collection-main.component.html',
  styleUrls: []
})
export class CollectionMainComponent implements OnInit {

  public colletionGroups: CollectionGroup[];
  public messageSelected: Message;

  constructor(collectionService: CollectionService) {
    this.colletionGroups = collectionService.getAll();
    this.messageSelected = new Message(this.colletionGroups[0].requests[0]);
  }

  ngOnInit() {

  }

  public handleSelection({ index }: any): void {
    const stringSplitted = index.split("_");
    let collectionIndex = stringSplitted[0];
    let requestIndex = stringSplitted[1];
    let requestSelected = this.colletionGroups[collectionIndex].requests[requestIndex];
    this.messageSelected = new Message(requestSelected);
  }


}
