import { NgModule } from '@angular/core';
import { NelDropdownModule } from 'ng-element-ui/dropdown';
import { NelButtonModule } from 'ng-element-ui/button';
import { NelLayoutModule } from 'ng-element-ui/layout';
import { NelDemoDropdownBasicComponent } from './dropdown-demo-basic.component';
import { NelDemoDropdownButtonComponent } from './dropdown-demo-button.component';
import { NelDemoDropdownTriggerComponent } from './dropdown-demo-trigger.component';
import { NelDemoDropdownHideComponent } from './dropdown-demo-hide.component';
import { NelDemoDropdownSizeComponent } from './dropdown-demo-size.component';

@NgModule({
  declarations: [
    NelDemoDropdownBasicComponent,
    NelDemoDropdownButtonComponent,
    NelDemoDropdownTriggerComponent,
    NelDemoDropdownHideComponent,
    NelDemoDropdownSizeComponent
  ],
  exports: [
    NelDemoDropdownBasicComponent,
    NelDemoDropdownButtonComponent,
    NelDemoDropdownTriggerComponent,
    NelDemoDropdownHideComponent,
    NelDemoDropdownSizeComponent
  ],
  imports: [
    NelDropdownModule,
    NelButtonModule,
    NelLayoutModule
  ]
})

export class NelDemoDropdownModule { }
