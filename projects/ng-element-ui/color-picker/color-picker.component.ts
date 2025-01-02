import { Component, ComponentRef, ElementRef, forwardRef, Input, OnDestroy } from '@angular/core';
import { ConnectedPosition, Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { NelColorPickerDropdownComponent } from './color-picker-dropdown.component';
import { ComponentPortal } from '@angular/cdk/portal';
import { Subscription } from 'rxjs';
import Color from './color';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type ColorFormat = 'hsl' | 'hsv' | 'hex' | 'rgb' | '';

@Component({
    selector: 'nel-color-picker',
    templateUrl: './color-picker.component.html',
    styleUrls: ['./color-picker.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NelColorPickerComponent),
            multi: true
        }
    ],
    standalone: false
})

export class NelColorPickerComponent implements OnDestroy, ControlValueAccessor {
  @Input() showAlpha = false;
  @Input() colorFormat: ColorFormat = '';
  private overlayRef!: OverlayRef;
  isOpen = false;
  outsideSub?: Subscription;
  timeout: any;
  displayedColor = '';
  modelValue = '';
  changeColorSub?: Subscription;
  selectedColorSub?: Subscription;
  change = (val: any) => { }

  constructor(
    private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef
  ) { }

  ngOnDestroy(): void {
    if (this.changeColorSub) {
      this.changeColorSub.unsubscribe();
    }
    if (this.selectedColorSub) {
      this.selectedColorSub.unsubscribe();
    }
    if (this.outsideSub) {
      this.outsideSub.unsubscribe();
    }
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  open(): void {
    if (this.isOpen) {
      return;
    }
    const positionBottom: ConnectedPosition = {
      originX: 'center',
      originY: 'bottom',
      overlayX: 'center',
      overlayY: 'top'
    };
    const positionTop: ConnectedPosition = {
      originX: 'center',
      originY: 'top',
      overlayX: 'center',
      overlayY: 'bottom'
    };
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([positionBottom, positionTop]);
    this.overlayRef = this.overlay.create({ positionStrategy });
    if (this.overlayRef) {
      const colorPickerRef: ComponentRef<NelColorPickerDropdownComponent> = this.overlayRef.attach(new ComponentPortal(NelColorPickerDropdownComponent));
      colorPickerRef.instance.color = new Color({
        enableAlpha: this.showAlpha,
        format: this.colorFormat,
        value: this.modelValue,
      });
      this.changeColorSub = colorPickerRef.instance.changeColor$?.subscribe((color: Color) => {
        this.displayedColor = color.value;

      });
      this.selectedColorSub = colorPickerRef.instance.selectedColor$?.subscribe((color: Color) => {
        this.displayedColor = color.value;
        this.modelValue = color.value;
        this.change(color.value);
        this.close();
      });
      this.isOpen = true;
      this.outsideSub = this.overlayRef.outsidePointerEvents().subscribe(() => {
        this.displayedColor = this.modelValue;
        this.change(this.modelValue);
        this.close();
      });
    }
  }

  close() {
    this.overlayRef.detach();
    this.outsideSub?.unsubscribe();
    this.changeColorSub?.unsubscribe();
    this.selectedColorSub?.unsubscribe();
    this.timeout = setTimeout(() => {
      this.isOpen = false;
    }, 150);
  }

  writeValue(value: any): void {
    this.modelValue = value;
  }

  registerOnChange(fn: any): void {
    this.change = fn;
  }

  registerOnTouched(fn: any): void { }
}
