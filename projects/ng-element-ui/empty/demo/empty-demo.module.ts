import { NgModule } from '@angular/core';
import { NelEmptyModule } from 'ng-element-ui/empty';
import { DemoEmptyBasicComponent } from './empty-demo-basic.component';
import { DemoEmptyImageComponent } from './empty-demo-image.component';
import { DemoEmptyImageSizeComponent } from './empty-demo-image-size.component';
import { DemoEmptyFooterComponent } from './empty-demo-footer.component';

@NgModule({
  declarations: [
    DemoEmptyBasicComponent,
    DemoEmptyImageComponent,
    DemoEmptyImageSizeComponent,
    DemoEmptyFooterComponent
  ],
  exports: [
    DemoEmptyBasicComponent,
    DemoEmptyImageComponent,
    DemoEmptyImageSizeComponent,
    DemoEmptyFooterComponent
  ],
  imports: [
    NelEmptyModule
  ]
})

export class NelDemoEmptyModule { }
