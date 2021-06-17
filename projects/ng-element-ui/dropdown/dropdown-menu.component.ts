import { Component, ElementRef, OnDestroy, Renderer2, ViewChild, OnInit } from '@angular/core';
import { CdkOverlayOrigin, ConnectionPositionPair } from '@angular/cdk/overlay';
import { dropdownMotion } from 'ng-element-ui/core/animation';
import { TriggerType, SizeType } from './dropdown.directive';
import { NelDropdownService } from './dropdown.service';

@Component({
  selector: 'nel-dropdown-menu',
  exportAs: 'nelDropdownMenu',
  templateUrl: './dropdown-menu.component.html',
  animations: [dropdownMotion],
  providers: [
    NelDropdownService
  ]
})

export class NelDropdownMenuComponent implements OnDestroy {
  trigger!: TriggerType;
  origin!: CdkOverlayOrigin;
  isOpen = false;
  positionStrategy!: ConnectionPositionPair[];
  state = 'leave';
  hideOnClick = true;
  size?: SizeType;
  maxHeight?: string | number;
  timer: any;
  @ViewChild('dropdownEle', { static: false }) dropdownEle!: ElementRef;
  protected readonly triggerDisposables: Array<() => void> = [];

  constructor(
    public elementRef: ElementRef,
    private renderer: Renderer2,
    private dropdown: NelDropdownService
  ) {
    this.dropdown.selected$.subscribe(() => {
      if (this.hideOnClick) {
        this.close();
      }
    });
  }

  ngOnDestroy(): void {
    this.removeTriggerListeners();
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  initListen(): void {
    if (this.trigger === 'hover') {
      this.mouseenter();
      setTimeout(() => {
        this.removeTriggerListeners();
        this.triggerDisposables.push(this.renderer.listen(this.dropdownEle.nativeElement, 'mouseenter', () => this.mouseenter()));
        this.triggerDisposables.push(this.renderer.listen(this.dropdownEle.nativeElement, 'mouseleave', () => this.mouseleave()));
      }, 0);
    }
  }

  private removeTriggerListeners(): void {
    this.triggerDisposables.forEach(dispose => dispose());
    this.triggerDisposables.length = 0;
  }

  mouseenter(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  mouseleave(): void {
    this.close();
  }

  onClickOutside(event: MouseEvent): void {
    if (!this.origin.elementRef.nativeElement.contains(event.target)) {
      this.close();
    }
  }

  close(): void {
    if (this.trigger === 'hover') {
      this.timer = setTimeout(() => {
        this.state = 'leave';
        this.isOpen = false;
      }, 300);
    } else {
      this.state = 'leave';
      this.isOpen = false;
    }
  }
}
