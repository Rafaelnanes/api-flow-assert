import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreRoutingModule } from './core-routing.module'
import {
  NavBarComponent,
  MainComponent,
  PageNotFoundComponent,
  FlowComponent,
  ExecutionComponent,
  CollectionComponent
} from './components/index';

@NgModule({
  imports: [
    RouterModule,
    CoreRoutingModule
  ],
  declarations: [
    NavBarComponent,
    MainComponent,
    PageNotFoundComponent,
    ExecutionComponent,
    FlowComponent,
    CollectionComponent
  ],
  exports: [
    NavBarComponent
  ],
  providers: [

  ]
})
export class CoreModule { }
