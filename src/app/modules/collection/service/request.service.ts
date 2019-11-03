import { Injectable } from '@angular/core';
import { Request } from '../model';
import { KeyPair } from '../../shared';

@Injectable({
  providedIn: 'root',
})
export class RequestService {

  private requests: Request[];

  constructor() {
    this.requests = [
      new Request("request-id-1", 'POST', 'anyUrl1', 'anyBody1', [new KeyPair('key1', 'value1')]),
      new Request("request-id-2", 'GET', 'anyUrl2', 'anyBody2', null),
      new Request("request-id-3", 'PUT', 'anyUrl3', 'anyBody3', [new KeyPair('key3', 'value3')]),
      new Request("request-id-4", 'DELETE', 'anyUrl4', 'anyBody4', [new KeyPair('key4', 'value4')])
    ];
  }

  public add(request: Request): void {
    if (!request) {
      throw Error('Request cannot be null')
    }
    for (let requestFromArray of this.requests) {
      if (request.id === requestFromArray.id) {
        throw new Error('This request already exists');
      }
    }
    this.requests.push(request);
  }

  public remove(id: string): void {
    const index = this.requests.map(x => x.id).indexOf(id);
    if (index > -1) {
      this.requests.splice(index, 1);
    }
  }

  public getAll(): Request[] {
    return this.requests;
  }
}
