import { Component, Input, AfterViewInit, ElementRef, OnDestroy, ViewChild, Output, EventEmitter } from '@angular/core';
import { fromEvent, Subject, Subscription } from 'rxjs';
import { getScrollContainer } from 'ng-element-ui/core/utils';

@Component({
    selector: 'nel-affix',
    templateUrl: './affix.component.html',
    host: {
        '[class]': `'el-affix'`
    },
    standalone: false
})

export class NelAffixComponent implements AfterViewInit, OnDestroy {
  @Input() nelOffset = 0;
  @Input() nelTarget?: HTMLElement;
  @Input() nelPosition: 'top' | 'bottom' = 'top';
  @Input() nelZIndex = 100;
  @Output() nelOnChange = new EventEmitter<boolean>();
  @Output() nelOnScroll = new EventEmitter<{ scrollTop: number, affix: boolean }>();
  fixed = false;
  width = 0;
  height = 0;
  container!: HTMLElement;
  subscribeScoll!: Subscription;
  reachBottom$ = new Subject<any>();
  @ViewChild('fixedEle', { static: false }) fixedEle!: ElementRef;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnDestroy(): void {
    if (this.subscribeScoll) {
      this.subscribeScoll.unsubscribe();
    }
  }

  ngAfterViewInit(): void {
    this.width = this.elementRef.nativeElement.offsetWidth;
    this.height = this.elementRef.nativeElement.offsetHeight;
    this.container = getScrollContainer(this.elementRef.nativeElement, true);
    this.initScroll();
    this.handleScroll(true);
  }

  initScroll(): void {
    this.subscribeScoll = fromEvent(this.container, 'scroll')
      .subscribe(() => {
        this.handleScroll();
      });
  }

  handleScroll(init = false): void {
    let fixed = false;
    if (this.nelPosition === 'top') {
      if (this.elementRef.nativeElement.getBoundingClientRect().top <= this.nelOffset) {
        fixed = true;
      }
      if (fixed && this.nelTarget) {
        const difference = this.nelTarget.getBoundingClientRect().bottom - this.nelOffset - this.height;
        if (difference < 0) {
          this.fixedEle.nativeElement.style.transform = `translateY(${difference}px)`;
          this.fixedEle.nativeElement.style.zIndex = '';
        } else {
          this.fixedEle.nativeElement.style.transform = '';
          this.fixedEle.nativeElement.style.zIndex = this.nelZIndex;
        }
        if (this.nelTarget.getBoundingClientRect().bottom < 0) {
          fixed = false;
        } else {
          fixed = true;
        }
      }
    } else {
      if (document.documentElement.clientHeight - this.elementRef.nativeElement.getBoundingClientRect().bottom <= this.nelOffset) {
        fixed = true;
      }
    }
    if (this.fixed !== fixed) {
      this.changeFixed(fixed);
    }
    if (!init) {
      this.nelOnScroll.emit({ scrollTop: this.container.scrollTop, affix: fixed });
    }
  }

  changeFixed(fixed: boolean): void {
    setTimeout(() => {
      this.fixed = fixed;
      if (fixed) {
        this.elementRef.nativeElement.style.width = this.width + 'px';
        this.elementRef.nativeElement.style.height = this.height + 'px';
        this.fixedEle.nativeElement.style.width = this.width + 'px';
        this.fixedEle.nativeElement.style.height = this.height + 'px';
        if (this.nelPosition === 'top') {
          this.fixedEle.nativeElement.style.top = this.nelOffset + 'px';
        } else {
          this.fixedEle.nativeElement.style.bottom = this.nelOffset + 'px';
        }
      } else {
        this.fixedEle.nativeElement.style.width = '';
        this.fixedEle.nativeElement.style.height = '';
        this.fixedEle.nativeElement.style.top = '';
        this.elementRef.nativeElement.style.width = '';
        this.elementRef.nativeElement.style.height = '';
      }
      this.nelOnChange.emit(fixed);
    }, 0);
  }
}
