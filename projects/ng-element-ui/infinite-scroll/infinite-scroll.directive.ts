import { Directive, AfterViewInit, ElementRef, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { getScrollContainer } from 'ng-element-ui/core/utils';
import { Subscription, Subject, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[nel-infinite-scroll]'
})

export class InfiniteScrollDirective implements AfterViewInit, OnDestroy {
  subscribeScoll!: Subscription;
  subscribeReachBottom!: Subscription;
  reachBottom$ = new Subject<any>();
  disabled = false;
  // 是否初始化
  initData = false;
  @Input() nelDistance = 0;
  @Input() set nelDisabled(value: boolean) {
    this.disabled = value;
    if (this.initData) {
      if (value) {
        if (this.subscribeScoll) {
          this.subscribeScoll.unsubscribe();
        }
        if (this.subscribeReachBottom) {
          this.subscribeReachBottom.unsubscribe();
        }
      } else {
        this.initScroll();
      }
    }
  }
  @Input() nelDelay = 200;
  @Input() nelImmediate = true;
  @Output() nelOnReachBottom: EventEmitter<void> = new EventEmitter<void>();
  observer?: MutationObserver;
  container!: HTMLElement;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnDestroy(): void {
    if (this.subscribeScoll) {
      this.subscribeScoll.unsubscribe();
    }
    if (this.subscribeReachBottom) {
      this.subscribeReachBottom.unsubscribe();
    }
  }

  ngAfterViewInit(): void {
    this.container = getScrollContainer(this.elementRef.nativeElement, true);
    if (!this.disabled) {
      this.initScroll();
      this.initImmediate();
    }
    this.initData = true;
  }

  initScroll(): void {
    this.subscribeReachBottom = this.reachBottom$.asObservable().pipe(debounceTime(this.nelDelay)).subscribe(() => {
      this.nelOnReachBottom.emit();
    });
    this.subscribeScoll = fromEvent(this.container, 'scroll')
      .subscribe(() => {
        this.handleScroll();
      });
  }

  initImmediate(): void {
    if (this.nelImmediate) {
      this.observer = new MutationObserver(mutations => {
        this.immediate();
      });
      const config = { childList: true, subtree: true };

      this.observer.observe(this.container, config);

      // 查询滚动的父元素
      this.immediate();
    }
  }

  immediate(): void {
    if (this.container.scrollHeight <= this.container.clientHeight) {
      this.nelOnReachBottom.emit();
    } else {
      if (this.observer) {
        this.observer.disconnect();
      }
    }
  }

  handleScroll(): void {
    if (this.container.scrollHeight - this.container.clientHeight
      - this.container.scrollTop <= this.nelDistance) {
      this.reachBottom$.next();
    }
  }
}
