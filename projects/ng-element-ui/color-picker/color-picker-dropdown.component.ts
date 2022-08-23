import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent, Subject, Subscription } from 'rxjs';
import Color from './color';

@Component({
  selector: 'nel-color-picker-dropdown',
  templateUrl: './color-picker-dropdown.component.html',
  styleUrls: ['./color-picker-dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class NelColorPickerDropdownComponent implements AfterViewInit, OnDestroy {
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
  color!: Color;
  changeColor$ = new Subject<Color>();
  selectedColor$ = new Subject<Color>();
  displayedColor = '';

  ngOnDestroy(): void {
    this.hueSliderUnSubscribe();
    this.svpanelUnSubscribe();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.getThumbTop();
      this.getSvpanel();
    }, 0);
  }

  getThumbTop(): void {
    const hue = this.color.get('hue');
    this.hueSliderThumbTop = Math.round(
      (hue * (this.hueSlider.nativeElement.offsetHeight - this.hueSliderThumb.nativeElement.offsetHeight / 2)) / 360
    ) + 'px';
  }

  getSvpanel() {
    const saturation = this.color.get('saturation');
    const value = this.color.get('value');
    const { clientWidth: width, clientHeight: height } = this.svpanel.nativeElement;
    this.svpanelCursorLeft = (saturation * width) / 100 + 'px';
    this.svpanelCursorTop = ((100 - value) * height) / 100 + 'px';
    this.backgroundColor = `hsl(${this.color.get('hue')}, 100%, 50%)`;
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
      this.color.set('hue', hue);
      this.displayedColor = this.color.value;
      this.changeColor$?.next(this.color);
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
    this.color.set('hue', hue);
    this.displayedColor = this.color.value;
    this.changeColor$?.next(this.color);
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
      this.changeSvpanel(rect, left, top);
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
    this.changeSvpanel(rect, left, top);
  }

  svpanelUnSubscribe() {
    this.svpanelCursorMove?.unsubscribe();
    this.svpanelCursorUp?.unsubscribe();
  }

  changeSvpanel(rect: any, left: number, top: number) {
    this.color.set({
      saturation: (left / rect.width) * 100,
      value: 100 - (top / rect.height) * 100,
    });
    this.displayedColor = this.color.value;
    this.changeColor$?.next(this.color);
  }

  confirmValue() {
    this.displayedColor = this.color.value;
    this.selectedColor$?.next(this.color);
  }
}
