import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreRoutingModule } from './core-routing.module'
import {
  NavBarComponent,
  MainComponent,
  PageNotFoundComponent
} from './components';

@NgModule({
  imports: [
    RouterModule,
    CoreRoutingModule
  ],
  declarations: [
    NavBarComponent,
    MainComponent,
    PageNotFoundComponent
  ],
  exports: [
    NavBarComponent
  ],
  providers: [

  ]
})
export class CoreModule { }
