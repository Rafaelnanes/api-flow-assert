import { Component, OnInit } from '@angular/core';
import { FlowService, Flow } from '../../../shared';

@Component({
  selector: 'afa-flow-main',
  templateUrl: './flow-main.component.html',
  styleUrls: []
})
export class FlowMainComponent {

  public flows: Flow[];

  constructor(public flowService: FlowService) {
    flowService.getAll().subscribe(x => this.flows = x);
  }

  public onDelete(event): void {
    console.log('onDelete', event);
  }

}
