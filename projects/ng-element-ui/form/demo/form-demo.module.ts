import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NelFormModule } from 'ng-element-ui/form';
import { NelInputModule } from 'ng-element-ui/input';
import { NelButtonModule } from 'ng-element-ui/button';
import { NelDemoFormBasicComponent } from './form-demo-basic.component';
@NgModule({
  declarations: [
    NelDemoFormBasicComponent
  ],
  exports: [
    NelDemoFormBasicComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NelFormModule,
    NelInputModule,
    NelButtonModule
  ]
})

export class NelDemoFormModule { }
