import { NgModule } from '@angular/core';
import { NelDemoDialogModule } from './../../../projects/ng-element-ui/dialog/demo/dialog-demo.module';
import { ShareModule } from './../shared/shared.module';
import { DialogRoutingModule } from './dialog-routing.module';
import { DialogComponent } from './dialog.component';

@NgModule({
  declarations: [
    DialogComponent
  ],
  exports: [
    DialogComponent
  ],
  imports: [
    NelDemoDialogModule,
    ShareModule,
    DialogRoutingModule
  ]
})

export class DialogModule { }
