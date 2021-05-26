import { NgModule } from '@angular/core';
import { NelEmptyModule } from 'ng-element-ui/empty';
import { NelDemoEmptyBasicComponent } from './empty-demo-basic.component';
import { NelDemoEmptyImageComponent } from './empty-demo-image.component';
import { NelDemoEmptyImageSizeComponent } from './empty-demo-image-size.component';
import { NelDemoEmptyFooterComponent } from './empty-demo-footer.component';

@NgModule({
  declarations: [
    NelDemoEmptyBasicComponent,
    NelDemoEmptyImageComponent,
    NelDemoEmptyImageSizeComponent,
    NelDemoEmptyFooterComponent
  ],
  exports: [
    NelDemoEmptyBasicComponent,
    NelDemoEmptyImageComponent,
    NelDemoEmptyImageSizeComponent,
    NelDemoEmptyFooterComponent
  ],
  imports: [
    NelEmptyModule
  ]
})

export class NelDemoEmptyModule { }
