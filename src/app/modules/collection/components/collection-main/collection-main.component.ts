import { Component, OnInit } from '@angular/core';
import { CollectionGroup, Request } from '../../model/index';

@Component({
  selector: 'afa-collection-main',
  templateUrl: './collection-main.component.html',
  styleUrls: []
})
export class CollectionMainComponent implements OnInit {

  public colletionGroups: CollectionGroup[];
  public requestSelected: Request;

  public data: any[] = [
    {
      text: 'Furniture', items: [
        { text: 'Tables & Chairs' },
        { text: 'Sofas' },
        { text: 'Occasional Furniture' }
      ]
    },
    {
      text: 'Decor', items: [
        { text: 'Bed Linen' },
        { text: 'Curtains & Blinds' },
        { text: 'Carpets' }
      ]
    }
  ];

  constructor() {

  }

  ngOnInit() {
    let collectionGroup1Requests: Request[] = [
      new Request("requestCol1 - id1", null, null, null),
      new Request("requestCol1 - id2", null, null, null)
    ];

    let collectionGroup2Requests: Request[] = [
      new Request("requestCol2 - id1", null, null, null),
      new Request("requestCol2 - id2", null, null, null)
    ];

    this.colletionGroups = [
      new CollectionGroup("collection1", collectionGroup1Requests),
      new CollectionGroup("collection2", collectionGroup2Requests)
    ];
  }

  public handleSelection({ index }: any): void {
    const stringSplitted = index.split("_");
    let collectionIndex = stringSplitted[0];
    let requestIndex = stringSplitted[1];
    this.requestSelected = this.colletionGroups[collectionIndex].requests[requestIndex];
  }


}
