import {
  Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges, Inject, TemplateRef, Output, EventEmitter,
  ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { fromEvent, Subscription } from 'rxjs';
import { fadeMotion } from 'ng-element-ui/core/animation';

@Component({
    selector: 'nel-backtop',
    templateUrl: './backtop.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [fadeMotion],
    standalone: false
})

export class NelBacktopComponent implements AfterViewInit, OnDestroy, OnChanges {
  doc: Document;
  subscribeScoll!: Subscription;
  visible = false;
  @Input() nelTarget!: string | HTMLElement;
  @Input() nelVisibilityHeight = 200;
  @Input() nelRight = 40;
  @Input() nelBottom = 40;
  @Input() nelTemplate!: TemplateRef<void>;
  @Output() nelClick: EventEmitter<void> = new EventEmitter<void>();
  target: HTMLElement | null = null;

  constructor(
    @Inject(DOCUMENT) doc: any,
    private cdr: ChangeDetectorRef
  ) {
    this.doc = doc;
  }

  ngOnDestroy(): void {
    this.subscribeScoll.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.initTarget();
  }

  initTarget(): void {
    if (typeof this.nelTarget === 'string') {
      this.target = this.doc.querySelector(this.nelTarget);
    } else {
      this.target = this.nelTarget;
    }

    this.registerScrollEvent();
  }

  getTarget(): HTMLElement | Window {
    return this.target || window;
  }

  getScroll(): number {
    const target = this.getTarget();
    if (target instanceof HTMLElement) {
      return target.scrollTop;
    } else {
      return target.pageYOffset;
    }
  }

  registerScrollEvent(): void {
    if (this.subscribeScoll) {
      this.subscribeScoll.unsubscribe();
    }
    this.subscribeScoll = fromEvent(this.getTarget(), 'scroll')
      .subscribe(() => {
        this.handleScroll();
      });
  }

  handleScroll(): void {
    if (this.getScroll() > this.nelVisibilityHeight) {
      this.visible = true;
    } else {
      this.visible = false;
    }
    this.cdr.detectChanges();
  }

  backTop(): void {
    this.scrollTop();
    this.nelClick.emit();
  }

  scrollTop(): void {
    const target = this.getTarget();
    target.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { nelTarget } = changes;
    if (nelTarget && !nelTarget.firstChange) {
      this.initTarget();
    }
  }
}
