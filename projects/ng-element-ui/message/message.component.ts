import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit, TemplateRef } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';
import { AnimationEvent } from '@angular/animations';
import { messageMotion } from 'ng-element-ui/core/animation';
import { MessageRef } from './message-ref';

@Component({
    selector: 'nel-message',
    templateUrl: './message.component.html',
    animations: [messageMotion],
    standalone: false
})

export class NelMessageComponent implements OnInit, AfterViewInit, OnDestroy {
  type!: string;
  id = 0;
  top = 36;
  content!: string | TemplateRef<void>;
  showClose = false;
  duration = 3000;
  center = false;
  onClose?: Function;
  timer: any;
  state = 'start';
  overlay!: OverlayRef;
  @ViewChild('messageEle', { static: false }) messageEle!: ElementRef;

  constructor(
    private messageRef: MessageRef
  ) { }

  ngOnDestroy(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  ngOnInit(): void {
    this.type = this.messageRef.type;
    this.id = this.messageRef.id;
    this.top = this.messageRef.top;
    this.content = this.messageRef.nelContent;
    this.overlay = this.messageRef.overlay;
    if (this.messageRef.nelOptions) {
      if (this.messageRef.nelOptions.showClose) {
        this.showClose = this.messageRef.nelOptions.showClose;
      }
      if (this.messageRef.nelOptions.duration !== undefined) {
        this.duration = this.messageRef.nelOptions.duration;
      }
      if (this.messageRef.nelOptions.center) {
        this.center = this.messageRef.nelOptions.center;
      }
      if (this.messageRef.nelOptions.onClose) {
        this.onClose = this.messageRef.nelOptions.onClose;
      }
    }

    this.initTimer();
  }

  ngAfterViewInit(): void {
    this.messageRef.height = this.messageEle.nativeElement.offsetHeight;
  }

  initTimer(): void {
    if (this.duration > 0) {
      this.timer = setTimeout(() => {
        this.state = 'done';
      }, this.duration);
    }
  }

  onAnimationStart(event: AnimationEvent): void {
    if (event.toState === 'done') {
      clearTimeout(this.timer);
      this.messageRef.leave.next(this.id);
    }
  }

  onAnimationDone(event: AnimationEvent): void {
    if (event.toState === 'done') {
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

    this.state = 'done';
  }
}
