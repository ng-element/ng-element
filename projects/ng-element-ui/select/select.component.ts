import { Component, ComponentFactory, ComponentFactoryResolver, ContentChildren, ElementRef, Renderer2, ViewContainerRef, QueryList, AfterContentInit, OnDestroy, forwardRef } from '@angular/core';
import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { Subscription } from 'rxjs';
import { NelOptionComponent } from './option.component';
import { NelSelectDropdownComponent } from './select-dropdown.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'nel-select',
  templateUrl: './select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NelSelectComponent),
      multi: true
    }
  ]
})

export class NelSelectComponent implements ControlValueAccessor, AfterContentInit, OnDestroy {
  @ContentChildren(NelOptionComponent, { descendants: false }) items?: QueryList<NelOptionComponent>;
  component: NelSelectDropdownComponent;
  protected componentFactory!: ComponentFactory<NelSelectDropdownComponent>;
  selectSub?: Subscription;
  data: any;
  change = (val: any) => { };

  constructor(
    protected hostView: ViewContainerRef,
    private elementRef: ElementRef,
    private resolver: ComponentFactoryResolver,
    private renderer: Renderer2
  ) {
    this.componentFactory = this.resolver.resolveComponentFactory(NelSelectDropdownComponent);
    const componentRef = this.hostView.createComponent(this.componentFactory);
    this.component = componentRef.instance as NelSelectDropdownComponent;
    this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), componentRef.location.nativeElement);
  }

  ngAfterContentInit(): void {
    if (!this.items) {
      return;
    }
  }

  ngOnDestroy() {
    if (this.selectSub) {
      this.selectSub.unsubscribe();
    }
  }

  open(): void {
    if (!this.component.isOpen) {
      const position: ConnectionPositionPair = {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
        offsetX: 0,
        offsetY: 10,
      };

      if (this.component && this.items) {
        const items = this.items.toArray();
        this.component.origin = { elementRef: this.elementRef };
        this.component.isOpen = true;
        this.component.positionStrategy = [position];
        this.component.state = 'into';
        this.component.options = items;

        this.selectSub = this.component.selected$.subscribe(val => {
          if (val.type === 'select') {
            this.change(val.value);
          }
          this.selectSub?.unsubscribe();
          this.component.close();
        });
      }
    } else {
      this.selectSub?.unsubscribe();
      this.component.close();
    }
  }
  writeValue(val: any): void {
    if (val) {
      this.data = val;
    }
  }

  registerOnChange(fn: any): void {
    this.change = fn;
  }

  registerOnTouched(fn: any): void { }
}
