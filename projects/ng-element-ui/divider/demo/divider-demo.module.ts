import { NgModule } from '@angular/core';
import { NelDividerModule } from 'ng-element-ui/divider';
import { NelIconModule } from 'ng-element-ui/icon';
import { NelDemoDividerBasicComponent } from './divider-demo-basic.component';
import { NelDemoDividerContentComponent } from './divider-demo-content.component';
import { NelDemoDividerDirectionComponent } from './divider-demo-direction.component';

@NgModule({
  declarations: [
    NelDemoDividerBasicComponent,
    NelDemoDividerContentComponent,
    NelDemoDividerDirectionComponent
  ],
  exports: [
    NelDemoDividerBasicComponent,
    NelDemoDividerContentComponent,
    NelDemoDividerDirectionComponent
  ],
  imports: [
    NelDividerModule,
    NelIconModule
  ]
})

export class NelDemoDividerModule { }
