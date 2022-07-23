import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TypographyRoutingModule } from './typography-routing.module';
import { TypographyComponent } from './typography.component';

@NgModule({
  declarations: [
    TypographyComponent
  ],
  exports: [
    TypographyComponent
  ],
  imports: [
    SharedModule,
    TypographyRoutingModule
  ]
})

export class TypographyModule { }
