import { NgModule } from '@angular/core';
import { CoreRoutingModule } from './core-routing.module'
import { NavBarComponent, MainComponent, PageNotFoundComponent } from './components/index';

@NgModule({
  imports: [
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
