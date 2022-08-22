import { Component, ElementRef, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'nel-color-picker-dropdown',
  templateUrl: './color-picker-dropdown.component.html',
  styleUrls: ['./color-picker-dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class NelColorPickerDropdownComponent implements OnDestroy {
  @ViewChild('hueSlider', { static: false }) hueSlider!: ElementRef;
  @ViewChild('hueSliderThumb', { static: false }) hueSliderThumb!: ElementRef;
  @ViewChild('svpanel', { static: false }) svpanel!: ElementRef;
  @ViewChild('svpanelCursor', { static: false }) svpanelCursor!: ElementRef;
  hueSliderThumbMove?: Subscription;
  hueSliderThumbUp?: Subscription;
  hueSliderThumbTop = '0px';
  svpanelCursorMove?: Subscription;
  svpanelCursorUp?: Subscription;
  svpanelCursorTop = '0px';
  svpanelCursorLeft = '0px';
  backgroundColor = 'hsl(0, 100%, 50%)';

  ngOnDestroy(): void {
    this.hueSliderUnSubscribe();
    this.svpanelUnSubscribe();
  }

  initHueSlider(): void {
    this.hueSliderUnSubscribe();
    const rect = this.hueSlider.nativeElement.getBoundingClientRect();
    this.hueSliderThumbMove = fromEvent(document, 'mousemove').subscribe((event) => {
      (event as MouseEvent).preventDefault();
      let hue = 0;
      let top = 0;
      if ((event as MouseEvent).clientY < rect.top) {
        top = 0;
      } else if ((event as MouseEvent).clientY > rect.top + rect.height - 2) {
        top = rect.height - 2;
      } else {
        top = (event as MouseEvent).clientY - rect.top;
      }
      hue = Math.round(
        ((top - this.hueSliderThumb.nativeElement.offsetHeight / 2) /
          (rect.height - this.hueSliderThumb.nativeElement.offsetHeight)) *
        360
      );
      this.hueSliderThumbTop = top + 'px';
      this.backgroundColor = `hsl(${hue}, 100%, 50%)`;
    });
    this.hueSliderThumbUp = fromEvent(document, 'mouseup').subscribe((event) => {
      this.hueSliderUnSubscribe();
    });
  }

  clickHueSliderBar(event: MouseEvent): void {
    const rect = this.hueSlider.nativeElement.getBoundingClientRect();
    const top = event.clientY - rect.top;
    const hue = Math.round(
      ((top - this.hueSliderThumb.nativeElement.offsetHeight / 2) /
        (rect.height - this.hueSliderThumb.nativeElement.offsetHeight)) *
      360
    );
    this.hueSliderThumbTop = top + 'px';
    this.backgroundColor = `hsl(${hue}, 100%, 50%)`;
  }

  hueSliderUnSubscribe() {
    this.hueSliderThumbMove?.unsubscribe();
    this.hueSliderThumbUp?.unsubscribe();
  }

  initSvpanel(): void {
    this.svpanelUnSubscribe();
    const rect = this.svpanel.nativeElement.getBoundingClientRect();
    this.svpanelCursorMove = fromEvent(document, 'mousemove').subscribe((event) => {
      (event as MouseEvent).preventDefault();
      let top = 0;
      let left = 0;
      if ((event as MouseEvent).clientY < rect.top) {
        top = 0;
      } else if ((event as MouseEvent).clientY > rect.top + rect.height) {
        top = rect.height;
      } else {
        top = (event as MouseEvent).clientY - rect.top;
      }
      if ((event as MouseEvent).clientX < rect.left) {
        left = 0;
      } else if ((event as MouseEvent).clientX > rect.left + rect.width) {
        left = rect.width;
      } else {
        left = (event as MouseEvent).clientX - rect.left;
      }
      this.svpanelCursorTop = top + 'px';
      this.svpanelCursorLeft = left + 'px';
    });
    this.hueSliderThumbUp = fromEvent(document, 'mouseup').subscribe((event) => {
      this.svpanelUnSubscribe();
    });
  }

  clickSvpanel(event: MouseEvent): void {
    const rect = this.svpanel.nativeElement.getBoundingClientRect();
    const top = event.clientY - rect.top;
    const left = event.clientX - rect.left;
    this.svpanelCursorTop = top + 'px';
    this.svpanelCursorLeft = left + 'px';
  }

  svpanelUnSubscribe() {
    this.svpanelCursorMove?.unsubscribe();
    this.svpanelCursorUp?.unsubscribe();
  }
}
