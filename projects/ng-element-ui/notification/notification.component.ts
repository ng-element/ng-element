import { Component, TemplateRef, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';
import { AnimationEvent } from '@angular/animations';
import { notificationMotion } from 'ng-element-ui/core/animation';
import { NelNotificationRef, PositionType } from './notification-ref';

@Component({
    selector: 'nel-notification',
    templateUrl: './notification.component.html',
    animations: [notificationMotion],
    standalone: false
})

export class NelNotificationComponent implements OnInit, AfterViewInit, OnDestroy {
  type!: string;
  id = 0;
  position!: PositionType;
  top = 16;
  bottom = 16;
  title!: string | TemplateRef<void>;
  content!: string | TemplateRef<void>;
  showClose = true;
  duration = 3000;
  onClose?: Function;
  timer: any;
  state = '';
  overlay!: OverlayRef;
  @ViewChild('notificationEle', { static: false }) notificationEle!: ElementRef;

  constructor(
    private notificationRef: NelNotificationRef
  ) { }

  ngOnDestroy(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  ngOnInit(): void {
    this.type = this.notificationRef.type;
    this.id = this.notificationRef.id;
    this.position = this.notificationRef.position;
    this.top = this.notificationRef.top;
    this.bottom = this.notificationRef.bottom;
    this.title = this.notificationRef.title;
    this.content = this.notificationRef.content;
    this.overlay = this.notificationRef.overlay;
    if (this.notificationRef.options) {
      if (this.notificationRef.options.duration !== undefined) {
        this.duration = this.notificationRef.options.duration;
      }
      if (this.notificationRef.options.showClose !== undefined) {
        this.showClose = this.notificationRef.options.showClose;
      }
      if (this.notificationRef.options.onClose) {
        this.onClose = this.notificationRef.options.onClose;
      }
    }
    if (this.position === 'topRight' || this.position === 'bottomRight') {
      this.state = 'rightInto';
    } else {
      this.state = 'leftInto';
    }

    this.initTimer();
  }

  ngAfterViewInit(): void {
    this.notificationRef.height = this.notificationEle.nativeElement.offsetHeight;
  }
  initTimer(): void {
    if (this.duration > 0) {
      this.timer = setTimeout(() => {
        this.state = 'leave';
      }, this.duration);
    }
  }

  onAnimationStart(event: AnimationEvent): void {
    if (event.toState === 'leave') {
      clearTimeout(this.timer);
      this.notificationRef.leave.next({ id: this.id, position: this.position });
    }
  }

  onAnimationDone(event: AnimationEvent): void {
    if (event.toState === 'leave') {
      this.overlay.dispose();
      if (this.onClose) {
        this.onClose();
      }
    }
  }

  mouseenter(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  mouseleave(): void {
    this.initTimer();
  }

  close(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }

    this.state = 'leave';
  }
}
