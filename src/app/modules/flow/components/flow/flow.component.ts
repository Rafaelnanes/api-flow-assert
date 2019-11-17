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
  public stepSelectedIndex: number = 0;
  public stepSelected: Step = null;

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

  public onStepEdit(index: number): void {
    this.stepSelectedIndex = index;
    this.stepSelected = this.flow.steps[index];
    console.log(this.stepSelected)
  }

}

