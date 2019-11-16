import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { CoreModule } from './modules/core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpRequestService, RequestService, CollectionService } from './modules/shared';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [
    HttpRequestService,
    RequestService,
    CollectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
