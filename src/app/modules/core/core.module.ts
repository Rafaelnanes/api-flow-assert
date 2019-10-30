import { NgModule } from '@angular/core';

import { NavBarComponent, MainComponent } from './components/index';

@NgModule({
  imports: [
  ],
  declarations: [
    NavBarComponent,
    MainComponent
  ],
  exports: [
    NavBarComponent,
    MainComponent
  ],
  providers: [

  ]
})
export class CoreModule { }
