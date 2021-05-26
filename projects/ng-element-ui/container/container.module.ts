import { NgModule } from '@angular/core';
import { NelContainerComponent } from './container.component';
import { NelHeaderComponent } from './header.component';
import { NelAsideComponent } from './aside.component';
import { NelMainComponent } from './main.component';
import { NelFooterComponent } from './footer.component';

@NgModule({
  declarations: [
    NelContainerComponent,
    NelHeaderComponent,
    NelAsideComponent,
    NelMainComponent,
    NelFooterComponent
  ],
  exports: [
    NelContainerComponent,
    NelHeaderComponent,
    NelAsideComponent,
    NelMainComponent,
    NelFooterComponent
  ]
})

export class NelContainerModule { }
