import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { CollectionTreeComponent } from './';

@NgModule({
  declarations: [
    CollectionTreeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TreeViewModule
  ],
  exports: [
    CollectionTreeComponent
  ]
})
export class SharedModule { }
