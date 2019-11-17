import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Flow, FlowService, Message, Step } from '../../../shared';

@Component({
  selector: 'afa-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.css']
})
export class FlowComponent {

  public flow: Flow;
  public stepSelected: number = 0;

  constructor(private route: ActivatedRoute, private flowService: FlowService) {
    this.flow = new Flow("", "", null);
    route.params.subscribe((params: Params) => {
      const newLocal = params['id'];
      flowService.getById(newLocal).subscribe(x => this.flow = x);
    })
  }

  public onAddStep(message: Message): void {
    let name = 'Step Name - ' + this.flow.steps.length;
    this.flow.steps.push(new Step(name, message));
  }

  public onUpdateStep(step: Step): void {
    for (let i = 0; i < this.flow.steps.length; i++) {
      if (this.flow.steps[i].name === step.name) {
        this.stepSelected = i;
      }
    }
  }

}

