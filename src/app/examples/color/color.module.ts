import { NgModule } from '@angular/core';
import { NelLayoutModule } from 'ng-element-ui/layout';
import { ColorRoutingModule } from './color-routing.module';
import { ColorComponent } from './color.component';

@NgModule({
  declarations: [
    ColorComponent
  ],
  exports: [
    ColorComponent
  ],
  imports: [
    NelLayoutModule,
    ColorRoutingModule
  ]
})

export class ColorModule { }
