import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CollectionMainComponent } from './components';

const appRoutes: Routes = [
  {
    path: '', component: CollectionMainComponent
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
export class CollectionRoutingModule { }
