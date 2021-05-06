import { NgModule } from '@angular/core';
import { NelDialogModule } from 'ng-element-ui/dialog';
import { NelButtonModule } from 'ng-element-ui/button';
import { DemoDialogBasicComponent } from './dialog-demo-basic.component';
import { DemoDialogCenterComponent } from './dialog-demo-center.component';

@NgModule({
  declarations: [
    DemoDialogBasicComponent,
    DemoDialogCenterComponent
  ],
  exports: [
    DemoDialogBasicComponent,
    DemoDialogCenterComponent
  ],
  imports: [
    NelDialogModule,
    NelButtonModule
  ]
})

export class NelDemoDialogModule { }
