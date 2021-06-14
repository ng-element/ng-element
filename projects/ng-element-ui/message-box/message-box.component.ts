import { Component, TemplateRef, OnInit } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';
import { AnimationEvent } from '@angular/animations';
import { messageBoxMotion } from 'ng-element-ui/core/animation';
import { MessageBoxRef } from './message-box-ref';

@Component({
  selector: 'nel-message-box',
  templateUrl: './message-box.component.html',
  animations: [messageBoxMotion]
})

export class NelMessageBoxComponent implements OnInit {
  boxType!: string;
  type?: string;
  title!: string | TemplateRef<void>;
  content!: string | TemplateRef<void>;
  cancelButtonText = '取消';
  confirmButtonText = '确定';
  cancel?: Function;
  confirm?: Function;
  beforeConfirm?: Function;
  center = false;
  state = 'start';
  overlay!: OverlayRef;
  leaveType = '';

  constructor(
    private messageBoxRef: MessageBoxRef
  ) { }

  ngOnInit(): void {
    this.boxType = this.messageBoxRef.type;
    this.title = this.messageBoxRef.title;
    this.content = this.messageBoxRef.content;
    this.overlay = this.messageBoxRef.overlay;
    if (this.messageBoxRef.options) {
      if (this.messageBoxRef.options.cancelButtonText) {
        this.cancelButtonText = this.messageBoxRef.options.cancelButtonText;
      }
      if (this.messageBoxRef.options.confirmButtonText) {
        this.confirmButtonText = this.messageBoxRef.options.confirmButtonText;
      }
      if (this.messageBoxRef.options.cancel) {
        this.cancel = this.messageBoxRef.options.cancel;
      }
      if (this.messageBoxRef.options.confirm) {
        this.confirm = this.messageBoxRef.options.confirm;
      }
      if (this.messageBoxRef.options.type) {
        this.type = this.messageBoxRef.options.type;
      }
      if (this.messageBoxRef.options.beforeConfirm) {
        this.beforeConfirm = this.messageBoxRef.options.beforeConfirm;
      }
      if (this.messageBoxRef.options.center) {
        this.center = this.messageBoxRef.options.center;
      }
    }
    this.state = 'into';
  }

  handleCancel(type: string): void {
    if (!(this.boxType === 'alert' && type === 'mask_close')) {
      this.leaveType = type === 'cancel' ? 'cancel' : 'close';
      this.state = 'leave';
    }
  }

  handleConfirm(): void {
    if (this.beforeConfirm) {
      const result = this.beforeConfirm();
      if (result) {
        this.leaveType = 'confirm';
        this.state = 'leave';
      }
    } else {
      this.leaveType = 'confirm';
      this.state = 'leave';
    }
  }

  onAnimationDone(event: AnimationEvent): void {
    if (event.toState === 'leave') {
      this.overlay.dispose();
      if (this.leaveType === 'cancel' || this.leaveType === 'close') {
        if (this.cancel) {
          this.cancel(this.leaveType);
        }
      } else {
        if (this.confirm) {
          this.confirm();
        }
      }
    }
  }
}
