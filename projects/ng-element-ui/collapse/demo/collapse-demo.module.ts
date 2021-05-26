import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NelCollapseModule } from 'ng-element-ui/collapse';
import { NelIconModule } from 'ng-element-ui/icon';
import { NelDemoCollapseBasicComponent } from './collapse-demo-basic.component';
import { NelDemoCollapseTitleComponent } from './collapse-demo-title.component';
import { NelDemoCollapseAccordionComponent } from './collapse-demo-accordion.component';

@NgModule({
  declarations: [
    NelDemoCollapseBasicComponent,
    NelDemoCollapseTitleComponent,
    NelDemoCollapseAccordionComponent
  ],
  exports: [
    NelDemoCollapseBasicComponent,
    NelDemoCollapseTitleComponent,
    NelDemoCollapseAccordionComponent
  ],
  imports: [
    FormsModule,
    NelCollapseModule,
    NelIconModule
  ]
})

export class NelDemoCollapseBasicModule { }
