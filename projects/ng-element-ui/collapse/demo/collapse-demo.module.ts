import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NelCollapseModule } from 'ng-element-ui/collapse';
import { NelIconModule } from 'ng-element-ui/icon';
import { DemoCollapseBasicComponent } from './collapse-demo-basic.component';
import { DemoCollapseTitleComponent } from './collapse-demo-title.component';
import { DemoCollapseAccordionComponent } from './collapse-demo-accordion.component';

@NgModule({
  declarations: [
    DemoCollapseBasicComponent,
    DemoCollapseTitleComponent,
    DemoCollapseAccordionComponent
  ],
  exports: [
    DemoCollapseBasicComponent,
    DemoCollapseTitleComponent,
    DemoCollapseAccordionComponent
  ],
  imports: [
    FormsModule,
    NelCollapseModule,
    NelIconModule
  ]
})

export class NelDemoCollapseBasicModule { }
