import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FlowMainComponent, FlowComponent } from './components';

const appRoutes: Routes = [
  {
    path: '', component: FlowMainComponent
  },
  {
    path: ':id', component: FlowComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [],
  exports: []
})
export class FlowRoutingModule { }
