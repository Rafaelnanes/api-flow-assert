import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExecutionMainComponent } from './components/execution-main/execution-main.component';
import { ExecutionRoutingModule } from './execution-routing.module';


@NgModule({
  declarations: [ExecutionMainComponent],
  imports: [
    CommonModule,
    ExecutionRoutingModule,
    RouterModule
  ]
})
export class ExecutionModule { }
