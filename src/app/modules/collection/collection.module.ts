import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CollectionRoutingModule } from './collection-routing.module';

import {
  CollectionMainComponent
} from './components';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CollectionMainComponent
  ],
  imports: [
    CommonModule,
    CollectionRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
  ],
  exports: [
  ]
})
export class CollectionModule { }
