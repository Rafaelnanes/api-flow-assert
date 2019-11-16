import { Component, OnInit } from '@angular/core';
import { CollectionGroup, Message, CollectionService, RequestService, Request } from '../../../shared';
import { map } from 'rxjs/operators';

@Component({
  selector: 'afa-collection-main',
  templateUrl: './collection-main.component.html',
  styleUrls: []
})
export class CollectionMainComponent {

  public colletionGroups: CollectionGroup[];
  public nodes: Node[] = [];
  public messageSelected: Message;

  constructor(collectionService: CollectionService, requestService: RequestService) {
    collectionService.getAll()
      .subscribe(x => {

        this.colletionGroups = x;

        if (this.colletionGroups) {
          requestService.getAll().subscribe(y => {
            this.colletionGroups[0].requests = y.slice(0, 2);
            this.colletionGroups[1].folders[0].requests = y.slice(2, 4);
            this.messageSelected = new Message(this.colletionGroups[0].requests[0]);

            this.parseCollectionGroupToNode();

          });
        }

      });

  }

  public handleSelection({ index }: any): void {
    const stringSplitted = index.split("_");
    let collectionIndex = stringSplitted[0];
    let requestIndex: number;
    let requestSelected: Request;

    if (stringSplitted.length == 2) {
      requestIndex = stringSplitted[1];
      requestSelected = this.colletionGroups[collectionIndex].requests[requestIndex];
    } else {
      requestIndex = stringSplitted[2];
      let folderIndex = stringSplitted[1]
      requestSelected = this.colletionGroups[collectionIndex].folders[folderIndex].requests[requestIndex];
    }
    this.messageSelected = new Message(requestSelected);
  }

  private parseCollectionGroupToNode() {
    for (let collection of this.colletionGroups) {
      let childrenNodes: Node[] = [];
      if (collection.folders) {
        for (let folder of collection.folders) {
          let requestsFromFolder: Node[] = [];
          for (let request of folder.requests) {
            requestsFromFolder.push(new Node(request.id));
          }
          childrenNodes.push(new Node(folder.id, requestsFromFolder));
        }
      }
      if (collection.requests) {
        for (let request of collection.requests) {
          childrenNodes.push(new Node(request.id));
        }
      }
      this.nodes.push(new Node(collection.id, childrenNodes));
    }
  }

}

class Node {
  constructor(public id: string, public children?: Node[]) { }
}
