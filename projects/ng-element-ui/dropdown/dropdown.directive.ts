import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { Directive, OnInit, OnDestroy, Input, Renderer2, ElementRef } from '@angular/core';
import { NelDropdownMenuComponent } from './dropdown-menu.component';

export type TriggerType = 'click' | 'contextmenu' | 'hover';
export type SizeType = 'medium' | 'small' | 'mini';

@Directive({
  selector: '[nel-dropdown]'
})

export class NelDropdownDirective implements OnInit, OnDestroy {
  @Input() nelDropdownTrigger: TriggerType = 'hover';
  @Input() nelDropdownMenu?: NelDropdownMenuComponent;
  @Input() nelHideOnClick = true;
  @Input() nelDropdownSize?: SizeType;
  @Input() nelMaxHeight?: string | number;
  protected readonly triggerDisposables: Array<() => void> = [];

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnDestroy(): void {
    this.removeTriggerListeners();
  }

  ngOnInit(): void {
    this.trigger();
    if (this.nelDropdownMenu) {
      this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.nelDropdownMenu.elementRef.nativeElement);
    }
  }

  trigger(): void {
    if (this.nelDropdownTrigger === 'hover') {
      this.triggerDisposables.push(this.renderer.listen(this.elementRef.nativeElement, 'mouseenter', ($event) => this.show($event)));
      this.triggerDisposables.push(this.renderer.listen(this.elementRef.nativeElement, 'mouseleave', () => this.hide()));
    } else if (this.nelDropdownTrigger === 'click') {
      this.triggerDisposables.push(this.renderer.listen(this.elementRef.nativeElement, 'click', ($event) => this.show($event)));
    } else {
      this.triggerDisposables.push(this.renderer.listen(this.elementRef.nativeElement, 'contextmenu', ($event) => this.show($event)));
    }
  }

  private removeTriggerListeners(): void {
    this.triggerDisposables.forEach(dispose => dispose());
    this.triggerDisposables.length = 0;
  }

  show($event: MouseEvent): void {
    if (this.nelDropdownTrigger === 'contextmenu') {
      $event.preventDefault();
    }
    if (!this.nelDropdownMenu?.isOpen) {
      const position: ConnectionPositionPair = {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
        offsetX: 0,
        offsetY: 10,
      };

      if (this.nelDropdownMenu) {
        this.nelDropdownMenu.trigger = this.nelDropdownTrigger;
        this.nelDropdownMenu.origin = { elementRef: this.elementRef };
        this.nelDropdownMenu.isOpen = true;
        this.nelDropdownMenu.positionStrategy = [position];
        this.nelDropdownMenu.state = 'into';
        this.nelDropdownMenu.initListen();
        this.nelDropdownMenu.hideOnClick = this.nelHideOnClick;
        if (this.nelDropdownSize) {
          this.nelDropdownMenu.size = this.nelDropdownSize;
        }
        if (this.nelMaxHeight) {
          this.nelDropdownMenu.maxHeight = this.nelMaxHeight;
        }
      }
    }
  }

  hide(): void {
    this.nelDropdownMenu?.close();
  }
}
