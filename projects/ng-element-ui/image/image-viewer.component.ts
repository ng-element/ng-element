import {
  Component, OnInit, ViewChildren, ElementRef, QueryList, AfterViewInit
  , ChangeDetectionStrategy, HostListener
} from '@angular/core';
import { ImageRef } from './image-ref';

@Component({
  selector: 'nel-image-viewer',
  templateUrl: './image-viewer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class NelImageViewerComponent implements OnInit, AfterViewInit {
  nelUrlList!: string[];
  nelInitialIndex!: number;
  nelInfinite = true;
  deg = 0;
  scale = 1;
  isOriginal = false;
  @ViewChildren('imgEle') imgList!: QueryList<ElementRef>;

  constructor(
    private imageRef: ImageRef
  ) { }

  ngOnInit(): void {
    this.nelUrlList = this.imageRef.nelUrlList;
    this.nelInitialIndex =
      !this.imageRef.nelInitialIndex || this.imageRef.nelInitialIndex > this.imageRef.nelUrlList.length ? 0 : this.imageRef.nelInitialIndex;
    this.nelInfinite = this.imageRef.nelInfinite;
  }

  ngAfterViewInit(): void {
    this.imgList.forEach((item, index) => {
      item.nativeElement.style.transform = 'scale(1) rotate(0deg)';
      item.nativeElement.style.marginLeft = '0px';
      item.nativeElement.style.marginTop = '0px';
      item.nativeElement.style.maxHeight = '100%';
      item.nativeElement.style.maxWidth = '100%';
      if (index !== this.nelInitialIndex) {
        item.nativeElement.style.display = 'none';
      }
    });
  }

  close(): void {
    this.imageRef.colse(this.nelInitialIndex);
    if (this.imageRef.nelOnClose) {
      this.imageRef.nelOnClose();
    }
  }

  prev(): void {
    if (this.nelInitialIndex - 1 < 0) {
      if (this.nelInfinite) {
        this.nelInitialIndex = this.nelUrlList.length - 1;
      } else {
        this.nelInitialIndex = 0;
      }
    } else {
      this.nelInitialIndex -= 1;
    }
    if (this.imageRef.nelOnSwitch) {
      this.imageRef.nelOnSwitch(this.nelInitialIndex);
    }
    this.deg = 0;
    this.scale = 1;
    this.setupTransform();
  }

  next(): void {
    if (this.nelInitialIndex + 1 < this.nelUrlList.length) {
      this.nelInitialIndex += 1;
    } else {
      if (this.nelInfinite) {
        this.nelInitialIndex = 0;
      } else {
        this.nelInitialIndex = this.nelUrlList.length - 1;
      }
    }
    if (this.imageRef.nelOnSwitch) {
      this.imageRef.nelOnSwitch(this.nelInitialIndex);
    }
    this.deg = 0;
    this.scale = 1;
    this.setupTransform();
  }

  rotateImage(val: number): void {
    this.deg = this.deg + val;
    this.setupTransform();
  }

  scaleImage(val: number): void {
    this.scale = this.scale + val;
    if (this.scale < 0.2) {
      this.scale = 0.2;
    }
    this.setupTransform();
  }

  setupTransform(transition = true): void {
    const imgEle = this.imgList.get(this.nelInitialIndex);
    if (imgEle) {
      if (transition) {
        imgEle.nativeElement.style.transition = 'transform 0.3s ease 0s';
      } else {
        imgEle.nativeElement.style.transition = '';
      }
      imgEle.nativeElement.style.transform = `scale(${this.scale}) rotate(${this.deg * 90}deg)`;
    }
  }

  changeType(): void {
    this.isOriginal = !this.isOriginal;
    this.deg = 0;
    this.scale = 1;
    this.setupTransform(false);
  }

  dragStarted(): void {
    const imgEle = this.imgList.get(this.nelInitialIndex);
    if (imgEle) {
      imgEle.nativeElement.style.transition = '';
    }
  }

  @HostListener('wheel', ['$event']) wheelScroll($event: WheelEvent): void {
    $event.stopPropagation();
    const wheelDirection = ($event as any).wheelDelta || -$event.deltaY;
    if (wheelDirection > 0) {
      // 往上滚动
      this.scaleImage(0.015);
    } else {
      // 往下滚动
      this.scaleImage(-0.015);
    }
  }
}
