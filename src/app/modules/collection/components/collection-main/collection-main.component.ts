import { Component, OnInit } from '@angular/core';
import { CollectionGroup, Request } from '../../model/index';
import { CollectionService } from '../../service/index';

@Component({
  selector: 'afa-collection-main',
  templateUrl: './collection-main.component.html',
  styleUrls: []
})
export class CollectionMainComponent implements OnInit {

  public colletionGroups: CollectionGroup[];
  public requestSelected: Request;

  constructor(collectionService: CollectionService) {
    this.colletionGroups = collectionService.getAll();
    this.requestSelected = this.colletionGroups[0].requests[0];
  }

  ngOnInit() {

  }

  public handleSelection({ index }: any): void {
    const stringSplitted = index.split("_");
    let collectionIndex = stringSplitted[0];
    let requestIndex = stringSplitted[1];
    this.requestSelected = this.colletionGroups[collectionIndex].requests[requestIndex];
  }


}
