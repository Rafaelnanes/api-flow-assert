import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { CollectionTreeComponent, MessageComponent, RequestComponent, ResponseComponent, AssertComponent } from './';

@NgModule({
  declarations: [
    CollectionTreeComponent,
    MessageComponent,
    RequestComponent,
    ResponseComponent,
    AssertComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TreeViewModule,
    ReactiveFormsModule
  ],
  exports: [
    CollectionTreeComponent,
    MessageComponent
  ]
})
export class SharedModule { }
