import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NelBacktopModule } from 'ng-element-ui/backtop';
import { NelScrollbarModule } from 'ng-element-ui/scrollbar';
import { NelAlertModule } from 'ng-element-ui/alert';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { SharedModule } from './shared/shared.module';

import { AppService } from './app.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({ declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserAnimationsModule,
        BrowserModule,
        NelBacktopModule,
        NelScrollbarModule,
        NelAlertModule,
        LoadingBarRouterModule,
        SharedModule,
        AppRoutingModule], providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        AppService,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
