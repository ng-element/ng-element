import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NelDescriptionsModule } from 'ng-element-ui/descriptions';
import { NelTagModule } from 'ng-element-ui/tag';
import { NelRadioModule } from 'ng-element-ui/radio';
import { NelButtonModule } from 'ng-element-ui/button';
import { NelIconModule } from 'ng-element-ui/icon';
import { NelDemoDescriptionsBasicComponent } from './descriptions-demo-basic.component';
import { NelDemoDescriptionsSizeComponent } from './descriptions-demo-size.component';
import { NelDemoDescriptionsDirectionComponent } from './descriptions-demo-direction.component';

@NgModule({
  declarations: [
    NelDemoDescriptionsBasicComponent,
    NelDemoDescriptionsSizeComponent,
    NelDemoDescriptionsDirectionComponent
  ],
  exports: [
    NelDemoDescriptionsBasicComponent,
    NelDemoDescriptionsSizeComponent,
    NelDemoDescriptionsDirectionComponent
  ],
  imports: [
    FormsModule,
    NelDescriptionsModule,
    NelTagModule,
    NelRadioModule,
    NelButtonModule,
    NelIconModule
  ]
})

export class NelDemoDescriptionsModule { }
