import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlowMainComponent } from './components/flow-main/flow-main.component';
import { FlowRoutingModule } from './flow-routing.module';
import { FlowComponent } from './components/flow/flow.component';

@NgModule({
  declarations: [
    FlowMainComponent,
    FlowComponent
  ],
  imports: [
    CommonModule,
    FlowRoutingModule,
    RouterModule
  ]
})
export class FlowModule { }
