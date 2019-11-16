import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Flow, FlowService } from '../../../shared';

@Component({
  selector: 'afa-flow',
  templateUrl: './flow.component.html',
  styleUrls: []
})
export class FlowComponent {

  public flow: Flow;

  constructor(private route: ActivatedRoute, private flowService: FlowService) {
    this.flow = new Flow("", "", "", null);
    route.params.subscribe((params: Params) => {

      const newLocal = params['id'];
      flowService.getById(newLocal).subscribe(x => this.flow = x);
    })
  }

  public onMessageSelected(messageSelected: any): void {
  }


}
