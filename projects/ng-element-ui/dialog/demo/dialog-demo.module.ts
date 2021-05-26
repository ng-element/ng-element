import { NgModule } from '@angular/core';
import { NelDialogModule } from 'ng-element-ui/dialog';
import { NelButtonModule } from 'ng-element-ui/button';
import { NelDemoDialogBasicComponent } from './dialog-demo-basic.component';
import { NelDemoDialogCenterComponent } from './dialog-demo-center.component';

@NgModule({
  declarations: [
    NelDemoDialogBasicComponent,
    NelDemoDialogCenterComponent
  ],
  exports: [
    NelDemoDialogBasicComponent,
    NelDemoDialogCenterComponent
  ],
  imports: [
    NelDialogModule,
    NelButtonModule
  ]
})

export class NelDemoDialogModule { }
