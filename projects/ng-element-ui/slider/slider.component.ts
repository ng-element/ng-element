import { Component, Input, AfterViewInit, ViewChild, ElementRef, Optional, Inject, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'nel-slider',
  templateUrl: './slider.component.html'
})

export class NelSliderComponent implements AfterViewInit, OnDestroy {
  @Input() min = 0;
  @Input() max = 100;
  @Input() disabled = false;
  @Input() step = 1;
  @ViewChild('runway', { static: false }) runwayRef!: ElementRef;
  dc: any;
  moveOb?: Subscription;
  upOb?: Subscription;
  runway = {
    width: 0,
    left: 0,
  };
  progress = '0%';

  constructor(
    @Optional() @Inject(DOCUMENT) document: any
  ) {
    this.dc = document;
  }

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
    console.log(client);
    this.runway = {
      width: client.width,
      left: client.left
    };
  }

  triggerDown(): void {
    this.moveOb = fromEvent(this.dc, 'mousemove').subscribe((event: any) => {
      const moveClientX = event.clientX - this.runway.left;
      if (moveClientX <= 0) {
        this.progress = '0%';
      } else if (moveClientX >= this.runway.width) {
        this.progress = '100%';
      } else {
        this.progress = Math.round(moveClientX * 100 / this.runway.width) + '%';
      }
    });
    this.upOb = fromEvent(this.dc, 'mouseup').subscribe((event: any) => {
      this.moveOb?.unsubscribe();
      this.upOb?.unsubscribe();
    });
  }
}
