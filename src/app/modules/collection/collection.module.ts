import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CollectionRoutingModule } from './collection-routing.module';
import { CollectionMainComponent } from './components/collection-main/collection-main.component';

@NgModule({
  declarations: [
    CollectionMainComponent
  ],
  imports: [
    CommonModule,
    CollectionRoutingModule,
    RouterModule
  ]
})
export class CollectionModule { }
