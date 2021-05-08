import { Component, OnInit } from '@angular/core';
import { DialogRef } from './dialog-ref';

@Component({
  selector: 'nel-dialog-confirm',
  templateUrl: './dialog-confirm.component.html'
})

export class DialogConfirmComponent implements OnInit {
  nelTitle?: string;
  nelContent?: string;
  nelOnCancel?: any;
  nelOnOk?: any;

  constructor(
    private ref: DialogRef
  ) { }

  ngOnInit(): void {
    this.nelTitle = this.ref.nelTitle;
    this.nelContent = this.ref.nelContent;
    this.nelOnCancel = this.ref.nelOnCancel;
    this.nelOnOk = this.ref.nelOnOk;
  }

  cancel(): void {
    this.ref.close(null);
    if (this.nelOnCancel) {
      this.nelOnCancel();
    }
  }

  confirm(): void {
    this.ref.close(null);
    if (this.nelOnOk) {
      this.nelOnOk();
    }
  }

  clickDialog($event: Event): void {
    $event.stopPropagation();
  }
}
