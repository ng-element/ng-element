import { NgModule } from '@angular/core';
import { NelIconModule } from 'ng-element-ui/icon';
import { NelDemoIconBasicComponent } from './icon-demo-basic.component';
import { NelDemoIconFontComponent } from './icon-demo-font.component';

@NgModule({
  declarations: [
    NelDemoIconBasicComponent,
    NelDemoIconFontComponent
  ],
  exports: [
    NelDemoIconBasicComponent,
    NelDemoIconFontComponent
  ],
  imports: [
    NelIconModule
  ]
})

export class NelDemoIconModule { }
