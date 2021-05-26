import { NgModule } from '@angular/core';
import { NelIconModule } from 'ng-element-ui/icon';
import { NelDemoIconBasicComponent } from './icon-demo-basic.component';

@NgModule({
  declarations: [
    NelDemoIconBasicComponent
  ],
  exports: [
    NelDemoIconBasicComponent
  ],
  imports: [
    NelIconModule
  ]
})

export class NelDemoIconModule { }
