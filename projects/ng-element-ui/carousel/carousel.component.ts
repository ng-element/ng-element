import {
  ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList, ViewChild,
  ElementRef, AfterViewInit, ViewChildren, OnDestroy
} from '@angular/core';
import { NelCarouselItemComponent } from './carousel-item.component';

@Component({
    selector: 'nel-carousel',
    templateUrl: './carousel.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})

export class NelCarouselComponent implements AfterViewInit, OnDestroy {
  hover = false;
  width = 0;
  height = 0;
  active = -1;
  CARD_SCALE = 0.83;
  @Input() nelHeight?: string;
  @Input() nelTrigger?: 'click';
  @Input() nelIndicatorPosition?: 'outside';
  @Input() nelArrow: 'always' | 'hover' | 'never' = 'hover';
  @Input() nelType?: 'card';
  @Input() nelDirection: 'horizontal' | 'vertical' = 'horizontal';
  @ContentChildren(NelCarouselItemComponent, { descendants: false }) items!: QueryList<NelCarouselItemComponent>;
  @ViewChild('containerEle', { static: false }) containerEle!: ElementRef;
  @ViewChild('itemContainerEle', { static: false }) itemContainerEle!: ElementRef;
  @ViewChildren('indicatorEle') indicatorList!: QueryList<ElementRef>;

  constructor() { }

  ngOnDestroy(): void {

  }

  ngAfterViewInit(): void {
    const client = this.containerEle.nativeElement.getBoundingClientRect();
    this.width = client.width;
    this.height = client.height;

    if (this.nelDirection === 'horizontal') {
      this.itemContainerEle.nativeElement.style.width = (this.items.length * 100) + '%';
    } else {
      this.itemContainerEle.nativeElement.style.height = (this.items.length * 100) + '%';
    }

    setTimeout(() => {
      this.changeActive(0, true);
    }, 0);
  }

  mouseEnter(): void {
    this.hover = true;
  }

  mouseLeave(): void {
    this.hover = false;
  }

  prev(): void {
    let active = this.active - 1;
    if (active < 0) {
      active = this.items.length - 1;
      this.items.last.left = `${-this.items.length * this.width}px`;
      // return;
    }

    this.changeActive(active, false);
  }

  next(): void {
    let active = this.active + 1;
    if (active >= this.items.length) {
      active = 0;
      this.items.first.left = `${this.items.length * this.width}px`;
    }

    this.changeActive(active, false);
  }

  indicatorSelect(index: number): void {
    if (this.nelTrigger !== 'click') {
      this.changeActive(index, true);
    }
  }

  selectItem(index: number): void {
    this.changeActive(index, true);
  }

  changeActive(active: number, indicator: boolean): void {
    if (this.active === active) {
      return;
    }
    if (this.active !== -1) {
      if (this.nelDirection === 'horizontal') {
        if (!indicator) {
          let difference = active;
          if (active === 0) {
            // 从last切换到first
            if (this.active === this.items.length - 1) {
              difference = this.items.length;
            }
          } else if (active === this.items.length - 1) {
            // 从first切换到last
            if (this.active === 0) {
              difference = -1;
            }
          }
          this.itemContainerEle.nativeElement.style.transition = 'transform .3s';
          this.itemContainerEle.nativeElement.style.transform = `translate3d(${-difference * this.width}px, 0px, 0px)`;

          // 将first或者last的left重置为空
          setTimeout(() => {
            if (active === 0) {
              this.itemContainerEle.nativeElement.style.transition = '';
              this.items.first.left = '';
              this.itemContainerEle.nativeElement.style.transform = 'translate3d(0px, 0px, 0px)';
            } else if (active === this.items.length - 1) {
              this.itemContainerEle.nativeElement.style.transition = '';
              this.items.last.left = '';
              this.itemContainerEle.nativeElement.style.transform = `translate3d(${-(this.items.length - 1) * this.width}px, 0px, 0px)`;
            }
          }, 300);
        } else {
          this.itemContainerEle.nativeElement.style.transition = 'transform .3s';
          this.itemContainerEle.nativeElement.style.transform = `translate3d(${-active * this.width}px, 0px, 0px)`;
        }
      } else {
        if (!indicator) {
          let difference = active;
          if (active === 0) {
            // 从last切换到first
            if (this.active === this.items.length - 1) {
              difference = this.items.length;
            }
          } else if (active === this.items.length - 1) {
            // 从first切换到last
            if (this.active === 0) {
              difference = -1;
            }
          }
          this.itemContainerEle.nativeElement.style.transition = 'transform .3s';
          this.itemContainerEle.nativeElement.style.transform = `translate3d(0px, ${-difference * this.height}px, 0px)`;

          // 将first或者last的left重置为空
          setTimeout(() => {
            if (active === 0) {
              this.itemContainerEle.nativeElement.style.transition = '';
              this.items.first.top = '';
              this.itemContainerEle.nativeElement.style.transform = 'translate3d(0px, 0px, 0px)';
            } else if (active === this.items.length - 1) {
              this.itemContainerEle.nativeElement.style.transition = '';
              this.items.last.left = '';
              this.itemContainerEle.nativeElement.style.transform = `translate3d(0px, ${-(this.items.length - 1) * this.height}px, 0px)`;
            }
          }, 300);
        } else {
          this.itemContainerEle.nativeElement.style.transition = 'transform .3s';
          this.itemContainerEle.nativeElement.style.transform = `translate3d(0px, ${-active * this.height}px, 0px)`;
        }
      }
    }
    this.active = active;
  }
}
