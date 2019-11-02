import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { CollectionRoutingModule } from './collection-routing.module';
import { CollectionMainComponent } from './components/collection-main/collection-main.component';
import { RequestComponent } from './components/request/request.component';

@NgModule({
  declarations: [
    CollectionMainComponent,
    RequestComponent
  ],
  imports: [
    CommonModule,
    CollectionRoutingModule,
    RouterModule,
    TreeViewModule
  ]
})
export class CollectionModule { }
