import { NgModule } from '@angular/core';
import { NelResultModule } from 'ng-element-ui/result';
import { NelLayoutModule } from 'ng-element-ui/layout';
import { NelButtonModule } from 'ng-element-ui/button';
import { NelImageModule } from 'ng-element-ui/image';
import { NelDemoResultBasicComponent } from './result-demo-basic.component';
import { NelDemoResultIconComponent } from './result-demo-icon.component';

@NgModule({
  declarations: [
    NelDemoResultBasicComponent,
    NelDemoResultIconComponent
  ],
  exports: [
    NelDemoResultBasicComponent,
    NelDemoResultIconComponent
  ],
  imports: [
    NelResultModule,
    NelLayoutModule,
    NelButtonModule,
    NelImageModule
  ]
})

export class NelDemoResultModule { }
