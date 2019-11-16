import { Injectable } from '@angular/core';
import { CollectionGroup } from '../model/collection-group';
import { RequestService } from './request.service';
import { of, Observable } from 'rxjs';
import { Folder } from '../model';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {

  private colletionGroups: CollectionGroup[];

  constructor(requestService: RequestService) {
    this.colletionGroups = [
      new CollectionGroup("collection1"),
      new CollectionGroup("collection2", null, [new Folder('folder1', null, null)])
    ];
  }

  public add(collection: CollectionGroup): void {
    if (!collection) {
      throw Error('Collection cannot be null')
    }
    for (let collectionFromArray of this.colletionGroups) {
      if (collection.id === collectionFromArray.id) {
        throw new Error('This collection already exists');
      }
    }
    this.colletionGroups.push(collection);
  }

  public remove(id: string) {
    const index = this.colletionGroups.map(x => x.id).indexOf(id);
    if (index > -1) {
      this.colletionGroups.splice(index, 1);
    }
  }

  public getAll(): Observable<CollectionGroup[]> {
    return of(this.colletionGroups);
  }
}
