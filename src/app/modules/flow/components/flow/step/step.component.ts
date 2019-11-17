import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Step } from '../../../../shared';

@Component({
  selector: 'afa-step',
  templateUrl: './step.component.html',
  styleUrls: []
})
export class StepComponent {

  @Input()
  public step: Step;

  @Output()
  public onUpdate: EventEmitter<Step> = new EventEmitter();

  constructor() { }

  public update(): void {
    this.onUpdate.emit(this.step);
  }

}
