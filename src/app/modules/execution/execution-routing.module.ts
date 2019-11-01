import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ExecutionMainComponent } from './components/index';

const appRoutes: Routes = [
  {
    path: '', component: ExecutionMainComponent
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
export class ExecutionRoutingModule { }
