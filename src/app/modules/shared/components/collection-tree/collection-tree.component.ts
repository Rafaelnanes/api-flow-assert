import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CollectionGroup, Message, Request } from '../../model';
import { CollectionService, RequestService } from '../../service';

@Component({
  selector: 'afa-collection-tree',
  templateUrl: './collection-tree.component.html',
  styleUrls: []
})
export class CollectionTreeComponent {

  @Output() onMessageSelected: EventEmitter<Message> = new EventEmitter();
  public colletionGroups: CollectionGroup[];
  public nodes: Node[] = [];

  constructor(collectionService: CollectionService, requestService: RequestService) {
    collectionService.getAll()
      .subscribe(x => {

        this.colletionGroups = x;

        if (this.colletionGroups) {
          requestService.getAll().subscribe(y => {
            this.colletionGroups[0].requests = y.slice(0, 2);
            this.colletionGroups[1].folders[0].requests = y.slice(2, 4);
            let request = new Message(this.colletionGroups[0].requests[0]);

            //TODO turn it on default message selected
            this.onMessageSelected.emit(request);

            this.parseCollectionsGroupToNode();

          });
        }

      });

  }

  public handleSelection({ index }: any): void {
    const stringSplitted = index.split("_");
    let collectionIndex = stringSplitted[0];
    let requestIndex: number;
    let requestSelected: Request;
    //TODO improve this trash logic
    if (stringSplitted.length == 1) {
      return;
    }

    if (stringSplitted.length == 2) {
      requestIndex = stringSplitted[1];
      if (this.colletionGroups[collectionIndex].requests) {
        requestSelected = this.colletionGroups[collectionIndex].requests[requestIndex];
      } else {
        return;
      }
    } else {
      requestIndex = stringSplitted[2];
      let folderIndex = stringSplitted[1]
      requestSelected = this.colletionGroups[collectionIndex].folders[folderIndex].requests[requestIndex];
    }
    this.onMessageSelected.emit(new Message(requestSelected));
  }

  private parseCollectionsGroupToNode() {
    for (let collection of this.colletionGroups) {
      let childrenNodes: Node[] = [];
      if (collection.folders) {
        for (let folder of collection.folders) {
          let requestsFromFolder: Node[] = [];
          for (let request of folder.requests) {
            requestsFromFolder.push(new Node(request.id, 'fa-play-circle-o'));
          }
          childrenNodes.push(new Node(folder.id, 'fa-folder', requestsFromFolder));
        }
      }
      if (collection.requests) {
        for (let request of collection.requests) {
          childrenNodes.push(new Node(request.id, 'fa-play-circle-o'));
        }
      }
      this.nodes.push(new Node(collection.id, 'fa-object-group', childrenNodes));
    }
  }

}

class Node {
  constructor(public id: string, public icon: string, public children?: Node[]) { }
}
