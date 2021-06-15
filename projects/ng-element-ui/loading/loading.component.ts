import { Component, Input } from '@angular/core';
import { loadingMotion } from 'ng-element-ui/core/animation';

@Component({
  selector: 'nel-loading',
  templateUrl: './loading.component.html',
  animations: [loadingMotion],
  host: {
    class: 'el-loading-parent--relative'
  }
})

export class NelLoadingComponent {
  @Input() nelLoading = true;
  @Input() nelText?: string;
  @Input() nelSpinner?: string;
  @Input() nelBackground?: string;
  @Input() nelFullscreen = false;
}
