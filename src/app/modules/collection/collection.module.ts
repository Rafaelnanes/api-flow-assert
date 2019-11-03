import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { CollectionRoutingModule } from './collection-routing.module';
import { CollectionMainComponent } from './components/collection-main/collection-main.component';
import { RequestComponent } from './components/request/request.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CollectionMainComponent,
    RequestComponent
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
