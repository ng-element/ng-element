import { NgModule } from '@angular/core';
import { NelMessageBoxModule } from 'ng-element-ui/message-box';
import { NelButtonModule } from 'ng-element-ui/button';
import { NelDemoMessageBoxBasicComponent } from './message-box-demo-basic.component';
import { NelDemoMessageBoxConfirmComponent } from './message-box-demo-confirm.component';
import { NelDemoMessageBoxBlankComponent } from './message-box-demo-blank.component';
import { NelDemoMessageBoxButtonComponent } from './message-box-demo-button.component';
import { NelDemoMessageBoxCenterComponent } from './message-box-demo-center.component';

@NgModule({
  declarations: [
    NelDemoMessageBoxBasicComponent,
    NelDemoMessageBoxConfirmComponent,
    NelDemoMessageBoxBlankComponent,
    NelDemoMessageBoxButtonComponent,
    NelDemoMessageBoxCenterComponent
  ],
  exports: [
    NelDemoMessageBoxBasicComponent,
    NelDemoMessageBoxConfirmComponent,
    NelDemoMessageBoxBlankComponent,
    NelDemoMessageBoxButtonComponent,
    NelDemoMessageBoxCenterComponent
  ],
  imports: [
    NelMessageBoxModule,
    NelButtonModule
  ]
})

export class NelDemoMessageBoxModule { }
