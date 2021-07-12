import { AfterViewInit, Component, ViewChild, ElementRef, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import ResizeObserver from 'resize-observer-polyfill';

@Component({
  selector: 'nel-scrollbar',
  templateUrl: './scrollbar.component.html'
})

export class NelScrollbarComponent implements AfterViewInit, OnDestroy {
  maxHeight?: string;
  @Input() nelHeight?: string;
  @Input() nelNoresize = false;
  @Input() set nelMaxHeight(val: string | number | undefined) {
    if (val) {
      if (typeof val === 'number') {
        this.maxHeight = val + 'px';
      } else {
        this.maxHeight = val;
      }
    }
  }
  @Input() nelWrapClass?: string;
  @Input() nelViewClass?: string;
  @Output() nelOnScroll: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('scrollbarWrap', { static: false }) scrollbarWrap!: ElementRef;
  @ViewChild('scrollbarView', { static: false }) scrollbarView!: ElementRef;
  @ViewChild('verticalThumb', { static: false }) verticalThumb!: ElementRef;
  @ViewChild('horizontalThumb', { static: false }) horizontalThumb!: ElementRef;
  // 纵向滚动
  vertical = {
    // 是否可以纵向滚动
    canScroll: false,
    // 窗口高度
    wrapHeight: 0,
    // 滚动区域高度
    scrollHeight: 0,
    // 滚动条最大位置
    maxScrollTop: 0,
    // 滚动条位置
    scrollTop: 0,
    // 点击滚动条，起始位置
    clientY: 0,
    clientTop: 0
  };
  verticalMousemove!: Subscription;
  verticalMouseup!: Subscription;
  // 横向滚动
  horizontal = {
    // 是否可以横向滚动
    canScroll: false,
    // 窗口宽度
    wrapWidth: 0,
    // 滚动区域宽度
    scrollWidth: 0,
    // 滚动条最大位置
    maxScrollLeft: 0,
    // 滚动条位置
    scrollLeft: 0,
    // 点击滚动条，起始位置
    clientX: 0,
    clientLeft: 0
  };
  horizontalMousemove!: Subscription;
  horizontalMouseup!: Subscription;
  status = 'leave';
  inThumb = false;
  roWrap?: ResizeObserver;
  roView?: ResizeObserver;

  ngOnDestroy(): void {
    if (this.verticalMousemove) {
      this.verticalMousemove.unsubscribe();
    }
    if (this.verticalMouseup) {
      this.verticalMouseup.unsubscribe();
    }
    if (this.roWrap) {
      this.roWrap.unobserve(this.scrollbarWrap.nativeElement);
    }
    if (this.roView) {
      this.roView.unobserve(this.scrollbarView.nativeElement);
    }
  }

  ngAfterViewInit(): void {
    if (!this.nelNoresize) {
      // 监听wrap
      this.roWrap = new ResizeObserver((entries: any, observer: any) => {
        for (const entry of entries) {
          const { width, height } = entry.contentRect;
          // 高度是否变化
          if (height !== this.vertical.wrapHeight) {
            this.initVertical();
          }
          // 宽度是否变化
          if (width !== this.horizontal.wrapWidth) {
            this.initHorizontal();
          }
        }
      });

      this.roWrap.observe(this.scrollbarWrap.nativeElement);

      // 监听scroll
      this.roView = new ResizeObserver((entries: any, observer: any) => {
        for (const entry of entries) {
          const { width, height } = entry.contentRect;
          // 高度是否变化
          if (height !== this.vertical.scrollHeight) {
            this.initVertical();
          }
          // 宽度是否变化
          if (width !== this.horizontal.scrollWidth) {
            this.initHorizontal();
          }
        }
      });

      this.roView.observe(this.scrollbarView.nativeElement);
    }

    this.initVertical();
    this.initHorizontal();
  }

  initVertical(): void {
    // 初始化纵向滚动
    this.vertical.wrapHeight = this.scrollbarWrap.nativeElement.offsetHeight;
    this.vertical.scrollHeight = this.scrollbarWrap.nativeElement.scrollHeight;
    if (this.maxHeight) {
      const nelMaxHeight = this.maxHeight.match(/([0-9]+)px/);
      let maxHeight = 0;
      if (nelMaxHeight && nelMaxHeight.length > 0) {
        maxHeight = Number(nelMaxHeight[1]);
      }
      if (maxHeight > 0 && maxHeight > this.vertical.wrapHeight) {
        this.verticalThumb.nativeElement.style.height = '';
        return;
      }
    }
    if (this.vertical.scrollHeight > this.vertical.wrapHeight) {
      // 纵向滚动
      this.vertical.canScroll = true;
      this.vertical.maxScrollTop = this.vertical.scrollHeight - this.vertical.wrapHeight;
      const heightPercentage = this.vertical.wrapHeight / this.vertical.scrollHeight;
      this.verticalThumb.nativeElement.style.height = heightPercentage * 100 + '%';
      this.verticalScrollHandle();
    }
  }

  initHorizontal(): void {
    // 初始化横向滚动
    this.horizontal.wrapWidth = this.scrollbarWrap.nativeElement.offsetWidth;
    this.horizontal.scrollWidth = this.scrollbarWrap.nativeElement.scrollWidth;
    if (this.horizontal.scrollWidth > this.horizontal.wrapWidth) {
      // 横向滚动
      this.horizontal.canScroll = true;
      this.horizontal.maxScrollLeft = this.horizontal.scrollWidth - this.horizontal.wrapWidth;
      const widthPercentage = this.horizontal.wrapWidth / this.horizontal.scrollWidth;
      this.horizontalThumb.nativeElement.style.width = widthPercentage * 100 + '%';
      this.horizontalScrollHandle();
    }
  }

  onWrapScroll($event: any): void {
    $event.stopPropagation();
    this.vertical.scrollTop = this.scrollbarWrap.nativeElement.scrollTop;
    this.verticalScrollHandle();
  }

  verticalScrollHandle(scrollTop = false): void {
    if (this.vertical.scrollTop < 0) {
      this.vertical.scrollTop = 0;
    }
    if (this.vertical.scrollTop > this.vertical.maxScrollTop) {
      this.vertical.scrollTop = this.vertical.maxScrollTop;
    }
    const transformPercentage = (this.vertical.scrollTop / this.vertical.wrapHeight);
    this.verticalThumb.nativeElement.style.transform = `translateY(${transformPercentage * 100}%)`;
    /**
     * 当拖动滚动条时，需要滚动到指定位置
     */
    if (scrollTop) {
      this.scrollbarWrap.nativeElement.scrollTop = this.vertical.scrollTop;
    }
    this.nelOnScroll.emit({
      scrollLeft: this.horizontal.scrollLeft,
      scrollTop: this.vertical.scrollTop
    });
  }

  mouseEnter(): void {
    this.status = 'enter';
  }

  mouseLeave(): void {
    if (!this.inThumb) {
      this.status = 'leave';
    }
  }

  verticalThumbDown($event: MouseEvent): void {
    $event.preventDefault();
    this.vertical.clientY = $event.clientY;
    this.vertical.clientTop = this.vertical.scrollTop;
    this.inThumb = true;

    // 打开移动事件
    this.verticalMousemove = fromEvent(document, 'mousemove')
      .subscribe((event) => {
        this.verticalThumbMove(event as MouseEvent);
      });
    this.verticalMouseup = fromEvent(document, 'mouseup')
      .subscribe(() => {
        this.inThumb = false;
        this.verticalMousemove.unsubscribe();
        this.verticalMouseup.unsubscribe();
      });
  }

  verticalThumbMove($event: MouseEvent): void {
    $event.preventDefault();
    const clientY = $event.clientY;
    const moveDistance = clientY - this.vertical.clientY;
    const thumbMoveDistance = this.vertical.wrapHeight - this.verticalThumb.nativeElement.offsetHeight;
    const scrollMoveDistance = this.vertical.scrollHeight - this.vertical.wrapHeight;
    const d = moveDistance / thumbMoveDistance * scrollMoveDistance;
    this.vertical.scrollTop = this.vertical.clientTop + d;
    this.verticalScrollHandle(true);
  }

  horizontalThumbDown($event: MouseEvent): void {
    $event.preventDefault();
    this.horizontal.clientX = $event.clientX;
    this.horizontal.clientLeft = this.horizontal.scrollLeft;
    this.inThumb = true;

    // 打开移动事件
    this.horizontalMousemove = fromEvent(document, 'mousemove')
      .subscribe((event) => {
        this.horizontalThumbMove(event as MouseEvent);
      });
    this.horizontalMouseup = fromEvent(document, 'mouseup')
      .subscribe(() => {
        this.inThumb = false;
        this.horizontalMousemove.unsubscribe();
        this.horizontalMouseup.unsubscribe();
      });
  }

  horizontalThumbMove($event: MouseEvent): void {
    $event.preventDefault();
    const clientX = $event.clientX;
    const moveDistance = clientX - this.horizontal.clientX;
    const thumbMoveDistance = this.horizontal.wrapWidth - this.horizontalThumb.nativeElement.offsetWidth;
    const scrollMoveDistance = this.horizontal.scrollWidth - this.horizontal.wrapWidth;
    const d = moveDistance / thumbMoveDistance * scrollMoveDistance;
    this.horizontal.scrollLeft = this.horizontal.clientLeft + d;
    this.horizontalScrollHandle(true);
  }

  horizontalScrollHandle(scrollTop = false): void {
    if (this.horizontal.scrollLeft < 0) {
      this.horizontal.scrollLeft = 0;
    }
    if (this.horizontal.scrollLeft > this.horizontal.maxScrollLeft) {
      this.horizontal.scrollLeft = this.horizontal.maxScrollLeft;
    }
    const transformPercentage = (this.horizontal.scrollLeft / this.horizontal.wrapWidth);
    this.horizontalThumb.nativeElement.style.transform = `translateX(${transformPercentage * 100}%)`;
    /**
     * 当拖动滚动条时，需要滚动到指定位置
     */
    if (scrollTop) {
      this.scrollbarWrap.nativeElement.scrollLeft = this.horizontal.scrollLeft;
    }
    this.nelOnScroll.emit({
      scrollLeft: this.horizontal.scrollLeft,
      scrollTop: this.vertical.scrollTop
    });
  }
}
