import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { CollectionRoutingModule } from './collection-routing.module';
import {
  CollectionMainComponent,
  RequestComponent,
  MessageComponent,
  ResponseComponent
} from './components/index';

@NgModule({
  declarations: [
    CollectionMainComponent,
    RequestComponent,
    MessageComponent,
    ResponseComponent
  ],
  imports: [
    CommonModule,
    CollectionRoutingModule,
    RouterModule,
    TreeViewModule,
    ReactiveFormsModule
  ],
  providers: [
  ]
})
export class CollectionModule { }
