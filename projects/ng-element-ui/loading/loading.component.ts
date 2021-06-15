import { Component, Input } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { loadingMotion } from 'ng-element-ui/core/animation';
import { InputBoolean } from 'ng-element-ui/core/utils';

@Component({
  selector: 'nel-loading',
  templateUrl: './loading.component.html',
  animations: [loadingMotion],
  host: {
    class: 'el-loading-parent--relative'
  }
})

export class NelLoadingComponent {
  static ngAcceptInputType_nelFullscreen: BooleanInput;

  @Input() nelLoading = true;
  @Input() nelText?: string;
  @Input() nelSpinner?: string;
  @Input() nelBackground?: string;
  @Input() @InputBoolean() nelFullscreen = false;
}
