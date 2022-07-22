import { Component, Input, AfterViewInit, ViewChild, ElementRef, Optional, Inject, OnDestroy, ChangeDetectionStrategy, forwardRef, ChangeDetectorRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { fromEvent, Subscription } from 'rxjs';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'nel-slider',
  templateUrl: './slider.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NelSliderComponent),
    multi: true
  }]
})

export class NelSliderComponent implements ControlValueAccessor, AfterViewInit, OnDestroy {
  @Input() min = 0;
  @Input() max = 100;
  @Input() disabled = false;
  @Input() step = 1;
  @Input() format?: (val: any) => {};
  @Input() showTooltip = true;
  @Input() placement: any = 'top';
  @Input() showStops = false;
  @ViewChild('runway', { static: false }) runwayRef!: ElementRef;
  dc: any;
  moveOb?: Subscription;
  upOb?: Subscription;
  runway = {
    width: 0,
    left: 0,
  };
  progress = '0%';
  value = 0;
  change = (value: any) => { };
  stops: any[] = [];

  constructor(
    @Optional() @Inject(DOCUMENT) document: any,
    private cdr: ChangeDetectorRef
  ) {
    this.dc = document;
  }

  writeValue(val: any): void {
    if (val !== this.value) {
      this.value = val;
      this.progress = val + '%';
    }
    this.changeStops();
    this.cdr.markForCheck();
  }

  registerOnChange(fn: any): void {
    this.change = fn;
  }

  registerOnTouched(fn: any): void { }

  ngOnDestroy(): void {
    if (this.moveOb) {
      this.moveOb.unsubscribe();
    }
    if (this.upOb) {
      this.upOb.unsubscribe();
    }
  }

  ngAfterViewInit(): void {
    const client = this.runwayRef.nativeElement.getBoundingClientRect();
    this.runway = {
      width: client.width,
      left: client.left
    };
  }

  triggerDown(): void {
    this.moveOb = fromEvent(this.dc, 'mousemove').subscribe((event: any) => {
      const moveClientX = event.clientX - this.runway.left;
      let val = 0;
      if (moveClientX <= 0) {
        val = 0;
      } else if (moveClientX >= this.runway.width) {
        val = 100;
      } else {
        val = Math.round(moveClientX * ((this.max - this.min) / this.step) / this.runway.width) * this.step;
      }
      this.changeVal(val);
    });
    this.upOb = fromEvent(this.dc, 'mouseup').subscribe((event: any) => {
      this.moveOb?.unsubscribe();
      this.upOb?.unsubscribe();
    });
  }

  runwayClick(event: MouseEvent): void {
    const moveClientX = event.clientX - this.runway.left;
    const val = Math.round(moveClientX * ((this.max - this.min) / this.step) / this.runway.width) * this.step;
    this.changeVal(val);
  }

  changeVal(val: number): void {
    this.value = val;
    this.progress = val + '%';
    this.change(val);
    this.changeStops();
    this.cdr.markForCheck();
  }

  formatVal(): string {
    if (this.format) {
      return this.format(this.value) + '';
    } else {
      return this.value + '';
    }
  }

  changeStops() {
    const stepLen = (this.max - this.min) / this.step;
    const stops = [];
    const startStep = this.value / this.step + 1;
    for (let i = startStep; i < stepLen; i++) {
      stops.push(i * this.step + '%');
    }
    this.stops = stops;
  }
}
