import { Component, OnInit } from '@angular/core';
import { CollectionGroup, Message, CollectionService, RequestService } from '../../../shared';

@Component({
  selector: 'afa-collection-main',
  templateUrl: './collection-main.component.html',
  styleUrls: []
})
export class CollectionMainComponent {

  public colletionGroups: CollectionGroup[];
  public messageSelected: Message;

  constructor(collectionService: CollectionService, requestService: RequestService) {
    collectionService.getAll().subscribe(x => {

      this.colletionGroups = x;

      if (this.colletionGroups) {
        requestService.getAll().subscribe(y => {
          this.colletionGroups[0].requests = y.slice(0, 2);
          this.colletionGroups[1].requests = y.slice(2, 4);
          this.messageSelected = new Message(this.colletionGroups[0].requests[0]);
        });
      }

    });
  }

  public handleSelection({ index }: any): void {
    const stringSplitted = index.split("_");
    let collectionIndex = stringSplitted[0];
    let requestIndex = stringSplitted[1];
    let requestSelected = this.colletionGroups[collectionIndex].requests[requestIndex];
    this.messageSelected = new Message(requestSelected);
  }


}
