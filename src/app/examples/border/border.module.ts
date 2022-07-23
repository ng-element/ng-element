import { NgModule } from '@angular/core';
import { NelLayoutModule } from 'ng-element-ui/layout';
import { BorderRoutingModule } from './border-routing.module';
import { BorderComponent } from './border.component';

@NgModule({
  declarations: [
    BorderComponent
  ],
  exports: [
    BorderComponent
  ],
  imports: [
    NelLayoutModule,
    BorderRoutingModule
  ]
})

export class BorderModule { }
