import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlowMainComponent } from './components/flow-main/flow-main.component';
import { FlowRoutingModule } from './flow-routing.module';
import { FlowComponent, AssertComponent } from './components';
import { SharedModule } from '../shared/shared.module';
import { StepComponent } from './components/flow/step/step.component';

@NgModule({
  declarations: [
    FlowMainComponent,
    FlowComponent,
    AssertComponent,
    StepComponent
  ],
  imports: [
    CommonModule,
    FlowRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class FlowModule { }
