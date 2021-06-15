import { Component, Input, OnInit } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { InputBoolean } from 'ng-element-ui/core/utils';

@Component({
  selector: 'nel-badge',
  templateUrl: './badge.component.html',
  host: {
    '[class]': `'el-badge'`
  }
})

export class NelBadgeComponent implements OnInit {
  static ngAcceptInputType_nelIsDot: BooleanInput;

  value?: string | number;
  @Input() nelValue?: string | number;
  @Input() nelMax?: number;
  @Input() @InputBoolean() nelIsDot = false;
  @Input() nelType: 'primary' | 'success' | 'warning' | 'danger' | 'info' = 'primary';
  @Input() nelHidden = false;

  ngOnInit(): void {
    if (this.nelMax && typeof this.nelMax === 'number' && this.nelValue) {
      if (this.nelValue > this.nelMax) {
        this.value = this.nelMax + '+';
        return;
      }
    }
    this.value = this.nelValue;
  }
}
