import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelIconModule } from 'ng-element-ui/icon';
import { NelLoadingComponent } from './loading.component';
import { NelLoadingFullscreenComponent } from './loading-fullscreen.component';
import { NelLoadingService } from './loading.service';

@NgModule({
  declarations: [
    NelLoadingComponent,
    NelLoadingFullscreenComponent
  ],
  exports: [
    NelLoadingComponent,
    NelLoadingFullscreenComponent
  ],
  imports: [
    CommonModule,
    NelIconModule
  ],
  providers: [
    NelLoadingService
  ]
})

export class NelLoadingModule { }
