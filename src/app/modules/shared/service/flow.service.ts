import { Injectable } from '@angular/core';
import { Step, Flow } from '../model';
import { of, Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlowService {

  private flows: Flow[];

  constructor() {
    let step1 =
      this.flows = [
        new Flow("flow-id-1", 'Nome Flow 1', "Any description for 1", [new Step("step 1 - 1"), new Step("step 1 - 2")]),
        new Flow("flow-id-2", 'Nome Flow 2', "Any description for 2", [new Step("step 2 - 1")])
      ];
  }

  public add(flow: Flow): void {
    if (!flow) {
      throw Error('Request cannot be null')
    }
    for (let flowFromArray of this.flows) {
      if (flow.id === flowFromArray.id) {
        throw new Error('This flow already exists');
      }
    }
    this.flows.push(flow);
  }

  public remove(id: string): void {
    const index = this.flows.map(x => x.id).indexOf(id);
    if (index > -1) {
      this.flows.splice(index, 1);
    }
  }

  public getAll(): Observable<Flow[]> {
    return of(this.flows);
  }

  public getById(id: string): Observable<Flow> {
    return Observable.create((subscriber: Subscriber<Flow>) => {
      for (let flow of this.flows) {
        if (flow.id == id) {
          subscriber.next(flow);
          subscriber.complete();
          return;
        }
      }
      subscriber.error(new Error('Flow was not found'))
    }

    )
  }

}
