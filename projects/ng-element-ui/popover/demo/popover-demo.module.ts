import { NgModule } from '@angular/core';
import { NelPopoverModule } from 'ng-element-ui/popover';
import { NelButtonModule } from 'ng-element-ui/button';
import { NelDemoPopoverBasicComponent } from './popover-demo-basic.component';
import { NelDemoPopoverContentComponent } from './popover-demo-content.component';
import { NelDemoPopoverConfirmComponent } from './popover-demo-confirm.component';

@NgModule({
  declarations: [
    NelDemoPopoverBasicComponent,
    NelDemoPopoverContentComponent,
    NelDemoPopoverConfirmComponent
  ],
  exports: [
    NelDemoPopoverBasicComponent,
    NelDemoPopoverContentComponent,
    NelDemoPopoverConfirmComponent
  ],
  imports: [
    NelPopoverModule,
    NelButtonModule
  ]
})

export class NelDemoPopoverModule { }
