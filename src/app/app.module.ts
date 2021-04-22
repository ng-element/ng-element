import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgElementUiModule } from 'ng-element-ui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgElementUiModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
