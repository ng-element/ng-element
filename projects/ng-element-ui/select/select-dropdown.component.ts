import { Component } from '@angular/core';
import { CdkOverlayOrigin, ConnectionPositionPair } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';

@Component({
  selector: 'nel-select-dropdown',
  templateUrl: './select-dropdown.component.html'
})

export class NelSelectDropdownComponent {
  origin!: CdkOverlayOrigin;
  isOpen = false;
  positionStrategy!: ConnectionPositionPair[];
  state = 'leave';
  hideOnClick = true;
  options: any[] = [];
  optionList: any[] = [];
  selected$ = new Subject<any>();

  onClickOutside(event: MouseEvent) {
    if (!this.origin.elementRef.nativeElement.contains(event.target)) {
      this.selected$.next({ type: 'outside', value: null });
    }
  }

  close() {
    this.state = 'leave';
    this.isOpen = false;
  }

  selectOption(value: any) {
    this.options.forEach(item => {
      item.selected = false;
    });
    value.selected = true;
    this.selected$.next({ type: 'select', value: value });
  }
}
