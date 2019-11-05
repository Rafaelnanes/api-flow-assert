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
    route.params.subscribe((params: Params) => {

      const newLocal = params['id'];
      flowService.getById(newLocal).subscribe(x => console.log("Flow => ", x))
    })
  }


}
