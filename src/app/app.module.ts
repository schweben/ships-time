import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HourPipe } from './hour.pipe';
import { MaterialModule } from './material.module';
import { TimeService } from './service/time.service';

@NgModule({
  declarations: [
    AppComponent,
    HourPipe,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
  ],
  providers: [
    TimeService,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
