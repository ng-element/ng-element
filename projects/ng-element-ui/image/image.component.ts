import {
  Component, Input, TemplateRef, AfterViewInit, ElementRef, OnDestroy, ChangeDetectionStrategy,
  ChangeDetectorRef, Output, EventEmitter
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { getScrollContainer } from 'ng-element-ui/core/utils';
import { NelImageService } from './image.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'nel-image',
  templateUrl: './image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'el-image'
  }
})

export class NelImageComponent implements AfterViewInit, OnDestroy {
  loading = true;
  hasLoadError = false;
  src?: string;
  @Input() nelSrc?: string;
  @Input() nelFit?: string;
  @Input() nelAlt?: string;
  @Input() nelPlaceholder?: string | TemplateRef<void>;
  @Input() nelError?: string | TemplateRef<void>;
  @Input() nelLazy = false;
  @Input() nelPreviewSrcList?: string[];
  @Output() nelOnLoad: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() nelOnError: EventEmitter<Error> = new EventEmitter<Error>();
  container!: HTMLElement;
  subscribeLazy!: Subscription;

  constructor(
    private elementRef: ElementRef,
    private cdr: ChangeDetectorRef,
    private imageS: NelImageService
  ) { }

  ngOnDestroy(): void {
    if (this.subscribeLazy) {
      this.subscribeLazy.unsubscribe();
    }
  }

  ngAfterViewInit(): void {
    if (this.nelSrc) {
      if (this.nelLazy) {
        this.container = getScrollContainer(this.elementRef.nativeElement, true);
        const clientHeight = this.container.clientHeight;
        const offsetTop = this.container.offsetTop;
        const elOffsetTop = this.elementRef.nativeElement.offsetTop;
        if (elOffsetTop - offsetTop <= clientHeight) {
          this.loadImage();
        } else {
          this.lazyImage();
        }
      } else {
        this.loadImage();
      }
    } else {
      setTimeout(() => {
        this.loading = false;
        this.hasLoadError = true;
        this.cdr.markForCheck();
      }, 0);
    }
  }

  loadImage(): void {
    this.loading = true;
    setTimeout(() => {
      const img = new Image();
      img.src = this.nelSrc!;
      img.onload = (e) => {
        this.handlerLoad(e);
      };
      img.onerror = (e) => {
        this.handlerError(e as unknown as Error);
      };
    }, 0);
  }

  lazyImage(): void {
    setTimeout(() => {
      this.loading = true;
      this.subscribeLazy = fromEvent(this.container, 'scroll')
        .pipe(debounceTime(200))
        .subscribe(() => {
          this.handleLazy();
        });
    }, 0);
  }

  handlerLoad(e: Event): void {
    this.loading = false;
    this.src = this.nelSrc;
    this.nelOnLoad.emit(e);
    this.cdr.markForCheck();
  }

  handlerError(e: Error): void {
    this.loading = false;
    this.hasLoadError = true;
    this.nelOnError.emit(e);
    this.cdr.markForCheck();
  }

  handleLazy(): void {
    const clientHeight = this.container.clientHeight;
    const offsetTop = this.container.offsetTop;
    const scrollTop = this.container.scrollTop;
    const elOffsetTop = this.elementRef.nativeElement.offsetTop;
    if (elOffsetTop - offsetTop <= clientHeight + scrollTop) {
      this.loadImage();
      this.subscribeLazy.unsubscribe();
    }
  }

  preview(): void {
    if (this.nelPreviewSrcList && this.nelPreviewSrcList.length > 0) {
      this.imageS.preview({
        nelUrlList: this.nelPreviewSrcList,
        nelInitialIndex: 0
      });
    }
  }
}
