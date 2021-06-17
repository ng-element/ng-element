import { Component, Input, Optional } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { InputBoolean } from 'ng-element-ui/core/utils';
import { NelDropdownService } from './dropdown.service';

@Component({
  selector: 'nel-dropdown-item',
  templateUrl: './dropdown-item.component.html'
})

export class NelDropdownItemComponent {
  static ngAcceptInputType_nelDivided: BooleanInput;
  static ngAcceptInputType_nelDisabled: BooleanInput;

  @Input() @InputBoolean() nelDisabled = false;
  @Input() @InputBoolean() nelDivided = false;
  @Input() nelIcon?: string;

  constructor(
    @Optional() private dropdown: NelDropdownService
  ) { }

  onHostClick(event: MouseEvent): void {
    if (this.dropdown) {
      this.dropdown.select();
    }
  }
}
